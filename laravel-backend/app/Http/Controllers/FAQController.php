<?php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Inertia\Inertia;

class FAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::active()->ordered()->get()->groupBy('category');

        return Inertia::render('FAQ', [
            'faqs' => $faqs
        ]);
    }
}
