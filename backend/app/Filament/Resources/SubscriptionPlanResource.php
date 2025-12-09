<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubscriptionPlanResource\Pages;
use App\Filament\Resources\SubscriptionPlanResource\RelationManagers;
use App\Models\SubscriptionPlan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SubscriptionPlanResource extends Resource
{
    protected static ?string $model = SubscriptionPlan::class;

    protected static ?string $navigationIcon = 'heroicon-o-credit-card';

    protected static ?string $navigationGroup = 'ตั้งค่าระบบ';

    protected static ?string $navigationLabel = 'แผนสมาชิก';

    protected static ?string $modelLabel = 'แผนสมาชิก';

    protected static ?string $pluralModelLabel = 'แผนสมาชิก';

    protected static ?int $navigationSort = 1;

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }

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
                Forms\Components\TextInput::make('price')
                    ->required()
                    ->numeric()
                    ->default(0.00)
                    ->prefix('$'),
                Forms\Components\TextInput::make('billing_cycle')
                    ->required()
                    ->maxLength(255)
                    ->default('monthly'),
                Forms\Components\TextInput::make('trial_days')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('features'),
                Forms\Components\TextInput::make('limitations'),
                Forms\Components\TextInput::make('max_courses')
                    ->numeric(),
                Forms\Components\TextInput::make('max_downloads_per_month')
                    ->numeric(),
                Forms\Components\TextInput::make('max_ebooks')
                    ->numeric(),
                Forms\Components\TextInput::make('max_products')
                    ->numeric(),
                Forms\Components\Toggle::make('ai_chat_access')
                    ->required(),
                Forms\Components\TextInput::make('ai_messages_per_month')
                    ->numeric(),
                Forms\Components\TextInput::make('sort_order')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_popular')
                    ->required(),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
                Forms\Components\TextInput::make('badge_text')
                    ->maxLength(255),
                Forms\Components\TextInput::make('badge_color')
                    ->maxLength(255),
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
                Tables\Columns\TextColumn::make('price')
                    ->money()
                    ->sortable(),
                Tables\Columns\TextColumn::make('billing_cycle')
                    ->searchable(),
                Tables\Columns\TextColumn::make('trial_days')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_courses')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_downloads_per_month')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_ebooks')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('max_products')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('ai_chat_access')
                    ->boolean(),
                Tables\Columns\TextColumn::make('ai_messages_per_month')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('sort_order')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_popular')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('badge_text')
                    ->searchable(),
                Tables\Columns\TextColumn::make('badge_color')
                    ->searchable(),
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
            'index' => Pages\ListSubscriptionPlans::route('/'),
            'create' => Pages\CreateSubscriptionPlan::route('/create'),
            'edit' => Pages\EditSubscriptionPlan::route('/{record}/edit'),
        ];
    }
}
