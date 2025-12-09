<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class CertificatesRelationManager extends RelationManager
{
    protected static string $relationship = 'certificates';

    protected static ?string $title = 'ใบประกาศนียบัตร';
    protected static ?string $modelLabel = 'ใบประกาศนียบัตร';

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

                Forms\Components\Select::make('enrollment_id')
                    ->label('การลงทะเบียน')
                    ->relationship('enrollment', 'id')
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\TextInput::make('certificate_number')
                    ->label('เลขที่ใบประกาศ')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),

                Forms\Components\DatePicker::make('issued_date')
                    ->label('วันที่ออกใบประกาศ')
                    ->default(now())
                    ->required(),

                Forms\Components\TextInput::make('verification_code')
                    ->label('รหัสตรวจสอบ')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('certificate_number')
            ->columns([
                Tables\Columns\TextColumn::make('certificate_number')
                    ->label('เลขที่ใบประกาศ')
                    ->searchable()
                    ->sortable()
                    ->copyable()
                    ->weight('bold'),

                Tables\Columns\TextColumn::make('user.name')
                    ->label('ผู้รับใบประกาศ')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('issued_date')
                    ->label('วันที่ออก')
                    ->date('d/m/Y')
                    ->sortable(),

                Tables\Columns\TextColumn::make('verification_code')
                    ->label('รหัสตรวจสอบ')
                    ->copyable()
                    ->copyMessage('คัดลอกรหัสตรวจสอบแล้ว')
                    ->toggleable(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->label('สร้างใบประกาศ'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('issued_date', 'desc');
    }
}
