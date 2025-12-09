<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CouponResource\Pages;
use App\Models\Coupon;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class CouponResource extends Resource
{
    protected static ?string $model = Coupon::class;

    protected static ?string $navigationIcon = 'heroicon-o-ticket';

    protected static ?string $navigationLabel = 'คูปองส่วนลด';
    protected static ?string $modelLabel = 'คูปอง';
    protected static ?string $pluralModelLabel = 'คูปองทั้งหมด';
    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลคูปอง')
                    ->schema([
                        Forms\Components\TextInput::make('code')
                            ->label('รหัสคูปอง')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255)
                            ->helperText('รหัสที่ผู้ใช้จะกรอกเพื่อใช้ส่วนลด')
                            ->columnSpanFull(),

                        Forms\Components\Textarea::make('description')
                            ->label('คำอธิบาย')
                            ->rows(2)
                            ->columnSpanFull(),

                        Forms\Components\Select::make('discount_type')
                            ->label('ประเภทส่วนลด')
                            ->options([
                                'percentage' => 'เปอร์เซ็นต์ (%)',
                                'fixed' => 'จำนวนเงินคงที่ (บาท)',
                            ])
                            ->default('percentage')
                            ->required()
                            ->live(),

                        Forms\Components\TextInput::make('discount_value')
                            ->label('มูลค่าส่วนลด')
                            ->numeric()
                            ->required()
                            ->suffix(fn(Forms\Get $get) => $get('discount_type') === 'percentage' ? '%' : '฿')
                            ->helperText(fn(Forms\Get $get) => $get('discount_type') === 'percentage' ? 'ระบุเป็นเปอร์เซ็นต์ (0-100)' : 'ระบุเป็นจำนวนเงิน'),

                        Forms\Components\TextInput::make('min_purchase')
                            ->label('ยอดซื้อขั้นต่ำ')
                            ->numeric()
                            ->default(0)
                            ->prefix('฿')
                            ->helperText('ยอดซื้อขั้นต่ำที่ต้องมีเพื่อใช้คูปองนี้'),

                        Forms\Components\TextInput::make('max_uses')
                            ->label('จำนวนครั้งที่ใช้ได้')
                            ->numeric()
                            ->helperText('จำนวนครั้งสูงสุดที่คูปองนี้สามารถใช้ได้ (เว้นว่างไว้ = ไม่จำกัด)'),

                        Forms\Components\TextInput::make('used_count')
                            ->label('จำนวนครั้งที่ใช้แล้ว')
                            ->numeric()
                            ->default(0)
                            ->disabled()
                            ->dehydrated(),
                    ])->columns(2),

                Forms\Components\Section::make('ระยะเวลา')
                    ->schema([
                        Forms\Components\DateTimePicker::make('valid_from')
                            ->label('เริ่มใช้งานตั้งแต่')
                            ->default(now()),

                        Forms\Components\DateTimePicker::make('valid_until')
                            ->label('ใช้งานได้ถึง')
                            ->helperText('เว้นว่างไว้ = ไม่มีวันหมดอายุ'),
                    ])->columns(2),

                Forms\Components\Section::make('สถานะ')
                    ->schema([
                        Forms\Components\Toggle::make('is_active')
                            ->label('เปิดใช้งาน')
                            ->default(true)
                            ->helperText('เปิดเพื่อให้ผู้ใช้สามารถใช้คูปองนี้ได้'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->label('รหัสคูปอง')
                    ->searchable()
                    ->sortable()
                    ->copyable()
                    ->copyMessage('คัดลอกรหัสคูปองแล้ว')
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('description')
                    ->label('คำอธิบาย')
                    ->limit(40)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('discount_type')
                    ->label('ประเภท')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'percentage' => 'success',
                        'fixed' => 'info',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'percentage' => 'เปอร์เซ็นต์',
                        'fixed' => 'จำนวนคงที่',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('discount_value')
                    ->label('มูลค่า')
                    ->formatStateUsing(
                        fn($state, $record) =>
                        $record->discount_type === 'percentage'
                        ? $state . '%'
                        : '฿' . number_format($state, 2)
                    )
                    ->sortable(),

                Tables\Columns\TextColumn::make('usage')
                    ->label('การใช้งาน')
                    ->formatStateUsing(
                        fn($record) =>
                        $record->used_count . ' / ' . ($record->max_uses ?? '∞')
                    )
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('valid_from')
                    ->label('เริ่มใช้')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('valid_until')
                    ->label('หมดอายุ')
                    ->dateTime('d/m/Y')
                    ->sortable()
                    ->default('-')
                    ->toggleable(),

                Tables\Columns\IconColumn::make('is_active')
                    ->label('สถานะ')
                    ->boolean()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('discount_type')
                    ->label('ประเภท')
                    ->options([
                        'percentage' => 'เปอร์เซ็นต์',
                        'fixed' => 'จำนวนคงที่',
                    ]),

                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('สถานะ')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('เปิดใช้งาน')
                    ->falseLabel('ปิดใช้งาน'),
            ])
            ->actions([
                Tables\Actions\Action::make('toggle_active')
                    ->label(fn(Coupon $record) => $record->is_active ? 'ปิดใช้งาน' : 'เปิดใช้งาน')
                    ->icon(fn(Coupon $record) => $record->is_active ? 'heroicon-o-x-circle' : 'heroicon-o-check-circle')
                    ->color(fn(Coupon $record) => $record->is_active ? 'danger' : 'success')
                    ->requiresConfirmation()
                    ->action(fn(Coupon $record) => $record->update(['is_active' => !$record->is_active])),

                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCoupons::route('/'),
            'create' => Pages\CreateCoupon::route('/create'),
            'edit' => Pages\EditCoupon::route('/{record}/edit'),
        ];
    }
}
