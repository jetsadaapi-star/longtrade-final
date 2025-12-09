<?php

namespace App\Filament\Resources\ExpertAdvisorResource\Pages;

use App\Filament\Resources\ExpertAdvisorResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListExpertAdvisors extends ListRecords
{
    protected static string $resource = ExpertAdvisorResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
