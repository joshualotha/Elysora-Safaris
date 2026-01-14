<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\SafariPackage;
use App\Models\Destination;
use App\Models\BlogPost;
use App\Models\GalleryImage;
use App\Models\Testimonial;
use App\Models\FAQ;
use App\Models\ContactSubmission;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'destinations' => Destination::count(),
                'safaris' => SafariPackage::count(),
                'blog_posts' => BlogPost::count(),
                'gallery_images' => GalleryImage::count(),
                'testimonials' => Testimonial::count(),
                'faqs' => FAQ::count(),
            ],
            'recent_contacts' => ContactSubmission::orderBy('created_at', 'desc')
                ->take(5)
                ->get(['id', 'name', 'email', 'message', 'created_at']),
            'recent_posts' => BlogPost::orderBy('created_at', 'desc')
                ->take(5)
                ->get(['id', 'title', 'slug', 'created_at']),
            'recent_testimonials' => Testimonial::orderBy('created_at', 'desc')
                ->take(3)
                ->get(['id', 'author', 'comment', 'created_at']),
        ]);
    }

    public function destinations(): Response
    {
        return Inertia::render('Admin/Destinations/Index', [
            'destinations' => Destination::all()
        ]);
    }
}
