<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDestinationController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Destinations/Index', [
            'destinations' => Destination::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Destinations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:destinations',
            'description' => 'required|string',
            'image' => 'required|string',
            // Add array validation for attractions if needed, simplistic for now
        ]);

        Destination::create($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination created successfully.');
    }

    public function edit(Destination $destination)
    {
        return Inertia::render('Admin/Destinations/Edit', [
            'destination' => $destination
        ]);
    }

    public function update(Request $request, Destination $destination)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:destinations,slug,' . $destination->id,
            'description' => 'required|string',
            'image' => 'required|string',
        ]);

        $destination->update($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination updated successfully.');
    }

    public function destroy(Destination $destination)
    {
        $destination->delete();
        return redirect()->route('admin.destinations.index')->with('success', 'Destination deleted successfully.');
    }
}
