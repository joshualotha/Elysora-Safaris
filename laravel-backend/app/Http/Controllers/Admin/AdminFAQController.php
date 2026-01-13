<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFAQController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/FAQs/Index', [
            'faqs' => FAQ::orderBy('category')->orderBy('order')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/FAQs/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'question' => 'required|string|max:500',
            'answer' => 'required|string',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active') ? (bool)$request->is_active : true;
        $validated['order'] = $validated['order'] ?? 0;

        FAQ::create($validated);

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ created successfully.');
    }

    public function edit(FAQ $faq)
    {
        return Inertia::render('Admin/FAQs/Edit', [
            'faq' => $faq
        ]);
    }

    public function update(Request $request, FAQ $faq)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255',
            'question' => 'required|string|max:500',
            'answer' => 'required|string',
            'order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $validated['is_active'] = $request->has('is_active') ? (bool)$request->is_active : $faq->is_active;
        $validated['order'] = $validated['order'] ?? $faq->order;

        $faq->update($validated);

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ updated successfully.');
    }

    public function destroy(FAQ $faq)
    {
        $faq->delete();
        return redirect()->route('admin.faqs.index')->with('success', 'FAQ deleted successfully.');
    }
}
