<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SafariController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\BlogController;
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
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');
Route::get('/reviews', [PageController::class, 'reviews'])->name('reviews');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');
Route::get('/terms', [PageController::class, 'terms'])->name('terms');

// Planning Routes
Route::get('/planning', [PageController::class, 'planning'])->name('planning.index');
Route::get('/planning/safari-guide', [PageController::class, 'safariGuide'])->name('planning.safari-guide');
Route::get('/planning/accommodation', [PageController::class, 'accommodation'])->name('planning.accommodation');
Route::get('/planning/luxury-safari', [PageController::class, 'luxurySafari'])->name('planning.luxury-safari');
Route::get('/planning/group-safari', [PageController::class, 'groupSafari'])->name('planning.group-safari');
Route::get('/planning/private-safari', [PageController::class, 'privateSafari'])->name('planning.private-safari');
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
