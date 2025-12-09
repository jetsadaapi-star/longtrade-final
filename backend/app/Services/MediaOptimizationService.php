<?php

namespace App\Services;

use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class MediaOptimizationService
{
    /**
     * Optimize an uploaded media file
     */
    public function optimize(string $filePath, string $fileType): array
    {
        try {
            $fullPath = Storage::disk('public')->path($filePath);

            if (!file_exists($fullPath)) {
                throw new \Exception("File not found: {$fullPath}");
            }

            $originalSize = filesize($fullPath);

            // Determine optimization strategy based on file type
            if ($this->isImage($fileType)) {
                $result = $this->optimizeImage($fullPath, $filePath);
            } elseif ($this->isVideo($fileType)) {
                $result = $this->optimizeVideo($fullPath, $filePath);
            } else {
                // For other files (PDFs, etc.), skip optimization
                return [
                    'success' => true,
                    'optimized_path' => $filePath,
                    'original_size' => $originalSize,
                    'optimized_size' => $originalSize,
                    'compression_ratio' => 0,
                    'status' => 'skipped'
                ];
            }

            return array_merge($result, [
                'original_size' => $originalSize,
                'compression_ratio' => $this->calculateCompressionRatio($originalSize, $result['optimized_size'])
            ]);

        } catch (\Exception $e) {
            Log::error('Media optimization failed', [
                'file' => $filePath,
                'error' => $e->getMessage()
            ]);

            return [
                'success' => false,
                'error' => $e->getMessage(),
                'status' => 'failed'
            ];
        }
    }

    /**
     * Optimize image using Cloudinary
     */
    protected function optimizeImage(string $fullPath, string $originalPath): array
    {
        // Upload to Cloudinary with optimization
        $uploadResult = Cloudinary::upload($fullPath, [
            'folder' => 'optimized',
            'quality' => 'auto:good', // Auto quality optimization
            'fetch_format' => 'auto', // Auto format (WebP when supported)
            'transformation' => [
                'width' => config('media-optimization.image.max_width', 2048),
                'height' => config('media-optimization.image.max_height', 2048),
                'crop' => 'limit', // Don't upscale, only downscale if needed
            ]
        ]);

        // Download optimized image back to storage
        $optimizedContent = file_get_contents($uploadResult->getSecurePath());
        $optimizedPath = $this->generateOptimizedPath($originalPath, 'webp');

        Storage::disk('public')->put($optimizedPath, $optimizedContent);

        return [
            'success' => true,
            'optimized_path' => $optimizedPath,
            'optimized_size' => strlen($optimizedContent),
            'cloudinary_url' => $uploadResult->getSecurePath(),
            'status' => 'completed'
        ];
    }

    /**
     * Optimize video using Cloudinary
     */
    protected function optimizeVideo(string $fullPath, string $originalPath): array
    {
        // Upload to Cloudinary with video optimization
        $uploadResult = Cloudinary::uploadVideo($fullPath, [
            'folder' => 'optimized/videos',
            'resource_type' => 'video',
            'quality' => 'auto:good',
            'transformation' => [
                'width' => config('media-optimization.video.max_width', 1920),
                'height' => config('media-optimization.video.max_height', 1080),
                'crop' => 'limit',
                'video_codec' => 'h264', // H.264 for best compatibility
                'audio_codec' => 'aac',
            ]
        ]);

        // For videos, we'll keep them on Cloudinary and store the URL
        // Downloading large videos would be inefficient
        return [
            'success' => true,
            'optimized_path' => $uploadResult->getSecurePath(), // Cloudinary URL
            'optimized_size' => $uploadResult->getReadableSize() ?? 0,
            'cloudinary_url' => $uploadResult->getSecurePath(),
            'status' => 'completed',
            'is_remote' => true
        ];
    }

    /**
     * Check if file is an image
     */
    protected function isImage(string $mimeType): bool
    {
        return str_starts_with($mimeType, 'image/');
    }

    /**
     * Check if file is a video
     */
    protected function isVideo(string $mimeType): bool
    {
        return str_starts_with($mimeType, 'video/');
    }

    /**
     * Generate optimized file path
     */
    protected function generateOptimizedPath(string $originalPath, ?string $newExtension = null): string
    {
        $pathInfo = pathinfo($originalPath);
        $directory = $pathInfo['dirname'];
        $filename = $pathInfo['filename'];
        $extension = $newExtension ?? $pathInfo['extension'];

        return "{$directory}/{$filename}_optimized.{$extension}";
    }

    /**
     * Calculate compression ratio
     */
    protected function calculateCompressionRatio(int $originalSize, int $optimizedSize): float
    {
        if ($originalSize === 0) {
            return 0;
        }

        return round((($originalSize - $optimizedSize) / $originalSize) * 100, 2);
    }
}
