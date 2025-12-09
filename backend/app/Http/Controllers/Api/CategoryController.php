<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    /**
     * Display a listing of all categories.
     */
    public function index(): JsonResponse
    {
        $categories = Category::orderBy('name')
            ->get();

        return response()->json($categories);
    }

    /**
     * Display the specified category with its items.
     */
    public function show(string $slug): JsonResponse
    {
        $category = Category::where('slug', $slug)
            ->firstOrFail();

        return response()->json($category);
    }
}
