<?php

namespace App\Http\Controllers;

use App\Models\Review;
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
        return Inertia::render('Services/CulturalTours');
    }

    public function servicesMountain(): Response
    {
        return Inertia::render('Services/MountainHiking');
    }

    public function servicesLuxury(): Response
    {
        return Inertia::render('Services/LuxurySafari');
    }

    public function servicesGroup(): Response
    {
        return Inertia::render('Services/GroupSafari');
    }

    public function servicesTailorMade(): Response
    {
        return Inertia::render('Services/TailorMadeSafari');
    }

    public function servicesZanzibar(): Response
    {
        return Inertia::render('Services/ZanzibarBeachSafari');
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
