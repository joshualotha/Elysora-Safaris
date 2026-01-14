<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use App\Models\SafariPackage;
use App\Models\BlogPost;
use App\Models\Review;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $featuredSafari = SafariPackage::where('is_featured', true)->first();
        
        // Fallback to first safari if none is featured
        if (!$featuredSafari) {
            $featuredSafari = SafariPackage::first();
        }

        return Inertia::render('Home', [
            'featuredDestinations' => Destination::take(4)->get(),
            'safariPackages' => SafariPackage::take(6)->get(),
            'latestBlogPosts' => BlogPost::latest()->take(3)->get(),
            'reviews' => Review::where('rating', '>=', 4)->get(),
            'featuredSafari' => $featuredSafari,
        ]);
    }
}
