<?php

namespace App\Http\Controllers;

use App\Models\SafariPackage;
use Inertia\Inertia;
use Inertia\Response;

class SafariController extends Controller
{
    public function index(\Illuminate\Http\Request $request): Response
    {
        $query = SafariPackage::query();
        
        // Search by name or description
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }
        
        // Filter by category
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        
        // Filter by duration
        if ($request->filled('duration')) {
            switch($request->duration) {
                case 'short': // 1-3 days
                    $query->where('duration', '<=', 3);
                    break;
                case 'medium': // 4-7 days
                    $query->whereBetween('duration', [4, 7]);
                    break;
                case 'long': // 8+ days
                    $query->where('duration', '>=', 8);
                    break;
            }
        }
        
        $safaris = $query->orderBy('created_at', 'desc')->paginate(9);
        
        return Inertia::render('Safaris/Index', [
            'safaris' => $safaris,
            'filters' => $request->only(['search', 'category', 'duration'])
        ]);
    }

    public function show(SafariPackage $safari): Response
    {
        return Inertia::render('Safaris/Show', [
            'safari' => $safari,
            'relatedSafaris' => SafariPackage::where('id', '!=', $safari->id)
                ->take(3)
                ->get(),
        ]);
    }
}
