<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EbookResource\Pages;
use App\Filament\Resources\EbookResource\RelationManagers;
use App\Models\Ebook;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EbookResource extends Resource
{
    protected static ?string $model = Ebook::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';
    protected static ?string $navigationGroup = 'เนื้อหา';
    protected static ?string $navigationLabel = 'E-book';
    protected static ?string $modelLabel = 'E-book';
    protected static ?string $pluralModelLabel = 'E-book ทั้งหมด';
    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูล E-book')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('ชื่อ E-book')
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
                        Forms\Components\TextInput::make('author')
                            ->label('ผู้แต่ง')
                            ->maxLength(255),
                        Forms\Components\TextInput::make('pages_count')
                            ->label('จำนวนหน้า')
                            ->numeric(),
                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('cover_image')
                            ->label('รูปปก')
                            ->buttonLabel('เลือกรูปภาพ')
                            ->columnSpanFull(),
                        \Awcodes\Curator\Components\Forms\CuratorPicker::make('file_path')
                            ->label('ไฟล์ PDF')
                            ->buttonLabel('เลือกไฟล์ PDF')
                            ->acceptedFileTypes(['application/pdf'])
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

                Forms\Components\Section::make('การเข้าถึง')
                    ->schema([
                        Forms\Components\Select::make('access_type')
                            ->label('ประเภทการเข้าถึง')
                            ->options([
                                'free' => '🟢 ฟรีสำหรับทุกคน',
                                'members_only' => '🔵 สมาชิกเท่านั้น (ต้อง Login)',
                                'premium' => '🟡 Premium (ต้องซื้อ)',
                            ])
                            ->default('free')
                            ->required()
                            ->live()
                            ->columnSpanFull(),
                        Forms\Components\TextInput::make('preview_percentage')
                            ->label('เปอร์เซ็นต์หน้าตัวอย่าง')
                            ->numeric()
                            ->default(10)
                            ->suffix('%')
                            ->helperText('% ของหน้าทั้งหมดที่แสดงเป็นตัวอย่างสำหรับผู้ที่ยังไม่ได้ดาวน์โหลด')
                            ->minValue(0)
                            ->maxValue(100),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('cover_image')
                    ->label('ปก')
                    ->circular()
                    ->defaultImageUrl(url('/images/default-ebook-cover.png')),
                Tables\Columns\TextColumn::make('title')
                    ->label('ชื่อ E-book')
                    ->searchable()
                    ->sortable()
                    ->limit(40),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('หมวดหมู่')
                    ->badge()
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('access_type')
                    ->label('การเข้าถึง')
                    ->badge()
                    ->colors([
                        'success' => 'free',
                        'info' => 'members_only',
                        'warning' => 'premium',
                    ])
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'free' => '🟢 ฟรี',
                        'members_only' => '🔵 สมาชิก',
                        'premium' => '🟡 Premium',
                        default => $state,
                    }),
                Tables\Columns\TextColumn::make('price')
                    ->label('ราคา')
                    ->money('THB')
                    ->sortable(),
                Tables\Columns\TextColumn::make('author')
                    ->label('ผู้แต่ง')
                    ->searchable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('pages_count')
                    ->label('จำนวนหน้า')
                    ->numeric()
                    ->sortable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('downloads_count')
                    ->label('ดาวน์โหลด')
                    ->numeric()
                    ->sortable()
                    ->toggleable(),
                Tables\Columns\TextColumn::make('views_count')
                    ->label('เข้าชม')
                    ->numeric()
                    ->sortable()
                    ->toggleable(),
                Tables\Columns\IconColumn::make('is_published')
                    ->label('เผยแพร่')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_featured')
                    ->label('แนะนำ')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้างเมื่อ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->label('หมวดหมู่')
                    ->relationship('category', 'name'),
                Tables\Filters\SelectFilter::make('access_type')
                    ->label('การเข้าถึง')
                    ->options([
                        'free' => 'ฟรี',
                        'members_only' => 'สมาชิก',
                        'premium' => 'Premium',
                    ]),
                Tables\Filters\TernaryFilter::make('is_published')
                    ->label('เผยแพร่'),
                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('แนะนำ'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('publish')
                        ->label('เผยแพร่')
                        ->icon('heroicon-o-check-circle')
                        ->action(fn($records) => $records->each->update(['is_published' => true]))
                        ->deselectRecordsAfterCompletion(),
                    Tables\Actions\BulkAction::make('unpublish')
                        ->label('ยกเลิกเผยแพร่')
                        ->icon('heroicon-o-x-circle')
                        ->action(fn($records) => $records->each->update(['is_published' => false]))
                        ->deselectRecordsAfterCompletion(),
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
            'index' => Pages\ListEbooks::route('/'),
            'create' => Pages\CreateEbook::route('/create'),
            'view' => Pages\ViewEbook::route('/{record}'),
            'edit' => Pages\EditEbook::route('/{record}/edit'),
        ];
    }
}
