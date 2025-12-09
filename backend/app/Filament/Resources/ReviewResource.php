<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewResource\Pages;
use App\Filament\Resources\ReviewResource\RelationManagers;
use App\Models\Review;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Notifications\Notification;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-o-star';
    protected static ?string $navigationLabel = 'รีวิว';
    protected static ?string $modelLabel = 'รีวิว';
    protected static ?string $pluralModelLabel = 'รีวิวทั้งหมด';
    protected static ?string $navigationGroup = 'จัดการเนื้อหา';
    protected static ?int $navigationSort = 10;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('ข้อมูลรีวิว')
                    ->schema([
                        Forms\Components\Select::make('reviewable_type')
                            ->label('ประเภทสินค้า')
                            ->options([
                                'App\\Models\\Course' => 'คอร์สเรียน',
                                'App\\Models\\Indicator' => 'อินดิเคเตอร์',
                                'App\\Models\\Ebook' => 'Ebook',
                                'App\\Models\\ExpertAdvisor' => 'Expert Advisor',
                            ])
                            ->required()
                            ->reactive(),
                        Forms\Components\TextInput::make('reviewable_id')
                            ->label('ID สินค้า')
                            ->numeric()
                            ->required(),
                        Forms\Components\TextInput::make('user_name')
                            ->label('ชื่อผู้รีวิว')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('user_email')
                            ->label('อีเมลผู้รีวิว')
                            ->email()
                            ->required()
                            ->maxLength(255),
                    ])->columns(2),

                Forms\Components\Section::make('เนื้อหารีวิว')
                    ->schema([
                        Forms\Components\Select::make('rating')
                            ->label('คะแนน')
                            ->options([
                                5 => '⭐⭐⭐⭐⭐ (5 ดาว)',
                                4 => '⭐⭐⭐⭐ (4 ดาว)',
                                3 => '⭐⭐⭐ (3 ดาว)',
                                2 => '⭐⭐ (2 ดาว)',
                                1 => '⭐ (1 ดาว)',
                            ])
                            ->required(),
                        Forms\Components\TextInput::make('title')
                            ->label('หัวข้อรีวิว')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('comment')
                            ->label('ความคิดเห็น')
                            ->rows(4)
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('สถานะ')
                    ->schema([
                        Forms\Components\Toggle::make('is_approved')
                            ->label('อนุมัติแล้ว')
                            ->default(false),
                        Forms\Components\Toggle::make('is_verified_purchase')
                            ->label('ซื้อจริง (Verified Purchase)')
                            ->default(false),
                        Forms\Components\TextInput::make('ip_address')
                            ->label('IP Address')
                            ->disabled(),
                    ])->columns(3),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('reviewable_type')
                    ->label('ประเภท')
                    ->formatStateUsing(fn(string $state): string => match ($state) {
                        'App\\Models\\Course' => 'คอร์สเรียน',
                        'App\\Models\\Indicator' => 'อินดิเคเตอร์',
                        'App\\Models\\Ebook' => 'Ebook',
                        'App\\Models\\ExpertAdvisor' => 'Expert Advisor',
                        default => $state,
                    })
                    ->badge()
                    ->searchable(),
                Tables\Columns\TextColumn::make('reviewable.title')
                    ->label('ชื่อสินค้า')
                    ->searchable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('user_name')
                    ->label('ผู้รีวิว')
                    ->searchable(),
                Tables\Columns\TextColumn::make('rating')
                    ->label('คะแนน')
                    ->formatStateUsing(fn(int $state): string => str_repeat('⭐', $state))
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->label('หัวข้อ')
                    ->limit(30)
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_approved')
                    ->label('อนุมัติ')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_verified_purchase')
                    ->label('ซื้อจริง')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('วันที่สร้าง')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('reviewable_type')
                    ->label('ประเภทสินค้า')
                    ->options([
                        'App\\Models\\Course' => 'คอร์สเรียน',
                        'App\\Models\\Indicator' => 'อินดิเคเตอร์',
                        'App\\Models\\Ebook' => 'Ebook',
                        'App\\Models\\ExpertAdvisor' => 'Expert Advisor',
                    ]),
                Tables\Filters\SelectFilter::make('rating')
                    ->label('คะแนน')
                    ->options([
                        5 => '5 ดาว',
                        4 => '4 ดาว',
                        3 => '3 ดาว',
                        2 => '2 ดาว',
                        1 => '1 ดาว',
                    ]),
                Tables\Filters\TernaryFilter::make('is_approved')
                    ->label('สถานะอนุมัติ')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('อนุมัติแล้ว')
                    ->falseLabel('รออนุมัติ'),
                Tables\Filters\TernaryFilter::make('is_verified_purchase')
                    ->label('ซื้อจริง')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('ซื้อจริง')
                    ->falseLabel('ไม่ได้ซื้อ'),
            ])
            ->actions([
                Tables\Actions\Action::make('approve')
                    ->label('อนุมัติ')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->visible(fn(Review $record): bool => !$record->is_approved)
                    ->action(function (Review $record) {
                        $record->approve(auth()->id());
                        Notification::make()
                            ->title('อนุมัติรีวิวสำเร็จ')
                            ->success()
                            ->send();
                    }),
                Tables\Actions\Action::make('reject')
                    ->label('ปฏิเสธ')
                    ->icon('heroicon-o-x-circle')
                    ->color('danger')
                    ->visible(fn(Review $record): bool => $record->is_approved)
                    ->action(function (Review $record) {
                        $record->reject();
                        Notification::make()
                            ->title('ยกเลิกการอนุมัติรีวิวแล้ว')
                            ->warning()
                            ->send();
                    }),
                Tables\Actions\ViewAction::make(),
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

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }
}
