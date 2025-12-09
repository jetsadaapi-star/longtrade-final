<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Awcodes\Curator\Components\Tables\CuratorColumn;
use Filament\Forms\Set;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static ?string $navigationLabel = 'ผลิตภัณฑ์';

    protected static ?string $modelLabel = 'ผลิตภัณฑ์';

    protected static ?string $pluralModelLabel = 'ผลิตภัณฑ์';

    protected static ?string $navigationGroup = 'สินค้าและบริการ';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลพื้นฐาน')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('ชื่อผลิตภัณฑ์')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),

                        Forms\Components\TextInput::make('slug')
                            ->label('Slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true)
                            ->helperText('URL-friendly version of the name'),

                        Forms\Components\Select::make('category')
                            ->label('ประเภท')
                            ->required()
                            ->options([
                                'expert_advisors' => 'Expert Advisors (EA)',
                                'indicators' => 'อินดิเคเตอร์',
                                'tradingview' => 'TradingView',
                            ])
                            ->native(false),

                        Forms\Components\RichEditor::make('description')
                            ->label('คำอธิบาย')
                            ->columnSpanFull()
                            ->toolbarButtons([
                                'bold',
                                'italic',
                                'underline',
                                'bulletList',
                                'orderedList',
                                'link',
                                'h2',
                                'h3',
                            ]),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('ราคาและการเข้าถึง')
                    ->schema([
                        Forms\Components\Select::make('access_type')
                            ->label('ประเภทการเข้าถึง')
                            ->required()
                            ->options([
                                'free' => 'ฟรี',
                                'premium' => 'พรีเมียม (ต้องซื้อ)',
                                'members_only' => 'สมาชิกเท่านั้น',
                            ])
                            ->native(false)
                            ->live(),

                        Forms\Components\TextInput::make('price')
                            ->label('ราคา (บาท)')
                            ->numeric()
                            ->default(0)
                            ->prefix('฿')
                            ->visible(fn(Forms\Get $get) => $get('access_type') === 'premium'),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('ไฟล์ผลิตภัณฑ์')
                    ->schema([
                        CuratorPicker::make('file_path')
                            ->label('ไฟล์ผลิตภัณฑ์')
                            ->helperText('อัปโหลดไฟล์ .ex4, .ex5, .mq4, .mq5, หรือ .zip')
                            ->buttonLabel('เลือกไฟล์')
                            ->columnSpanFull(),

                        Forms\Components\TextInput::make('file_version')
                            ->label('เวอร์ชัน')
                            ->maxLength(50)
                            ->placeholder('เช่น 1.0.0'),

                        Forms\Components\TextInput::make('file_size')
                            ->label('ขนาดไฟล์ (bytes)')
                            ->numeric()
                            ->disabled()
                            ->helperText('จะถูกคำนวณอัตโนมัติ'),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('รายละเอียดผลิตภัณฑ์')
                    ->schema([
                        Forms\Components\RichEditor::make('requirements')
                            ->label('ความต้องการของระบบ')
                            ->columnSpanFull()
                            ->toolbarButtons([
                                'bold',
                                'italic',
                                'bulletList',
                                'orderedList',
                            ]),

                        Forms\Components\RichEditor::make('installation_guide')
                            ->label('คู่มือการติดตั้ง')
                            ->columnSpanFull()
                            ->toolbarButtons([
                                'bold',
                                'italic',
                                'bulletList',
                                'orderedList',
                                'link',
                            ]),

                        Forms\Components\TextInput::make('demo_url')
                            ->label('ลิงก์ Demo')
                            ->url()
                            ->maxLength(500)
                            ->placeholder('https://...'),
                    ]),

                Forms\Components\Section::make('รูปภาพและสื่อ')
                    ->schema([
                        CuratorPicker::make('thumbnail_id')
                            ->label('รูปภาพขนาดย่อ')
                            ->relationship('thumbnail', 'id')
                            ->buttonLabel('เลือกรูปภาพ'),

                        CuratorPicker::make('featured_image_id')
                            ->label('รูปภาพหน้าปก')
                            ->relationship('featuredImage', 'id')
                            ->buttonLabel('เลือกรูปภาพ'),
                    ])
                    ->columns(2),

                Forms\Components\Section::make('การตั้งค่า')
                    ->schema([
                        Forms\Components\Select::make('status')
                            ->label('สถานะ')
                            ->required()
                            ->options([
                                'draft' => 'แบบร่าง',
                                'published' => 'เผยแพร่',
                                'archived' => 'เก็บถาวร',
                            ])
                            ->default('draft')
                            ->native(false),

                        Forms\Components\Toggle::make('is_featured')
                            ->label('แนะนำ')
                            ->default(false),

                        Forms\Components\DateTimePicker::make('published_at')
                            ->label('วันที่เผยแพร่')
                            ->default(now()),
                    ])
                    ->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                CuratorColumn::make('thumbnail_id')
                    ->label('รูป')
                    ->size(60)
                    ->circular(),

                Tables\Columns\TextColumn::make('name')
                    ->label('ชื่อ')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('category')
                    ->label('ประเภท')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'expert_advisors' => 'EA',
                        'indicators' => 'Indicators',
                        'tradingview' => 'TradingView',
                        default => $state,
                    })
                    ->color(fn(string $state): string => match ($state) {
                        'expert_advisors' => 'success',
                        'indicators' => 'info',
                        'tradingview' => 'warning',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('access_type')
                    ->label('การเข้าถึง')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'free' => 'ฟรี',
                        'premium' => 'พรีเมียม',
                        'members_only' => 'สมาชิก',
                        default => $state,
                    })
                    ->color(fn(string $state): string => match ($state) {
                        'free' => 'success',
                        'premium' => 'warning',
                        'members_only' => 'info',
                        default => 'gray',
                    }),

                Tables\Columns\TextColumn::make('price')
                    ->label('ราคา')
                    ->money('THB')
                    ->sortable(),

                Tables\Columns\TextColumn::make('file_version')
                    ->label('เวอร์ชัน')
                    ->searchable(),

                Tables\Columns\TextColumn::make('downloads_count')
                    ->label('ดาวน์โหลด')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('views_count')
                    ->label('เข้าชม')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('status')
                    ->label('สถานะ')
                    ->badge()
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'draft' => 'แบบร่าง',
                        'published' => 'เผยแพร่',
                        'archived' => 'เก็บถาวร',
                        default => $state,
                    })
                    ->color(fn(string $state): string => match ($state) {
                        'draft' => 'gray',
                        'published' => 'success',
                        'archived' => 'danger',
                        default => 'gray',
                    }),

                Tables\Columns\IconColumn::make('is_featured')
                    ->label('แนะนำ')
                    ->boolean()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('published_at')
                    ->label('เผยแพร่')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('สร้าง')
                    ->dateTime('d/m/Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->label('ประเภท')
                    ->options([
                        'expert_advisors' => 'Expert Advisors (EA)',
                        'indicators' => 'อินดิเคเตอร์',
                        'tradingview' => 'TradingView',
                    ]),

                Tables\Filters\SelectFilter::make('access_type')
                    ->label('การเข้าถึง')
                    ->options([
                        'free' => 'ฟรี',
                        'premium' => 'พรีเมียม',
                        'members_only' => 'สมาชิก',
                    ]),

                Tables\Filters\SelectFilter::make('status')
                    ->label('สถานะ')
                    ->options([
                        'draft' => 'แบบร่าง',
                        'published' => 'เผยแพร่',
                        'archived' => 'เก็บถาวร',
                    ]),

                Tables\Filters\TernaryFilter::make('is_featured')
                    ->label('แนะนำ'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('publish')
                        ->label('เผยแพร่')
                        ->icon('heroicon-o-check-circle')
                        ->requiresConfirmation()
                        ->action(fn($records) => $records->each->update(['status' => 'published', 'published_at' => now()])),
                    Tables\Actions\BulkAction::make('archive')
                        ->label('เก็บถาวร')
                        ->icon('heroicon-o-archive-box')
                        ->requiresConfirmation()
                        ->action(fn($records) => $records->each->update(['status' => 'archived'])),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
