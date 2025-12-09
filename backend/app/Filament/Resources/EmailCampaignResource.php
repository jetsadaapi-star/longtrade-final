<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EmailCampaignResource\Pages;
use App\Filament\Resources\EmailCampaignResource\RelationManagers;
use App\Models\EmailCampaign;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class EmailCampaignResource extends Resource
{
    protected static ?string $model = EmailCampaign::class;

    protected static ?string $navigationIcon = 'heroicon-o-envelope';
    protected static ?string $navigationGroup = 'การตลาด';
    protected static ?string $navigationLabel = 'Email Campaigns';
    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('type')
                    ->required(),
                Forms\Components\TextInput::make('subject')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('preview_text')
                    ->maxLength(150),
                Forms\Components\TextInput::make('from_name')
                    ->maxLength(100),
                Forms\Components\TextInput::make('from_email')
                    ->email()
                    ->maxLength(100),
                Forms\Components\TextInput::make('reply_to')
                    ->maxLength(100),
                Forms\Components\Textarea::make('html_content')
                    ->columnSpanFull(),
                Forms\Components\Textarea::make('plain_text_content')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('template_id')
                    ->numeric(),
                Forms\Components\TextInput::make('target_audience')
                    ->required(),
                Forms\Components\TextInput::make('segment_filter'),
                Forms\Components\TextInput::make('recipient_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('schedule_type')
                    ->required(),
                Forms\Components\DateTimePicker::make('scheduled_at'),
                Forms\Components\TextInput::make('automation_trigger')
                    ->maxLength(100),
                Forms\Components\TextInput::make('status')
                    ->required(),
                Forms\Components\Toggle::make('is_active')
                    ->required(),
                Forms\Components\TextInput::make('sent_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('delivered_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('opened_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('clicked_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('bounced_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\TextInput::make('unsubscribed_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                Forms\Components\Toggle::make('is_ab_test')
                    ->required(),
                Forms\Components\TextInput::make('ab_test_variant')
                    ->maxLength(1),
                Forms\Components\DateTimePicker::make('sent_at'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type'),
                Tables\Columns\TextColumn::make('subject')
                    ->searchable(),
                Tables\Columns\TextColumn::make('preview_text')
                    ->searchable(),
                Tables\Columns\TextColumn::make('from_name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('from_email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('reply_to')
                    ->searchable(),
                Tables\Columns\TextColumn::make('template_id')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('target_audience'),
                Tables\Columns\TextColumn::make('recipient_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('schedule_type'),
                Tables\Columns\TextColumn::make('scheduled_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('automation_trigger')
                    ->searchable(),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean(),
                Tables\Columns\TextColumn::make('sent_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('delivered_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('opened_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('clicked_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('bounced_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('unsubscribed_count')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_ab_test')
                    ->boolean(),
                Tables\Columns\TextColumn::make('ab_test_variant')
                    ->searchable(),
                Tables\Columns\TextColumn::make('sent_at')
                    ->dateTime()
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
            'index' => Pages\ListEmailCampaigns::route('/'),
            'create' => Pages\CreateEmailCampaign::route('/create'),
            'edit' => Pages\EditEmailCampaign::route('/{record}/edit'),
        ];
    }
}
