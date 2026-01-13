<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\SafariPackage;
use App\Models\Destination;
use App\Models\BlogPost;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'safaris' => SafariPackage::count(),
                'destinations' => Destination::count(),
                'posts' => BlogPost::count(),
            ]
        ]);
    }

    public function destinations(): Response
    {
        return Inertia::render('Admin/Destinations/Index', [
            'destinations' => Destination::all()
        ]);
    }
}
