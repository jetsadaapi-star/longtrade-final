<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of articles with pagination and filters
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $query = Article::with('category')
            ->published();

        // Filter by category
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Filter by featured
        if ($request->has('is_featured') && $request->is_featured) {
            $query->where('is_featured', true);
        }

        // Filter by tags
        if ($request->has('tags')) {
            $tags = is_array($request->tags) ? $request->tags : [$request->tags];
            foreach ($tags as $tag) {
                $query->whereJsonContains('tags', $tag);
            }
        }

        // Search
        if ($request->has('search') && !empty($request->search)) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                    ->orWhere('excerpt', 'like', "%{$searchTerm}%")
                    ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }

        // Sorting
        $sortBy = $request->get('sort_by', 'published_at');
        $sortOrder = $request->get('sort_order', 'desc');

        $allowedSortFields = ['published_at', 'views_count', 'created_at', 'title'];
        if (in_array($sortBy, $allowedSortFields)) {
            $query->orderBy($sortBy, $sortOrder);
        }

        // Pagination
        $perPage = $request->get('per_page', 12);
        $perPage = min($perPage, 50); // Max 50 items per page

        $articles = $query->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $articles->items(),
            'pagination' => [
                'current_page' => $articles->currentPage(),
                'last_page' => $articles->lastPage(),
                'per_page' => $articles->perPage(),
                'total' => $articles->total(),
                'from' => $articles->firstItem(),
                'to' => $articles->lastItem(),
            ],
        ]);
    }

    /**
     * Display the specified article
     * 
     * @param string $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, string $slug)
    {
        $article = Article::with('category')
            ->where('slug', $slug)
            ->published()
            ->first();

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found',
            ], 404);
        }

        // Record view
        $userId = $request->user()?->id;
        $ipAddress = $request->ip();
        $userAgent = $request->userAgent();

        $article->recordView($userId, $ipAddress, $userAgent);

        // Get related articles
        $relatedArticles = Article::relatedTo($article)
            ->with('category')
            ->limit(3)
            ->get();

        return response()->json([
            'success' => true,
            'data' => [
                'article' => $article,
                'related_articles' => $relatedArticles,
                'meta_tags' => $article->generateMetaTags(),
                'structured_data' => $article->generateStructuredData(),
            ],
        ]);
    }

    /**
     * Get featured articles
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function featured()
    {
        $articles = Article::with('category')
            ->published()
            ->featured()
            ->orderBy('published_at', 'desc')
            ->limit(6)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $articles,
        ]);
    }

    /**
     * Get popular articles
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function popular(Request $request)
    {
        $days = $request->get('days', 30);
        $limit = $request->get('limit', 5);

        $articles = Article::with('category')
            ->published()
            ->popular($days)
            ->limit($limit)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $articles,
        ]);
    }

    /**
     * Get related articles for a specific article
     * 
     * @param string $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function related(string $slug)
    {
        $article = Article::where('slug', $slug)->published()->first();

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found',
            ], 404);
        }

        $relatedArticles = Article::relatedTo($article)
            ->with('category')
            ->limit(6)
            ->get();

        return response()->json([
            'success' => true,
            'data' => $relatedArticles,
        ]);
    }

    /**
     * Get articles by category
     * 
     * @param Request $request
     * @param string $categorySlug
     * @return \Illuminate\Http\JsonResponse
     */
    public function byCategory(Request $request, string $categorySlug)
    {
        $category = \App\Models\Category::where('slug', $categorySlug)->first();

        if (!$category) {
            return response()->json([
                'success' => false,
                'message' => 'Category not found',
            ], 404);
        }

        $query = Article::with('category')
            ->published()
            ->where('category_id', $category->id);

        // Sorting
        $sortBy = $request->get('sort_by', 'published_at');
        $sortOrder = $request->get('sort_order', 'desc');
        $query->orderBy($sortBy, $sortOrder);

        // Pagination
        $perPage = $request->get('per_page', 12);
        $articles = $query->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => [
                'category' => $category,
                'articles' => $articles->items(),
            ],
            'pagination' => [
                'current_page' => $articles->currentPage(),
                'last_page' => $articles->lastPage(),
                'per_page' => $articles->perPage(),
                'total' => $articles->total(),
            ],
        ]);
    }

    /**
     * Search articles
     * 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request)
    {
        $searchTerm = $request->get('q', '');

        if (empty($searchTerm)) {
            return response()->json([
                'success' => false,
                'message' => 'Search query is required',
            ], 400);
        }

        $query = Article::with('category')
            ->published()
            ->where(function ($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                    ->orWhere('excerpt', 'like', "%{$searchTerm}%")
                    ->orWhere('content', 'like', "%{$searchTerm}%")
                    ->orWhere('meta_keywords', 'like', "%{$searchTerm}%")
                    ->orWhere('focus_keyword', 'like', "%{$searchTerm}%");
            });

        $perPage = $request->get('per_page', 12);
        $articles = $query->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => [
                'query' => $searchTerm,
                'articles' => $articles->items(),
            ],
            'pagination' => [
                'current_page' => $articles->currentPage(),
                'last_page' => $articles->lastPage(),
                'per_page' => $articles->perPage(),
                'total' => $articles->total(),
            ],
        ]);
    }
}
