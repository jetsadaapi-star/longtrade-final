<?php

namespace App\Filament\Resources\ArticleResource\Pages;

use App\Filament\Resources\ArticleResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateArticle extends CreateRecord
{
    protected static string $resource = ArticleResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $fields = ['featured_image', 'og_image', 'twitter_image'];

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
