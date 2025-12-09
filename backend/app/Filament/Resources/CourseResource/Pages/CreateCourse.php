<?php

namespace App\Filament\Resources\CourseResource\Pages;

use App\Filament\Resources\CourseResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateCourse extends CreateRecord
{
    protected static string $resource = CourseResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $fields = ['cover', 'og_image'];

        foreach ($fields as $field) {
            if (isset($data[$field]) && is_numeric($data[$field])) {
                $media = \Awcodes\Curator\Models\Media::find($data[$field]);
                if ($media) {
                    $data[$field] = $media->path;
                }
            }
        }

        return $data;
    }
}
