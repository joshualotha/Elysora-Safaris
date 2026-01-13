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
            'image' => 'required|string',
            // Simple itinerary placeholders for now
        ]);
        
        // Add defaults for json fields if needed
        $validated['itinerary'] = [];
        $validated['inclusions'] = [];
        $validated['exclusions'] = [];

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
            'image' => 'required|string',
        ]);

        $safari->update($validated);

        return redirect()->route('admin.safaris.index')->with('success', 'Safari updated successfully.');
    }

    public function destroy(SafariPackage $safari)
    {
        $safari->delete();
        return redirect()->route('admin.safaris.index')->with('success', 'Safari deleted successfully.');
    }
}
