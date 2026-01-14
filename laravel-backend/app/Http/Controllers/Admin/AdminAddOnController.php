<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AddOn;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminAddOnController extends Controller
{
    public function index(): Response
    {
        $addOns = AddOn::orderBy('name')->get();

        return Inertia::render('Admin/AddOns/Index', [
            'addOns' => $addOns
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/AddOns/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'is_active' => 'boolean',
        ]);

        AddOn::create($validated);

        return redirect()->route('admin.add-ons.index')
            ->with('success', 'Add-on created successfully.');
    }

    public function edit(AddOn $addOn): Response
    {
        return Inertia::render('Admin/AddOns/Edit', [
            'addOn' => $addOn
        ]);
    }

    public function update(Request $request, AddOn $addOn)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'is_active' => 'boolean',
        ]);

        $addOn->update($validated);

        return redirect()->route('admin.add-ons.index')
            ->with('success', 'Add-on updated successfully.');
    }

    public function destroy(AddOn $addOn)
    {
        $addOn->delete();

        return redirect()->route('admin.add-ons.index')
            ->with('success', 'Add-on deleted successfully.');
    }
}
