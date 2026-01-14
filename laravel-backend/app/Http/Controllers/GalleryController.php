<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Inertia\Inertia;

use App\Models\SiteImage;

class GalleryController extends Controller
{
    public function index()
    {
        $images = GalleryImage::active()->ordered()->get();
        $categories = $images->pluck('category')->unique()->sort()->values();
        
        $siteImages = SiteImage::forPage('gallery')->active()->get()->keyBy('key');

        return Inertia::render('Gallery', [
            'images' => $images,
            'categories' => $categories,
            'siteImages' => $siteImages,
        ]);
    }
}
