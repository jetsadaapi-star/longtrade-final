<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PageResource\Pages;
use App\Filament\Resources\PageResource\RelationManagers;
use App\Models\Page;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PageResource extends Resource
{
    protected static ?string $model = Page::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';
    protected static ?string $navigationGroup = 'จัดการเว็บไซต์';
    protected static ?string $navigationLabel = 'หน้าเว็บทั้งหมด';
    protected static ?string $modelLabel = 'หน้าเว็บ';
    protected static ?string $pluralModelLabel = 'หน้าเว็บทั้งหมด';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลหน้าเว็บ')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('ชื่อหน้า')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug (URL)')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\Toggle::make('is_active')
                            ->label('เปิดใช้งาน')
                            ->default(true),
                        Forms\Components\Toggle::make('is_home')
                            ->label('ตั้งเป็นหน้าแรก')
                            ->helperText('ถ้าเปิดใช้งาน หน้านี้จะถูกใช้เป็นหน้าแรกของเว็บไซต์'),
                    ])->columns(2),

                Forms\Components\Section::make('เนื้อหา (HTML & CSS)')
                    ->schema([
                        Forms\Components\Textarea::make('content')
                            ->label('HTML Content')
                            ->rows(15)
                            ->helperText('คุณสามารถวางโค้ด HTML ที่นี่ (เช่น โค้ดที่ได้จาก AI)'),
                        Forms\Components\Textarea::make('custom_css')
                            ->label('Custom CSS')
                            ->rows(10)
                            ->helperText('CSS สำหรับตกแต่งหน้านี้ (ไม่ต้องใส่ <style>)'),
                    ]),

                Forms\Components\Section::make('ตั้งค่า SEO')
                    ->schema([
                        Forms\Components\TextInput::make('seo_title')
                            ->label('SEO Title')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('seo_description')
                            ->label('Meta Description')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('seo_keywords')
                            ->label('Keywords')
                            ->maxLength(255),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_home')
                    ->boolean(),
                Tables\Columns\TextColumn::make('seo_title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('seo_keywords')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPages::route('/'),
            'create' => Pages\CreatePage::route('/create'),
            'view' => Pages\ViewPage::route('/{record}'),
            'edit' => Pages\EditPage::route('/{record}/edit'),
        ];
    }
}
