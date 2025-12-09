<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Course;
use App\Models\Indicator;
use App\Models\Ebook;
use App\Models\ExpertAdvisor;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ReviewController extends Controller
{
    /**
     * Get reviews for a specific product
     */
    public function index(Request $request, string $type, string $slug): JsonResponse
    {
        $model = $this->getModel($type);

        if (!$model) {
            return response()->json(['error' => 'Invalid product type'], 400);
        }

        $product = $model::where('slug', $slug)->firstOrFail();

        $query = $product->reviews()->approved();

        // Filter by rating
        if ($request->has('rating')) {
            $query->where('rating', $request->rating);
        }

        // Sort
        $sortBy = $request->get('sort', 'created_at');
        $sortOrder = $request->get('order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 10);
        $reviews = $query->paginate($perPage);

        return response()->json($reviews);
    }

    /**
     * Get review statistics for a product
     */
    public function stats(Request $request, string $type, string $slug): JsonResponse
    {
        $model = $this->getModel($type);

        if (!$model) {
            return response()->json(['error' => 'Invalid product type'], 400);
        }

        $product = $model::where('slug', $slug)->firstOrFail();

        $approvedReviews = $product->reviews()->approved();

        // Rating breakdown
        $breakdown = [];
        for ($i = 5; $i >= 1; $i--) {
            $breakdown[$i] = $product->reviews()
                ->approved()
                ->where('rating', $i)
                ->count();
        }

        $stats = [
            'average_rating' => round((float) $product->average_rating, 2),
            'total_reviews' => $product->reviews_count,
            'rating_breakdown' => $breakdown,
            'verified_purchases' => $product->reviews()
                ->approved()
                ->where('is_verified_purchase', true)
                ->count(),
        ];

        return response()->json($stats);
    }

    /**
     * Create a new review
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'reviewable_type' => 'required|string|in:course,indicator,ebook,expert_advisor',
            'reviewable_id' => 'required|integer',
            'user_name' => 'required|string|max:255',
            'user_email' => 'required|email|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'title' => 'nullable|string|max:255',
            'comment' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Map type to model class
        $typeMap = [
            'course' => Course::class,
            'indicator' => Indicator::class,
            'ebook' => Ebook::class,
            'expert_advisor' => ExpertAdvisor::class,
        ];

        $modelClass = $typeMap[$request->reviewable_type];

        // Verify product exists
        $product = $modelClass::findOrFail($request->reviewable_id);

        // Create review
        $review = Review::create([
            'reviewable_type' => $modelClass,
            'reviewable_id' => $request->reviewable_id,
            'user_name' => $request->user_name,
            'user_email' => $request->user_email,
            'rating' => $request->rating,
            'title' => $request->title,
            'comment' => $request->comment,
            'ip_address' => $request->ip(),
            'is_approved' => false, // Requires admin approval
            'is_verified_purchase' => false, // Can be updated later
        ]);

        return response()->json([
            'message' => 'รีวิวของคุณถูกส่งเรียบร้อยแล้ว รอการอนุมัติจากผู้ดูแลระบบ',
            'review' => $review,
        ], 201);
    }

    /**
     * Get model class from type string
     */
    private function getModel(string $type): ?string
    {
        return match ($type) {
            'course', 'courses' => Course::class,
            'indicator', 'indicators' => Indicator::class,
            'ebook', 'ebooks' => Ebook::class,
            'expert-advisor', 'expert_advisor', 'expert-advisors' => ExpertAdvisor::class,
            default => null,
        };
    }
}
