<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Indicator;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class IndicatorController extends Controller
{
    /**
     * Display a listing of published indicators.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Indicator::query()
            ->with('category')
            ->published()
            ->orderBy('created_at', 'desc');

        // Filter by category
        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Filter by platform
        if ($request->has('platform')) {
            $query->where('platform', $request->platform);
        }

        // Pagination
        $perPage = $request->get('per_page', 12);
        $indicators = $query->paginate($perPage);

        return response()->json($indicators);
    }

    /**
     * Display the specified indicator.
     */
    public function show(string $slug): JsonResponse
    {
        $indicator = Indicator::with('category')
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        return response()->json($indicator);
    }

    /**
     * Display featured indicators.
     */
    public function featured(): JsonResponse
    {
        $indicators = Indicator::with('category')
            ->published()
            ->featured()
            ->limit(6)
            ->get();

        return response()->json($indicators);
    }
}
