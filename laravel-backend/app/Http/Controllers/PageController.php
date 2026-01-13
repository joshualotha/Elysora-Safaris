<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function conservation(): Response
    {
        return Inertia::render('Conservation');
    }

    public function gallery(): Response
    {
        return Inertia::render('Gallery');
    }

    public function reviews(): Response
    {
        return Inertia::render('Reviews', [
            'reviews' => Review::latest()->get(),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('FAQ');
    }

    public function privacy(): Response
    {
        return Inertia::render('Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Terms');
    }
}
