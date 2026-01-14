<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\SiteImage;
use Inertia\Inertia;
use Inertia\Response;

class DestinationController extends Controller
{
    public function index(): Response
    {
        $siteImages = SiteImage::forPage('destinations')->active()->get()->keyBy('key');

        return Inertia::render('Destinations/Index', [
            'destinations' => Destination::all(),
            'siteImages' => $siteImages,
        ]);
    }

    public function show(Destination $destination): Response
    {
        return Inertia::render('Destinations/Show', [
            'destination' => $destination,
        ]);
    }
}
