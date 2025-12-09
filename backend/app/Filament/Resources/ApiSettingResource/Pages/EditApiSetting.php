<?php

namespace App\Filament\Resources\ApiSettingResource\Pages;

use App\Filament\Resources\ApiSettingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApiSetting extends EditRecord
{
    protected static string $resource = ApiSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
