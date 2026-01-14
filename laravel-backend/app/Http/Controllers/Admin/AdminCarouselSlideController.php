<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroCarouselSlide;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCarouselSlideController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/CarouselSlides/Index', [
            'slides' => HeroCarouselSlide::orderBy('display_order')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CarouselSlides/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string',
            'image' => 'required|image|max:2048',
            'display_order' => 'required|integer',
            'is_active' => 'nullable|boolean',
            'link_url' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads/carousel_slides', 'public');
            $validated['image_path'] = $path;
        }
        
        unset($validated['image']);

        HeroCarouselSlide::create($validated);

        return redirect()->route('admin.carousel-slides.index')->with('success', 'Carousel slide created successfully.');
    }

    public function edit(HeroCarouselSlide $carouselSlide)
    {
        return Inertia::render('Admin/CarouselSlides/Edit', [
            'slide' => $carouselSlide
        ]);
    }

    public function update(Request $request, HeroCarouselSlide $carouselSlide)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'display_order' => 'required|integer',
            'is_active' => 'nullable|boolean',
            'link_url' => 'nullable|string',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads/carousel_slides', 'public');
            $validated['image_path'] = $path;
        }
        
        unset($validated['image']);

        $carouselSlide->update($validated);

        return redirect()->route('admin.carousel-slides.index')->with('success', 'Carousel slide updated successfully.');
    }

    public function destroy(HeroCarouselSlide $carouselSlide)
    {
        $carouselSlide->delete();
        return redirect()->route('admin.carousel-slides.index')->with('success', 'Carousel slide deleted successfully.');
    }
}
