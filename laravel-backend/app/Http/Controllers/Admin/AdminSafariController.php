<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SafariPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSafariController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Safaris/Index', [
            'safaris' => SafariPackage::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Safaris/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:safari_packages',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'duration' => 'required|integer',
            'image' => 'required|image|max:2048',
            'destinations' => 'nullable|string',
            'highlights' => 'nullable|string',
            'itinerary' => 'nullable|string',
            'whats_included' => 'nullable|string',
            'whats_excluded' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        }

        // Parse array fields
        $validated['destinations'] = !empty($validated['destinations']) 
            ? array_filter(array_map('trim', explode(',', $validated['destinations']))) 
            : [];
        $validated['highlights'] = !empty($validated['highlights']) 
            ? array_filter(array_map('trim', explode(',', $validated['highlights']))) 
            : [];
        $validated['itinerary'] = !empty($validated['itinerary']) 
            ? json_decode($validated['itinerary'], true) ?: [] 
            : [];
        $validated['whats_included'] = !empty($validated['whats_included']) 
            ? array_filter(array_map('trim', explode(',', $validated['whats_included']))) 
            : [];
        $validated['whats_excluded'] = !empty($validated['whats_excluded']) 
            ? array_filter(array_map('trim', explode(',', $validated['whats_excluded']))) 
            : [];

        SafariPackage::create($validated);

        return redirect()->route('admin.safaris.index')->with('success', 'Safari created successfully.');
    }

    public function edit(SafariPackage $safari)
    {
        return Inertia::render('Admin/Safaris/Edit', [
            'safari' => $safari
        ]);
    }

    public function update(Request $request, SafariPackage $safari)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:safari_packages,slug,' . $safari->id,
            'description' => 'required|string',
            'price' => 'required|numeric',
            'duration' => 'required|integer',
            'image' => 'nullable|image|max:2048',
            'destinations' => 'nullable|string',
            'highlights' => 'nullable|string',
            'itinerary' => 'nullable|string',
            'whats_included' => 'nullable|string',
            'whats_excluded' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        } else {
             unset($validated['image']);
        }

        // Parse array fields
        if (isset($validated['destinations'])) {
            $validated['destinations'] = !empty($validated['destinations']) 
                ? array_filter(array_map('trim', explode(',', $validated['destinations']))) 
                : [];
        }
        if (isset($validated['highlights'])) {
            $validated['highlights'] = !empty($validated['highlights']) 
                ? array_filter(array_map('trim', explode(',', $validated['highlights']))) 
                : [];
        }
        if (isset($validated['itinerary'])) {
            $validated['itinerary'] = !empty($validated['itinerary']) 
                ? json_decode($validated['itinerary'], true) ?: [] 
                : [];
        }
        if (isset($validated['whats_included'])) {
            $validated['whats_included'] = !empty($validated['whats_included']) 
                ? array_filter(array_map('trim', explode(',', $validated['whats_included']))) 
                : [];
        }
        if (isset($validated['whats_excluded'])) {
            $validated['whats_excluded'] = !empty($validated['whats_excluded']) 
                ? array_filter(array_map('trim', explode(',', $validated['whats_excluded']))) 
                : [];
        }

        $safari->update($validated);

        return redirect()->route('admin.safaris.index')->with('success', 'Safari updated successfully.');
    }

    public function destroy(SafariPackage $safari)
    {
        $safari->delete();
        return redirect()->route('admin.safaris.index')->with('success', 'Safari deleted successfully.');
    }
}
