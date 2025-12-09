<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Get all products with filters
     */
    public function index(Request $request)
    {
        $query = Product::query()->published();

        // Filter by category
        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        // Filter by access type
        if ($request->has('access_type')) {
            $query->where('access_type', $request->access_type);
        }

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Sort
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');

        if ($sortBy === 'popular') {
            $query->orderBy('downloads_count', 'desc');
        } elseif ($sortBy === 'price') {
            $query->orderBy('price', $sortOrder);
        } else {
            $query->orderBy($sortBy, $sortOrder);
        }

        $products = $query->with(['thumbnail', 'featuredImage'])
            ->paginate($request->get('per_page', 12));

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }

    /**
     * Get featured products
     */
    public function featured(Request $request)
    {
        $products = Product::query()
            ->published()
            ->featured()
            ->with(['thumbnail', 'featuredImage'])
            ->limit($request->get('limit', 6))
            ->get();

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }

    /**
     * Get products by category
     */
    public function byCategory(Request $request, string $category)
    {
        $query = Product::query()
            ->published()
            ->byCategory($category);

        // Search
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Sort
        $sortBy = $request->get('sort_by', 'created_at');
        $sortOrder = $request->get('sort_order', 'desc');

        if ($sortBy === 'popular') {
            $query->orderBy('downloads_count', 'desc');
        } elseif ($sortBy === 'price') {
            $query->orderBy('price', $sortOrder);
        } else {
            $query->orderBy($sortBy, $sortOrder);
        }

        $products = $query->with(['thumbnail', 'featuredImage'])
            ->paginate($request->get('per_page', 12));

        return response()->json([
            'success' => true,
            'data' => $products,
        ]);
    }

    /**
     * Get product detail
     */
    public function show(Request $request, string $slug)
    {
        $product = Product::where('slug', $slug)
            ->published()
            ->with(['thumbnail', 'featuredImage', 'screenshots.media'])
            ->firstOrFail();

        // Check if user can download
        $user = Auth::guard('sanctum')->user();
        $canDownload = $product->canDownload($user);

        $productData = $product->toArray();
        $productData['can_download'] = $canDownload;

        return response()->json([
            'success' => true,
            'data' => $productData,
        ]);
    }

    /**
     * Track product view
     */
    public function trackView(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $product->incrementViews();

        return response()->json([
            'success' => true,
            'message' => 'View tracked',
        ]);
    }

    /**
     * Download product file
     */
    public function download(Request $request, string $slug)
    {
        $user = Auth::guard('sanctum')->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication required',
            ], 401);
        }

        $product = Product::where('slug', $slug)->firstOrFail();

        // Check if user can download
        if (!$product->canDownload($user)) {
            return response()->json([
                'success' => false,
                'message' => 'You do not have access to download this product',
            ], 403);
        }

        // Check if file exists
        if (!$product->file_path) {
            return response()->json([
                'success' => false,
                'message' => 'Product file not found',
            ], 404);
        }

        // Increment download count
        $product->incrementDownloads();

        // Get file from media
        $media = \Awcodes\Curator\Models\Media::find($product->file_path);

        if (!$media) {
            return response()->json([
                'success' => false,
                'message' => 'File not found',
            ], 404);
        }

        // Return download URL or file stream
        return response()->json([
            'success' => true,
            'data' => [
                'download_url' => $media->url,
                'filename' => $media->name,
                'size' => $media->size,
            ],
        ]);
    }

    /**
     * Check if user has access to product
     */
    public function checkAccess(Request $request, string $slug)
    {
        $user = Auth::guard('sanctum')->user();
        $product = Product::where('slug', $slug)->firstOrFail();

        $hasAccess = $product->canDownload($user);

        return response()->json([
            'success' => true,
            'data' => [
                'has_access' => $hasAccess,
                'access_type' => $product->access_type,
                'is_free' => $product->isFree(),
            ],
        ]);
    }

    /**
     * Get user's purchased products
     */
    public function userProducts(Request $request)
    {
        $user = Auth::guard('sanctum')->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication required',
            ], 401);
        }

        // Get products from completed orders
        $productIds = $user->orders()
            ->where('orderable_type', Product::class)
            ->where('status', 'completed')
            ->pluck('orderable_id');

        $products = Product::whereIn('id', $productIds)
            ->with(['thumbnail', 'featuredImage'])
            ->get();

        // Group by category
        $grouped = $products->groupBy('category');

        return response()->json([
            'success' => true,
            'data' => [
                'expert_advisors' => $grouped->get('expert_advisors', collect()),
                'indicators' => $grouped->get('indicators', collect()),
                'scripts' => $grouped->get('scripts', collect()),
            ],
        ]);
    }
}
