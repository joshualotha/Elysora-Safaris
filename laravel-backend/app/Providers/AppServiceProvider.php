<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\SiteImage;

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
        // Share navbar images globally with all Inertia pages
        Inertia::share([
            'navImages' => function () {
                return SiteImage::forPage('navigation')->active()->get()->keyBy('key');
            },
        ]);
    }
}
