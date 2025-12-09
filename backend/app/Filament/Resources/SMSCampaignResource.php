<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SMSCampaignResource\Pages;
use App\Filament\Resources\SMSCampaignResource\RelationManagers;
use App\Models\SMSCampaign;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SMSCampaignResource extends Resource
{
    protected static ?string $model = SMSCampaign::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';
    protected static ?string $navigationGroup = 'การตลาด';
    protected static ?string $navigationLabel = 'SMS Campaigns';
    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
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
            'index' => Pages\ListSMSCampaigns::route('/'),
            'create' => Pages\CreateSMSCampaign::route('/create'),
            'edit' => Pages\EditSMSCampaign::route('/{record}/edit'),
        ];
    }
}
