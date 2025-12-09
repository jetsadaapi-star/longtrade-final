<?php

namespace App\Observers;

use Awcodes\Curator\Models\Media;
use App\Jobs\OptimizeMediaJob;
use Illuminate\Support\Facades\Log;

class MediaObserver
{
    /**
     * Handle the Media "created" event.
     */
    public function created(Media $media): void
    {
        // Only optimize if enabled and file exists
        if (config('media-optimization.enabled', true) && $media->path) {
            Log::info('Dispatching optimization job for new media', [
                'media_id' => $media->id,
                'path' => $media->path,
                'type' => $media->type
            ]);

            // Dispatch optimization job to queue
            OptimizeMediaJob::dispatch($media);
        }
    }

    /**
     * Handle the Media "updated" event.
     */
    public function updated(Media $media): void
    {
        // Re-optimize if the file path changed (new upload)
        if ($media->wasChanged('path') && config('media-optimization.enabled', true)) {
            Log::info('File path changed, re-dispatching optimization job', [
                'media_id' => $media->id,
                'old_path' => $media->getOriginal('path'),
                'new_path' => $media->path
            ]);

            OptimizeMediaJob::dispatch($media);
        }
    }

    /**
     * Handle the Media "deleted" event.
     */
    public function deleted(Media $media): void
    {
        // Clean up optimized files if they exist
        if ($media->optimized_path && $media->optimized_path !== $media->original_path) {
            try {
                \Storage::disk('public')->delete($media->optimized_path);
                Log::info('Deleted optimized file', ['path' => $media->optimized_path]);
            } catch (\Exception $e) {
                Log::warning('Failed to delete optimized file', [
                    'path' => $media->optimized_path,
                    'error' => $e->getMessage()
                ]);
            }
        }
    }

    /**
     * Handle the Media "restored" event.
     */
    public function restored(Media $media): void
    {
        // Re-optimize restored media
        if (config('media-optimization.enabled', true)) {
            OptimizeMediaJob::dispatch($media);
        }
    }

    /**
     * Handle the Media "force deleted" event.
     */
    public function forceDeleted(Media $media): void
    {
        // Same cleanup as soft delete
        $this->deleted($media);
    }
}
