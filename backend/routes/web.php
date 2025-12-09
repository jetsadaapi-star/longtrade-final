<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\RssFeedController;

Route::get('/', function () {
    return view('welcome');
});

// SEO Routes
Route::get('/sitemap.xml', [SitemapController::class, 'index']);
Route::get('/sitemap-articles.xml', [SitemapController::class, 'articles']);
Route::get('/feed', [RssFeedController::class, 'index']);
Route::get('/rss', [RssFeedController::class, 'index']);
