<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteImage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class AdminSiteImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $images = SiteImage::query()
            ->orderBy('page')
            ->orderBy('section')
            ->orderBy('display_order')
            ->get()
            ->groupBy('page');

        return Inertia::render('Admin/SiteImages/Index', [
            'groupedImages' => $images
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/SiteImages/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:site_images,key',
            'page' => 'required|string',
            'section' => 'required|string',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'required|image|max:2048', // 2MB max
            'alt_text' => 'nullable|string',
            'display_order' => 'integer|min:0',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads/site', 'public');
            $validated['image_path'] = $path;
        }

        SiteImage::create($validated);

        return redirect()->route('admin.site-images.index')->with('success', 'Site image created successfully.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SiteImage $siteImage)
    {
        return Inertia::render('Admin/SiteImages/Edit', [
            'image' => $siteImage
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SiteImage $siteImage)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:site_images,key,' . $siteImage->id,
            'page' => 'required|string',
            'section' => 'required|string',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048', // 2MB max
            'alt_text' => 'nullable|string',
            'display_order' => 'integer|min:0',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($siteImage->image_path && Storage::disk('public')->exists($siteImage->image_path)) {
                Storage::disk('public')->delete($siteImage->image_path);
            }
            
            $path = $request->file('image')->store('uploads/site', 'public');
            $validated['image_path'] = $path;
        }

        $siteImage->update($validated);

        return redirect()->route('admin.site-images.index')->with('success', 'Site image updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SiteImage $siteImage)
    {
        if ($siteImage->image_path && Storage::disk('public')->exists($siteImage->image_path)) {
            Storage::disk('public')->delete($siteImage->image_path);
        }

        $siteImage->delete();

        return redirect()->route('admin.site-images.index')->with('success', 'Site image deleted successfully.');
    }
}
