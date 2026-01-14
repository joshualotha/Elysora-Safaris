<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\SiteImage;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        $siteImages = SiteImage::forPage('blog')->active()->get()->keyBy('key');

        return Inertia::render('Blog/Index', [
            'blogPosts' => BlogPost::latest()->paginate(12),
            'siteImages' => $siteImages,
        ]);
    }

    public function show(BlogPost $post): Response
    {
        return Inertia::render('Blog/Show', [
            'post' => $post,
        ]);
    }
}
