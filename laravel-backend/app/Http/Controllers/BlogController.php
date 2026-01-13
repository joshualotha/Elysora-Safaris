<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Blog/Index', [
            'blogPosts' => BlogPost::latest()->paginate(12),
        ]);
    }

    public function show(BlogPost $post): Response
    {
        return Inertia::render('Blog/Show', [
            'post' => $post,
        ]);
    }
}
