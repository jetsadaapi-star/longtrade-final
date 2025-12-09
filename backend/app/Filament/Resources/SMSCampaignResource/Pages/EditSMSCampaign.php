<?php

namespace App\Filament\Resources\SMSCampaignResource\Pages;

use App\Filament\Resources\SMSCampaignResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSMSCampaign extends EditRecord
{
    protected static string $resource = SMSCampaignResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
