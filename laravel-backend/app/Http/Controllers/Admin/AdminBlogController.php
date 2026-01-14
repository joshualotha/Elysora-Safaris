<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminBlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Blog/Index', [
            'posts' => BlogPost::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blog_posts',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'image' => 'required|image|max:2048', // Validate image
            'category' => 'required|string',
            'author' => 'required|string',
            'read_time' => 'required|string',
            'published_at' => 'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        }

        BlogPost::create($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Post created successfully.');
    }

    public function edit(BlogPost $blogPost)
    {
        return Inertia::render('Admin/Blog/Edit', [
            'post' => $blogPost
        ]);
    }

    public function update(Request $request, BlogPost $blogPost)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blog_posts,slug,' . $blogPost->id,
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'category' => 'required|string',
            'author' => 'required|string',
            'read_time' => 'required|string',
            'published_at' => 'nullable|date',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('uploads', 'public');
            $validated['image'] = $path;
        } else {
            unset($validated['image']);
        }

        $blogPost->update($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(BlogPost $blogPost)
    {
        $blogPost->delete();
        return redirect()->route('admin.blog.index')->with('success', 'Post deleted successfully.');
    }
}
