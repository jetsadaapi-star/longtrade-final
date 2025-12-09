<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Register Media Observer for automatic optimization
        \Awcodes\Curator\Models\Media::observe(\App\Observers\MediaObserver::class);
    }
}
