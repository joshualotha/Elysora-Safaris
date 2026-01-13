<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Setting;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ShareInertiaSettings
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Share settings with all Inertia pages
        Inertia::share([
            'settings' => function () {
                return Setting::getAllSettings();
            },
        ]);

        return $next($request);
    }
}
