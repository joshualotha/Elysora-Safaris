<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminTestimonialController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Testimonials/Index', [
            'testimonials' => Testimonial::orderBy('order')->orderBy('created_at', 'desc')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Testimonials/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'author' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
            'safari_taken' => 'required|string|max:255',
            'author_image' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
            'is_approved' => 'nullable|boolean',
        ]);

        if ($request->hasFile('author_image')) {
            $path = $request->file('author_image')->store('uploads', 'public');
            $validated['author_image'] = $path;
        }

        $validated['is_approved'] = $request->has('is_approved') ? (bool)$request->is_approved : false;
        $validated['order'] = $validated['order'] ?? 0;

        Testimonial::create($validated);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial created successfully.');
    }

    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('Admin/Testimonials/Edit', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $validated = $request->validate([
            'author' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string',
            'safari_taken' => 'required|string|max:255',
            'author_image' => 'nullable|image|max:2048',
            'order' => 'nullable|integer',
            'is_approved' => 'nullable|boolean',
        ]);

        if ($request->hasFile('author_image')) {
            $path = $request->file('author_image')->store('uploads', 'public');
            $validated['author_image'] = $path;
        } else {
            unset($validated['author_image']);
        }

        $validated['is_approved'] = $request->has('is_approved') ? (bool)$request->is_approved : $testimonial->is_approved;
        $validated['order'] = $validated['order'] ?? $testimonial->order;

        $testimonial->update($validated);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }
}
