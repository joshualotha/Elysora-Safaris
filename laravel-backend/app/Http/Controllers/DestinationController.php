<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Inertia\Inertia;
use Inertia\Response;

class DestinationController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Destinations/Index', [
            'destinations' => Destination::all(),
        ]);
    }

    public function show(Destination $destination): Response
    {
        return Inertia::render('Destinations/Show', [
            'destination' => $destination,
        ]);
    }
}
