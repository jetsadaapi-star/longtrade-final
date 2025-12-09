<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ebook;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class EbookController extends Controller
{
    /**
     * Display a listing of published ebooks.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Ebook::query()
            ->with('category')
            ->published()
            ->orderBy('created_at', 'desc');

        // Filter by category
        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by access type
        if ($request->has('access_type')) {
            $query->where('access_type', $request->access_type);
        }

        // Filter by featured
        if ($request->has('featured') && $request->featured) {
            $query->featured();
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('author', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Sort
        if ($request->has('sort')) {
            switch ($request->sort) {
                case 'latest':
                    $query->orderBy('created_at', 'desc');
                    break;
                case 'popular':
                    $query->orderBy('downloads_count', 'desc');
                    break;
                case 'price_low':
                    $query->orderBy('price', 'asc');
                    break;
                case 'price_high':
                    $query->orderBy('price', 'desc');
                    break;
            }
        }

        // Pagination
        $perPage = $request->get('per_page', 12);
        $ebooks = $query->paginate($perPage);

        return response()->json($ebooks);
    }

    /**
     * Display the specified ebook.
     */
    public function show(string $slug): JsonResponse
    {
        $ebook = Ebook::with('category')
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        return response()->json($ebook);
    }

    /**
     * Display featured ebooks.
     */
    public function featured(): JsonResponse
    {
        $ebooks = Ebook::with('category')
            ->published()
            ->featured()
            ->limit(6)
            ->get();

        return response()->json($ebooks);
    }

    /**
     * Download ebook file.
     */
    public function download(Request $request, string $slug)
    {
        $ebook = Ebook::where('slug', $slug)
            ->published()
            ->firstOrFail();

        // Check access control
        if ($ebook->access_type === 'members_only' && !$request->user()) {
            return response()->json([
                'message' => 'Authentication required. Please login to download this e-book.',
                'access_type' => 'members_only'
            ], 401);
        }

        if ($ebook->access_type === 'premium') {
            // TODO: Check if user has purchased this ebook
            if (!$request->user()) {
                return response()->json([
                    'message' => 'Authentication required.',
                    'access_type' => 'premium'
                ], 401);
            }

            // For now, just check if user is authenticated
            // In production, check purchase status
        }

        // Increment download count
        $ebook->increment('downloads_count');

        // Get file path
        $filePath = storage_path('app/public/' . $ebook->file_path);

        if (!file_exists($filePath)) {
            return response()->json([
                'message' => 'File not found.'
            ], 404);
        }

        // Return file download
        return response()->download($filePath, $ebook->title . '.pdf');
    }

    /**
     * Track ebook view.
     */
    public function trackView(string $slug): JsonResponse
    {
        $ebook = Ebook::where('slug', $slug)
            ->published()
            ->firstOrFail();

        $ebook->increment('views_count');

        return response()->json([
            'message' => 'View tracked successfully.',
            'views_count' => $ebook->views_count
        ]);
    }

    /**
     * Get user's accessible ebooks.
     */
    public function userEbooks(Request $request): JsonResponse
    {
        // Get all published ebooks that user can access
        $ebooks = Ebook::query()
            ->with('category')
            ->published()
            ->where(function ($query) {
                $query->where('access_type', 'free')
                    ->orWhere('access_type', 'members_only');
                // TODO: Add premium ebooks that user has purchased
            })
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($ebooks);
    }
}
