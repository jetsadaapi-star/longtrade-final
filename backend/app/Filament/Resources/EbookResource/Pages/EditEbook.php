<?php

namespace App\Filament\Resources\EbookResource\Pages;

use App\Filament\Resources\EbookResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditEbook extends EditRecord
{
    protected static string $resource = EbookResource::class;

    protected function mutateFormDataBeforeSave(array $data): array
    {
        // Handle Cover Image from Curator
        if (isset($data['cover_image']) && is_numeric($data['cover_image'])) {
            $media = \Awcodes\Curator\Models\Media::find($data['cover_image']);
            if ($media) {
                $data['cover_image'] = $media->path;
            }
        }

        // Handle PDF File from Curator
        if (isset($data['file_path']) && is_numeric($data['file_path'])) {
            $media = \Awcodes\Curator\Models\Media::find($data['file_path']);
            if ($media) {
                $data['file_path'] = $media->path;
            }
        }

        return $data;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
