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
            'subtitle' => 'nullable|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|max:2048',
            'attractions' => 'nullable|string',
            'stats' => 'nullable|string',
            'highlights' => 'nullable|string',
            'sections' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        }

        // Parse JSON fields from textarea inputs
        if (!empty($validated['attractions'])) {
            $validated['attractions'] = array_filter(array_map('trim', explode(',', $validated['attractions'])));
        }
        if (!empty($validated['stats'])) {
            $validated['stats'] = json_decode($validated['stats'], true) ?: [];
        }
        if (!empty($validated['highlights'])) {
            $validated['highlights'] = json_decode($validated['highlights'], true) ?: [];
        }
        if (!empty($validated['sections'])) {
            $validated['sections'] = json_decode($validated['sections'], true) ?: [];
        }

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
            'subtitle' => 'nullable|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'attractions' => 'nullable|string',
            'stats' => 'nullable|string',
            'highlights' => 'nullable|string',
            'sections' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        } else {
             unset($validated['image']);
        }

        // Parse JSON fields
        if (isset($validated['attractions'])) {
            $validated['attractions'] = !empty($validated['attractions']) 
                ? array_filter(array_map('trim', explode(',', $validated['attractions']))) 
                : [];
        }
        if (isset($validated['stats'])) {
            $validated['stats'] = !empty($validated['stats']) 
                ? json_decode($validated['stats'], true) ?: [] 
                : [];
        }
        if (isset($validated['highlights'])) {
            $validated['highlights'] = !empty($validated['highlights']) 
                ? json_decode($validated['highlights'], true) ?: [] 
                : [];
        }
        if (isset($validated['sections'])) {
            $validated['sections'] = !empty($validated['sections']) 
                ? json_decode($validated['sections'], true) ?: [] 
                : [];
        }

        $destination->update($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination updated successfully.');
    }

    public function destroy(Destination $destination)
    {
        $destination->delete();
        return redirect()->route('admin.destinations.index')->with('success', 'Destination deleted successfully.');
    }
}
