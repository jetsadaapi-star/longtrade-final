<?php

namespace App\Jobs;

use Awcodes\Curator\Models\Media;
use App\Services\MediaOptimizationService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;

class OptimizeMediaJob implements ShouldQueue
{
    use Queueable;

    public $tries = 3; // Retry up to 3 times
    public $timeout = 300; // 5 minutes timeout

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Media $media
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(MediaOptimizationService $optimizer): void
    {
        // Check if optimization is enabled
        if (!config('media-optimization.enabled', true)) {
            $this->media->update(['optimization_status' => 'skipped']);
            return;
        }

        // Update status to processing
        $this->media->update([
            'optimization_status' => 'processing',
            'original_path' => $this->media->path,
            'original_size' => $this->media->size
        ]);

        Log::info('Starting media optimization', [
            'media_id' => $this->media->id,
            'path' => $this->media->path,
            'type' => $this->media->type
        ]);

        // Optimize the media
        $result = $optimizer->optimize($this->media->path, $this->media->type);

        if ($result['success']) {
            // Update media record with optimization results
            $updateData = [
                'optimization_status' => $result['status'],
                'optimized_path' => $result['optimized_path'],
                'optimized_size' => $result['optimized_size'],
                'compression_ratio' => $result['compression_ratio']
            ];

            // If optimized file is local, update the main path
            if (!isset($result['is_remote']) || !$result['is_remote']) {
                $updateData['path'] = $result['optimized_path'];
                $updateData['size'] = $result['optimized_size'];
            }

            $this->media->update($updateData);

            Log::info('Media optimization completed', [
                'media_id' => $this->media->id,
                'compression_ratio' => $result['compression_ratio'] . '%',
                'original_size' => $result['original_size'],
                'optimized_size' => $result['optimized_size']
            ]);
        } else {
            // Optimization failed
            $this->media->update([
                'optimization_status' => 'failed'
            ]);

            Log::error('Media optimization failed', [
                'media_id' => $this->media->id,
                'error' => $result['error'] ?? 'Unknown error'
            ]);

            // Re-throw exception to trigger retry
            throw new \Exception($result['error'] ?? 'Optimization failed');
        }
    }

    /**
     * Handle a job failure.
     */
    public function failed(\Throwable $exception): void
    {
        Log::error('Media optimization job failed permanently', [
            'media_id' => $this->media->id,
            'error' => $exception->getMessage()
        ]);

        $this->media->update([
            'optimization_status' => 'failed'
        ]);
    }
}
