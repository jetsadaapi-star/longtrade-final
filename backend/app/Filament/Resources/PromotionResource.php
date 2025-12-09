<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PromotionResource\Pages;
use App\Filament\Resources\PromotionResource\RelationManagers;
use App\Models\Promotion;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PromotionResource extends Resource
{
    protected static ?string $model = Promotion::class;

    protected static ?string $navigationIcon = 'heroicon-o-megaphone';
    protected static ?string $navigationGroup = 'การตลาด';
    protected static ?string $navigationLabel = 'โปรโมชั่น';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('slug')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('type')
                    ->required(),
                Forms\Components\TextInput::make('discount_type')
                    ->required(),
                Forms\Components\TextInput::make('discount_value')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('max_discount_amount')
                    ->numeric(),
                Forms\Components\TextInput::make('min_purchase_amount')
                    ->required()
                    ->numeric()
                    ->default(0.00),
                Forms\Components\TextInput::make('applicable_to')
                    ->required(),
                Forms\Components\TextInput::make('applicable_ids'),
                Forms\Components\DateTimePicker::make('starts_at'),
                Forms\Components\DateTimePicker::make('ends_at'),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
                Forms\Components\TextInput::make('usage_limit')
                    ->numeric(),
                Forms\Components\TextInput::make('usage_per_user')
                    ->required()
                    ->numeric()
                    ->default(1),
                Forms\Components\TextInput::make('current_usage')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\FileUpload::make('banner_image')
                    ->image(),
                Forms\Components\TextInput::make('badge_text')
                    ->maxLength(50),
                Forms\Components\TextInput::make('badge_color')
                    ->maxLength(20),
                Forms\Components\TextInput::make('priority')
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
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type'),
                Tables\Columns\TextColumn::make('discount_type'),
                Tables\Columns\TextColumn::make('discount_value')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_discount_amount')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('min_purchase_amount')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('applicable_to'),
                Tables\Columns\TextColumn::make('starts_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('ends_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('usage_limit')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('usage_per_user')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('current_usage')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\ImageColumn::make('banner_image'),
                Tables\Columns\TextColumn::make('badge_text')
                    ->searchable(),
                Tables\Columns\TextColumn::make('badge_color')
                    ->searchable(),
                Tables\Columns\TextColumn::make('priority')
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
            'index' => Pages\ListPromotions::route('/'),
            'create' => Pages\CreatePromotion::route('/create'),
            'edit' => Pages\EditPromotion::route('/{record}/edit'),
        ];
    }
}
