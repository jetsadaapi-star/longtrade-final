<?php

namespace App\Filament\Resources;

use App\Filament\Resources\IndicatorResource\Pages;
use App\Filament\Resources\IndicatorResource\RelationManagers;
use App\Models\Indicator;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class IndicatorResource extends Resource
{
    protected static ?string $model = Indicator::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'อินดิเคเตอร์';
    protected static ?string $modelLabel = 'อินดิเคเตอร์';
    protected static ?string $pluralModelLabel = 'อินดิเคเตอร์ทั้งหมด';

    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลอินดิเคเตอร์')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('ชื่ออินดิเคเตอร์')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn(string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),
                        Forms\Components\TextInput::make('slug')
                            ->label('Slug (URL)')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\Select::make('category_id')
                            ->label('หมวดหมู่')
                            ->relationship('category', 'name')
                            ->required(),
                        Forms\Components\TextInput::make('price')
                            ->label('ราคา')
                            ->numeric()
                            ->prefix('฿'),
                        Forms\Components\TextInput::make('version')
                            ->label('เวอร์ชัน')
                            ->maxLength(255),
                        Forms\Components\FileUpload::make('image')
                            ->label('รูปปก')
                            ->image()
                            ->directory('indicators')
                            ->columnSpanFull(),
                        Forms\Components\FileUpload::make('file_path')
                            ->label('ไฟล์ดาวน์โหลด')
                            ->directory('indicators/files')
                            ->columnSpanFull(),
                        Forms\Components\RichEditor::make('description')
                            ->label('รายละเอียด')
                            ->columnSpanFull(),
                        Forms\Components\Toggle::make('is_featured')
                            ->label('แนะนำ (Featured)')
                            ->default(false),
                        Forms\Components\Toggle::make('is_published')
                            ->label('เผยแพร่')
                            ->default(true),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
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
            'index' => Pages\ListIndicators::route('/'),
            'create' => Pages\CreateIndicator::route('/create'),
            'view' => Pages\ViewIndicator::route('/{record}'),
            'edit' => Pages\EditIndicator::route('/{record}/edit'),
        ];
    }
}
