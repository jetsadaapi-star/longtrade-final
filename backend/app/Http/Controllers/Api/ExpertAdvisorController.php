<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ExpertAdvisor;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ExpertAdvisorController extends Controller
{
    /**
     * Display a listing of published expert advisors.
     */
    public function index(Request $request): JsonResponse
    {
        $query = ExpertAdvisor::query()
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
        $expertAdvisors = $query->paginate($perPage);

        return response()->json($expertAdvisors);
    }

    /**
     * Display the specified expert advisor.
     */
    public function show(string $slug): JsonResponse
    {
        $expertAdvisor = ExpertAdvisor::with('category')
            ->where('slug', $slug)
            ->published()
            ->firstOrFail();

        return response()->json($expertAdvisor);
    }

    /**
     * Display featured expert advisors.
     */
    public function featured(): JsonResponse
    {
        $expertAdvisors = ExpertAdvisor::with('category')
            ->published()
            ->featured()
            ->limit(6)
            ->get();


        return response()->json($expertAdvisors);
    }
}
