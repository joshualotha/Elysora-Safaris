<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\SafariPackage;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function conservation(): Response
    {
        return Inertia::render('Conservation');
    }

    public function gallery(): Response
    {
        return Inertia::render('Gallery');
    }

    public function reviews(): Response
    {
        return Inertia::render('Reviews', [
            'reviews' => Review::latest()->get(),
        ]);
    }

    public function faq(): Response
    {
        return Inertia::render('FAQ');
    }

    public function privacy(): Response
    {
        return Inertia::render('Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Terms');
    }

    // Planning Pages
    public function planning(): Response
    {
        return Inertia::render('Planning/Index');
    }

    public function safariGuide(): Response
    {
        return Inertia::render('Planning/SafariGuide');
    }

    public function accommodation(): Response
    {
        return Inertia::render('Planning/Accommodation');
    }

    // Services Pages
    public function servicesCultural(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        return Inertia::render('Services/CulturalTours', ['safaris' => $safaris]);
    }

    public function servicesMountain(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        return Inertia::render('Services/MountainHiking', ['safaris' => $safaris]);
    }

    public function servicesLuxury(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        return Inertia::render('Services/LuxurySafari', ['safaris' => $safaris]);
    }

    public function servicesGroup(): Response
    {
        $safaris = SafariPackage::where('category', 'group-safari')->get();
        return Inertia::render('Services/GroupSafari', ['safaris' => $safaris]);
    }

    public function servicesTailorMade(): Response
    {
        $safaris = SafariPackage::where('category', 'tailor-made-safari')->get();
        return Inertia::render('Services/TailorMadeSafari', ['safaris' => $safaris]);
    }

    public function servicesZanzibar(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        return Inertia::render('Services/ZanzibarBeachSafari', ['safaris' => $safaris]);
    }

    public function campingSafari(): Response
    {
        return Inertia::render('Planning/CampingSafari');
    }

    public function practicalInformation(): Response
    {
        return Inertia::render('Planning/PracticalInformation');
    }

    public function planningVisa(): Response
    {
        return Inertia::render('Planning/Practical/Visa');
    }

    public function planningHealth(): Response
    {
        return Inertia::render('Planning/Practical/Health');
    }

    public function planningMoney(): Response
    {
        return Inertia::render('Planning/Practical/Money');
    }

    public function planningPacking(): Response
    {
        return Inertia::render('Planning/Practical/Packing');
    }

    public function planningCulture(): Response
    {
        return Inertia::render('Planning/Practical/Culture');
    }

    public function planningConnectivity(): Response
    {
        return Inertia::render('Planning/Practical/Connectivity');
    }
}
