<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SafariController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Main Pages
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/safaris', [SafariController::class, 'index'])->name('safaris.index');
Route::get('/safaris/{safari:slug}', [SafariController::class, 'show'])->name('safaris.show');
Route::get('/destinations', [DestinationController::class, 'index'])->name('destinations.index');
Route::get('/destinations/{destination:slug}', [DestinationController::class, 'show'])->name('destinations.show');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{post:slug}', [BlogController::class, 'show'])->name('blog.show');

// Static Pages
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/conservation', [PageController::class, 'conservation'])->name('conservation');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
Route::get('/reviews', [TestimonialController::class, 'index'])->name('reviews');
Route::get('/faq', [FAQController::class, 'index'])->name('faq');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/terms', [PageController::class, 'terms'])->name('terms');

// Services Routes
Route::prefix('services')->group(function () {
    Route::get('/cultural-tours', [PageController::class, 'servicesCultural'])->name('services.cultural-tours');
    Route::get('/mountain-hiking', [PageController::class, 'servicesMountain'])->name('services.mountain-hiking');
    Route::get('/luxury-safari', [PageController::class, 'servicesLuxury'])->name('services.luxury-safari');
    Route::get('/group-safari', [PageController::class, 'servicesGroup'])->name('services.group-safari');
    Route::get('/tailor-made-safari', [PageController::class, 'servicesTailorMade'])->name('services.tailor-made-safari');
    Route::get('/zanzibar-beach-safari', [PageController::class, 'servicesZanzibar'])->name('services.zanzibar-beach-safari');
});

// Planning Routes
Route::get('/planning', [PageController::class, 'planning'])->name('planning.index');
Route::get('/planning/safari-guide', [PageController::class, 'safariGuide'])->name('planning.safari-guide');
Route::get('/planning/accommodation', [PageController::class, 'accommodation'])->name('planning.accommodation');
// Migrated to Services
Route::get('/planning/luxury-safari', function() { return redirect()->route('services.luxury-safari'); });
Route::get('/planning/group-safari', function() { return redirect()->route('services.group-safari'); });
Route::get('/planning/private-safari', function() { return redirect()->route('services.tailor-made-safari'); }); // Renamed
Route::get('/planning/camping-safari', [PageController::class, 'campingSafari'])->name('planning.camping-safari');
Route::get('/planning/practical-information', [PageController::class, 'practicalInformation'])->name('planning.practical-information');

Route::get('/planning/visa', [PageController::class, 'planningVisa'])->name('planning.visa');
Route::get('/planning/health', [PageController::class, 'planningHealth'])->name('planning.health');
Route::get('/planning/money', [PageController::class, 'planningMoney'])->name('planning.money');
Route::get('/planning/packing', [PageController::class, 'planningPacking'])->name('planning.packing');
Route::get('/planning/culture', [PageController::class, 'planningCulture'])->name('planning.culture');
Route::get('/planning/connectivity', [PageController::class, 'planningConnectivity'])->name('planning.connectivity');

// Auth routes (from Breeze)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

// Admin Routes
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [App\Http\Controllers\Admin\AdminController::class, 'dashboard'])->name('dashboard');
    Route::resource('destinations', App\Http\Controllers\Admin\AdminDestinationController::class);
    Route::resource('safaris', App\Http\Controllers\Admin\AdminSafariController::class);
    Route::resource('blog', App\Http\Controllers\Admin\AdminBlogController::class);
    Route::resource('gallery', App\Http\Controllers\Admin\AdminGalleryController::class);
    Route::resource('testimonials', App\Http\Controllers\Admin\AdminTestimonialController::class);
    Route::resource('faqs', App\Http\Controllers\Admin\AdminFAQController::class);
    Route::resource('contacts', App\Http\Controllers\Admin\AdminContactController::class)->only(['index', 'show', 'update', 'destroy']);
    // More resource routes will go here
});

