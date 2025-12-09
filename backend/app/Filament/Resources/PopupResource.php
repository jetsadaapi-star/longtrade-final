<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PopupResource\Pages;
use App\Filament\Resources\PopupResource\RelationManagers;
use App\Models\Popup;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PopupResource extends Resource
{
    protected static ?string $model = Popup::class;

    protected static ?string $navigationIcon = 'heroicon-o-window';
    protected static ?string $navigationGroup = 'การตลาด';
    protected static ?string $navigationLabel = 'ป๊อปอัพ';
    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title')
                    ->maxLength(255),
                Forms\Components\Textarea::make('content')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('trigger_type')
                    ->required(),
                Forms\Components\TextInput::make('trigger_value')
                    ->numeric(),
                Forms\Components\TextInput::make('display_type')
                    ->required(),
                Forms\Components\TextInput::make('position')
                    ->required(),
                Forms\Components\TextInput::make('width')
                    ->required()
                    ->numeric()
                    ->default(600),
                Forms\Components\TextInput::make('height')
                    ->numeric(),
                Forms\Components\TextInput::make('target_pages'),
                Forms\Components\TextInput::make('target_user_type')
                    ->required(),
                Forms\Components\TextInput::make('frequency')
                    ->required(),
                Forms\Components\FileUpload::make('image_url')
                    ->image(),
                Forms\Components\TextInput::make('button_text')
                    ->maxLength(100),
                Forms\Components\TextInput::make('button_url')
                    ->maxLength(255),
                Forms\Components\TextInput::make('button_color')
                    ->maxLength(20),
                Forms\Components\TextInput::make('background_color')
                    ->maxLength(20),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
                Forms\Components\DateTimePicker::make('starts_at'),
                Forms\Components\DateTimePicker::make('ends_at'),
                Forms\Components\TextInput::make('impressions')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('clicks')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('conversions')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('trigger_type'),
                Tables\Columns\TextColumn::make('trigger_value')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('display_type'),
                Tables\Columns\TextColumn::make('position'),
                Tables\Columns\TextColumn::make('width')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('height')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('target_user_type'),
                Tables\Columns\TextColumn::make('frequency'),
                Tables\Columns\ImageColumn::make('image_url'),
                Tables\Columns\TextColumn::make('button_text')
                    ->searchable(),
                Tables\Columns\TextColumn::make('button_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('button_color')
                    ->searchable(),
                Tables\Columns\TextColumn::make('background_color')
                    ->searchable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('starts_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('ends_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('impressions')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('clicks')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('conversions')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
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
            'index' => Pages\ListPopups::route('/'),
            'create' => Pages\CreatePopup::route('/create'),
            'edit' => Pages\EditPopup::route('/{record}/edit'),
        ];
    }
}
