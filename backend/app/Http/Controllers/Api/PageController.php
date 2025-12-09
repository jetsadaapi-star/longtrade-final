<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function show($slug)
    {
        $page = Page::where('slug', $slug)->where('is_active', true)->firstOrFail();
        return response()->json($page);
    }

    public function home()
    {
        $page = Page::where('is_home', true)->where('is_active', true)->first();

        if (!$page) {
            return response()->json(['message' => 'No custom homepage found'], 404);
        }

        return response()->json($page);
    }
}
