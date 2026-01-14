<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\SafariPackage;
use App\Models\SiteImage;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function about(): Response
    {
        $images = SiteImage::forPage('about')->active()->get()->keyBy('key');
        return Inertia::render('About', ['images' => $images]);
    }

    public function contact(): Response
    {
        $images = SiteImage::forPage('contact')->active()->get()->keyBy('key');
        return Inertia::render('Contact', ['images' => $images]);
    }

    public function conservation(): Response
    {
        $images = SiteImage::forPage('conservation')->active()->get()->keyBy('key');
        return Inertia::render('Conservation', ['images' => $images]);
    }

    public function gallery(): Response
    {
        $images = SiteImage::forPage('gallery')->active()->get()->keyBy('key');
        return Inertia::render('Gallery', ['images' => $images]);
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
        $images = SiteImage::forPage('planning_safari_guide')->active()->get()->keyBy('key');
        return Inertia::render('Planning/SafariGuide', ['images' => $images]);
    }

    public function accommodation(): Response
    {
        $images = SiteImage::forPage('planning_accommodation')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Accommodation', ['images' => $images]);
    }

    // Services Pages
    public function servicesCultural(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        $images = SiteImage::forPage('services_cultural')->active()->get()->keyBy('key');
        return Inertia::render('Services/CulturalTours', ['safaris' => $safaris, 'images' => $images]);
    }

    public function servicesMountain(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        $images = SiteImage::forPage('services_mountain')->active()->get()->keyBy('key');
        return Inertia::render('Services/MountainHiking', ['safaris' => $safaris, 'images' => $images]);
    }

    public function servicesLuxury(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        $images = SiteImage::forPage('services_luxury')->active()->get()->keyBy('key');
        return Inertia::render('Services/LuxurySafari', ['safaris' => $safaris, 'images' => $images]);
    }

    public function servicesGroup(): Response
    {
        $safaris = SafariPackage::where('category', 'group-safari')->get();
        $images = SiteImage::forPage('services_group')->active()->get()->keyBy('key');
        return Inertia::render('Services/GroupSafari', ['safaris' => $safaris, 'images' => $images]);
    }

    public function servicesTailorMade(): Response
    {
        $safaris = SafariPackage::where('category', 'tailor-made-safari')->get();
        $images = SiteImage::forPage('services_tailor_made')->active()->get()->keyBy('key');
        return Inertia::render('Services/TailorMadeSafari', ['safaris' => $safaris, 'images' => $images]);
    }

    public function servicesZanzibar(): Response
    {
        $safaris = SafariPackage::where('category', 'classic-safari')->get();
        $images = SiteImage::forPage('services_zanzibar')->active()->get()->keyBy('key');
        return Inertia::render('Services/ZanzibarBeachSafari', ['safaris' => $safaris, 'images' => $images]);
    }

    public function campingSafari(): Response
    {
        $images = SiteImage::forPage('planning_camping')->active()->get()->keyBy('key');
        return Inertia::render('Planning/CampingSafari', ['images' => $images]);
    }

    public function practicalInformation(): Response
    {
        $images = SiteImage::forPage('planning_practical')->active()->get()->keyBy('key');
        return Inertia::render('Planning/PracticalInformation', ['images' => $images]);
    }

    public function planningVisa(): Response
    {
        $images = SiteImage::forPage('planning_visa')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Visa', ['images' => $images]);
    }

    public function planningHealth(): Response
    {
        $images = SiteImage::forPage('planning_health')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Health', ['images' => $images]);
    }

    public function planningMoney(): Response
    {
        $images = SiteImage::forPage('planning_money')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Money', ['images' => $images]);
    }

    public function planningPacking(): Response
    {
        $images = SiteImage::forPage('planning_packing')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Packing', ['images' => $images]);
    }

    public function planningCulture(): Response
    {
        $images = SiteImage::forPage('planning_culture')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Culture', ['images' => $images]);
    }

    public function planningConnectivity(): Response
    {
        $images = SiteImage::forPage('planning_connectivity')->active()->get()->keyBy('key');
        return Inertia::render('Planning/Practical/Connectivity', ['images' => $images]);
    }
}
