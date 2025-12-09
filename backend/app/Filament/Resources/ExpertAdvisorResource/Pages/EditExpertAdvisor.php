<?php

namespace App\Filament\Resources\ExpertAdvisorResource\Pages;

use App\Filament\Resources\ExpertAdvisorResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditExpertAdvisor extends EditRecord
{
    protected static string $resource = ExpertAdvisorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
