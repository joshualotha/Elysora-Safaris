<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\SafariPackage;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BookingController extends Controller
{
    public function create(SafariPackage $safari): Response
    {
        $addOns = \App\Models\AddOn::where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'description', 'price']);

        return Inertia::render('Safaris/Book', [
            'safari' => $safari,
            'addOns' => $addOns
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'safari_package_id' => 'required|exists:safari_packages,id',
            'travel_date' => 'required|date|after:today',
            'number_of_travelers' => 'required|integer|min:1',
            'number_of_children' => 'nullable|integer|min:0',
            'accommodation_type' => 'required|in:budget,standard,luxury',
            'add_ons' => 'nullable|array',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'country' => 'nullable|string|max:100',
            'special_requests' => 'nullable|string',
        ]);

        $booking = Booking::create($validated);

        return redirect()->route('bookings.confirmation', $booking->id)
            ->with('success', 'Your booking request has been submitted successfully!');
    }

    public function confirmation(Booking $booking): Response
    {
        $booking->load('safariPackage');
        
        return Inertia::render('Safaris/BookingConfirmation', [
            'booking' => $booking
        ]);
    }
}
