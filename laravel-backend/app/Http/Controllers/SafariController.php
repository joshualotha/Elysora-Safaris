<?php

namespace App\Http\Controllers;

use App\Models\SafariPackage;
use Inertia\Inertia;
use Inertia\Response;

class SafariController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Safaris/Index', [
            'safaris' => SafariPackage::all(),
        ]);
    }

    public function show(SafariPackage $safari): Response
    {
        return Inertia::render('Safaris/Show', [
            'safari' => $safari,
            'relatedSafaris' => SafariPackage::where('id', '!=', $safari->id)
                ->take(3)
                ->get(),
        ]);
    }
}
