<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\Enrollment;

class EnrollmentsRelationManager extends RelationManager
{
    protected static string $relationship = 'enrollments';

    protected static ?string $title = 'การลงทะเบียน';
    protected static ?string $modelLabel = 'การลงทะเบียน';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->label('ผู้ใช้')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\Select::make('coupon_id')
                    ->label('คูปอง')
                    ->relationship('coupon', 'code')
                    ->searchable()
                    ->preload(),

                Forms\Components\DateTimePicker::make('enrollment_date')
                    ->label('วันที่ลงทะเบียน')
                    ->default(now())
                    ->required(),

                Forms\Components\Select::make('status')
                    ->label('สถานะการเรียน')
                    ->options([
                        'pending' => 'รอดำเนินการ',
                        'active' => 'กำลังเรียน',
                        'completed' => 'เรียนจบ',
                        'cancelled' => 'ยกเลิก',
                    ])
                    ->default('pending')
                    ->required(),

                Forms\Components\Select::make('payment_status')
                    ->label('สถานะการชำระเงิน')
                    ->options([
                        'pending' => 'รอชำระเงิน',
                        'paid' => 'ชำระแล้ว',
                        'refunded' => 'คืนเงินแล้ว',
                    ])
                    ->default('pending')
                    ->required(),

                Forms\Components\TextInput::make('progress_percentage')
                    ->label('ความคืบหน้า (%)')
                    ->numeric()
                    ->default(0)
                    ->minValue(0)
                    ->maxValue(100)
                    ->suffix('%'),

                Forms\Components\TextInput::make('original_price')
                    ->label('ราคาเต็ม')
                    ->numeric()
                    ->prefix('฿')
                    ->required(),

                Forms\Components\TextInput::make('final_price')
                    ->label('ราคาสุทธิ')
                    ->numeric()
                    ->prefix('฿')
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('user.name')
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('ผู้ใช้')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('coupon.code')
                    ->label('คูปอง')
                    ->badge()
                    ->color('success')
                    ->default('-'),

                Tables\Columns\TextColumn::make('status')
                    ->label('สถานะ')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'pending' => 'warning',
                        'active' => 'info',
                        'completed' => 'success',
                        'cancelled' => 'danger',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'pending' => 'รอดำเนินการ',
                        'active' => 'กำลังเรียน',
                        'completed' => 'เรียนจบ',
                        'cancelled' => 'ยกเลิก',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('payment_status')
                    ->label('การชำระเงิน')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'pending' => 'warning',
                        'paid' => 'success',
                        'refunded' => 'danger',
                        default => 'gray',
                    })
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'pending' => 'รอชำระ',
                        'paid' => 'ชำระแล้ว',
                        'refunded' => 'คืนเงิน',
                        default => $state,
                    }),

                Tables\Columns\TextColumn::make('progress_percentage')
                    ->label('ความคืบหน้า')
                    ->suffix('%')
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('final_price')
                    ->label('ราคา')
                    ->money('THB')
                    ->sortable(),

                Tables\Columns\TextColumn::make('enrollment_date')
                    ->label('วันที่ลงทะเบียน')
                    ->dateTime('d/m/Y')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->label('สถานะการเรียน')
                    ->options([
                        'pending' => 'รอดำเนินการ',
                        'active' => 'กำลังเรียน',
                        'completed' => 'เรียนจบ',
                        'cancelled' => 'ยกเลิก',
                    ]),

                Tables\Filters\SelectFilter::make('payment_status')
                    ->label('สถานะการชำระเงิน')
                    ->options([
                        'pending' => 'รอชำระเงิน',
                        'paid' => 'ชำระแล้ว',
                        'refunded' => 'คืนเงินแล้ว',
                    ]),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->label('เพิ่มการลงทะเบียน'),
            ])
            ->actions([
                Tables\Actions\Action::make('approve')
                    ->label('อนุมัติ')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(fn(Enrollment $record) => $record->update(['status' => 'active']))
                    ->visible(fn(Enrollment $record) => $record->status === 'pending'),

                Tables\Actions\Action::make('complete')
                    ->label('จบคอร์ส')
                    ->icon('heroicon-o-academic-cap')
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(fn(Enrollment $record) => $record->update([
                        'status' => 'completed',
                        'completion_date' => now(),
                        'progress_percentage' => 100,
                    ]))
                    ->visible(fn(Enrollment $record) => $record->status === 'active'),

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
}
