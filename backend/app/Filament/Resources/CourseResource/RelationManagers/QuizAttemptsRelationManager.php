<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Infolists;
use Filament\Infolists\Infolist;

class QuizAttemptsRelationManager extends RelationManager
{
    protected static string $relationship = 'quizAttempts';

    protected static ?string $title = 'ผลการสอบ';
    protected static ?string $modelLabel = 'ผลการสอบ';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                // View only - no form needed
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('user.name')
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('ผู้สอบ')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('score')
                    ->label('คะแนน')
                    ->formatStateUsing(
                        fn($state, $record) =>
                        $state . ' / ' . $record->total_questions
                    )
                    ->sortable()
                    ->alignCenter(),

                Tables\Columns\TextColumn::make('percentage')
                    ->label('เปอร์เซ็นต์')
                    ->suffix('%')
                    ->sortable()
                    ->alignCenter()
                    ->color(fn($state) => $state >= 70 ? 'success' : 'danger'),

                Tables\Columns\IconColumn::make('passed')
                    ->label('ผ่าน/ไม่ผ่าน')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('attempted_at')
                    ->label('วันที่สอบ')
                    ->dateTime('d/m/Y H:i')
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('passed')
                    ->label('ผลการสอบ')
                    ->placeholder('ทั้งหมด')
                    ->trueLabel('ผ่าน')
                    ->falseLabel('ไม่ผ่าน'),
            ])
            ->headerActions([
                // No create action - view only
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                //
            ])
            ->defaultSort('attempted_at', 'desc');
    }

    public function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Infolists\Components\Section::make('ข้อมูลการสอบ')
                    ->schema([
                        Infolists\Components\TextEntry::make('user.name')
                            ->label('ผู้สอบ'),
                        Infolists\Components\TextEntry::make('score')
                            ->label('คะแนน')
                            ->formatStateUsing(
                                fn($state, $record) =>
                                $state . ' / ' . $record->total_questions
                            ),
                        Infolists\Components\TextEntry::make('percentage')
                            ->label('เปอร์เซ็นต์')
                            ->suffix('%')
                            ->color(fn($state) => $state >= 70 ? 'success' : 'danger'),
                        Infolists\Components\IconEntry::make('passed')
                            ->label('ผ่าน/ไม่ผ่าน')
                            ->boolean(),
                        Infolists\Components\TextEntry::make('attempted_at')
                            ->label('วันที่สอบ')
                            ->dateTime('d/m/Y H:i'),
                    ])->columns(2),

                Infolists\Components\Section::make('คำตอบ')
                    ->schema([
                        Infolists\Components\TextEntry::make('answers')
                            ->label('รายละเอียดคำตอบ')
                            ->formatStateUsing(fn($state) => json_encode($state, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
