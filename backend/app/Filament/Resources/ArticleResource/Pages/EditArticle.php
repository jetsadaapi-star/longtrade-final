<?php

namespace App\Filament\Resources\ArticleResource\Pages;

use App\Filament\Resources\ArticleResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditArticle extends EditRecord
{
    protected static string $resource = ArticleResource::class;

    protected function mutateFormDataBeforeSave(array $data): array
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

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
