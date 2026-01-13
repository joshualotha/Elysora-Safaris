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

// Auth routes (from Breeze)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
