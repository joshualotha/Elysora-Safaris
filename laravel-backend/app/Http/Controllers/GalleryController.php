<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $images = GalleryImage::active()->ordered()->get();
        
        $categories = $images->pluck('category')->unique()->sort()->values();

        return Inertia::render('Gallery', [
            'images' => $images,
            'categories' => $categories
        ]);
    }
}
