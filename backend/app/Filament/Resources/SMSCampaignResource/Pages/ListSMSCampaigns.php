<?php

namespace App\Filament\Resources\SMSCampaignResource\Pages;

use App\Filament\Resources\SMSCampaignResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSMSCampaigns extends ListRecords
{
    protected static string $resource = SMSCampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
