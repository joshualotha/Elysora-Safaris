<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SafariPackage;

class SafariCategorySeeder extends Seeder
{
    public function run(): void
    {
        $safaris = [
            // Group Safari Packages
            [
                'name' => 'Serengeti Group Safari',
                'slug' => 'serengeti-group-safari',
                'description' => 'Join fellow travelers on this amazing 5-day group safari through the Serengeti. Experience the Great Migration and witness incredible wildlife with scheduled departures throughout the year.',
                'category' => 'group-safari',
                'price' => 1800.00,
                'duration' => 5,
                'image' => 'safari-card-1',
                'destinations' => ['Serengeti', 'Ngorongoro'],
                'highlights' => ['Great Migration', 'Big Five', 'Group Experience', 'Budget-Friendly'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival & Arusha', 'description' => 'Meet your group and briefing'],
                    ['day' => 2, 'title' => 'Serengeti National Park', 'description' => 'Full day game drive'],
                    ['day' => 3, 'title' => 'Serengeti Exploration', 'description' => 'Morning and afternoon drives'],
                    ['day' => 4, 'title' => 'Ngorongoro Crater', 'description' => 'Crater tour and wildlife viewing'],
                    ['day' => 5, 'title' => 'Departure', 'description' => 'Return to Arusha'],
                ],
                'whats_included' => ['Accommodation', 'All meals', 'Park fees', 'Professional guide', 'Group transport'],
                'whats_excluded' => ['International flights', 'Visa fees', 'Tips', 'Personal expenses'],
            ],
            [
                'name' => 'Northern Circuit Group Tour',
                'slug' => 'northern-circuit-group-tour',
                'description' => 'Explore Tanzania\'s highlights with a group of adventurers on this comprehensive 7-day tour covering all major northern parks.',
                'category' => 'group-safari',
                'price' => 2500.00,
                'duration' => 7,
                'image' => 'safari-card-2',
                'destinations' => ['Tarangire', 'Serengeti', 'Ngorongoro', 'Lake Manyara'],
                'highlights' => ['All Northern Parks', 'Diverse Wildlife', 'Cultural Visit', 'Shared Experience'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arusha to Tarangire', 'description' => 'Elephant paradise'],
                    ['day' => 2, 'title' => 'Serengeti', 'description' => 'Journey to endless plains'],
                    ['day' => 3, 'title' => 'Central Serengeti', 'description' => 'Full day exploration'],
                    ['day' => 4, 'title' => 'Serengeti to Ngorongoro', 'description' => 'Scenic drive'],
                    ['day' => 5, 'title' => 'Ngorongoro Crater', 'description' => 'Crater exploration'],
                    ['day' => 6, 'title' => 'Lake Manyara', 'description' => 'Tree-climbing lions'],
                    ['day' => 7, 'title' => 'Return to Arusha', 'description' => 'Departure day'],
                ],
                'whats_included' => ['Camping/Budget lodges', 'All meals', 'Park fees', 'Guide', 'Transport'],
                'whats_excluded' => ['Flights', 'Visa', 'Tips', 'Drinks', 'Personal items'],
            ],

            // Tailor-Made Safari Packages
            [
                'name' => 'Custom Tanzania Explorer',
                'slug' => 'custom-tanzania-explorer',
                'description' => 'Design your perfect Tanzania adventure with our tailor-made safari service. Choose your destinations, accommodation level, and activities to create your dream safari.',
                'category' => 'tailor-made-safari',
                'price' => 3000.00,
                'duration' => 8,
                'image' => 'safari-card-3',
                'destinations' => ['Flexible - Your Choice'],
                'highlights' => ['Fully Customizable', 'Private Guide', 'Flexible Itinerary', 'Luxury Options'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Customized Start', 'description' => 'Your chosen beginning'],
                    ['day' => 2, 'title' => 'Your Destination', 'description' => 'Tailored activities'],
                ],
                'whats_included' => ['Private vehicle', 'Personal guide', 'Flexible accommodation', 'Custom activities'],
                'whats_excluded' => ['Flights', 'Visa', 'Optional extras'],
            ],
            [
                'name' => 'Private Luxury Safari',
                'slug' => 'private-luxury-safari',
                'description' => 'Exclusive 10-day private safari tailored to your preferences. Travel in luxury with your own guide and vehicle, staying at premium lodges.',
                'category' => 'tailor-made-safari',
                'price' => 5500.00,
                'duration' => 10,
                'image' => 'safari-card-4',
                'destinations' => ['Serengeti', 'Ngorongoro', 'Zanzibar'],
                'highlights' => ['Luxury Lodges', 'Private Guide', 'Exclusive Experience', 'Beach Extension'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'VIP Arrival', 'description' => 'Luxury transfer'],
                    ['day' => 2, 'title' => 'Serengeti Luxury', 'description' => 'Premium game viewing'],
                ],
                'whats_included' => ['Luxury accommodation', 'Private vehicle', 'Premium meals', 'All activities', 'Beach resort'],
                'whats_excluded' => ['International flights', 'Premium drinks', 'Spa treatments'],
            ],

            // Classic Safari Packages
            [
                'name' => 'Classic Serengeti & Ngorongoro',
                'slug' => 'classic-serengeti-ngorongoro',
                'description' => 'Experience Tanzania\'s iconic wildlife destinations on this classic 6-day safari. Perfect for first-time visitors and wildlife enthusiasts.',
                'category' => 'classic-safari',
                'price' => 2200.00,
                'duration' => 6,
                'image' => 'safari-card-1',
                'destinations' => ['Serengeti', 'Ngorongoro'],
                'highlights' => ['Big Five', 'Great Migration', 'Ngorongoro Crater', 'Classic Experience'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival', 'description' => 'Welcome to Tanzania'],
                    ['day' => 2, 'title' => 'Serengeti', 'description' => 'Enter the endless plains'],
                ],
                'whats_included' => ['Standard lodges', 'All meals', 'Park fees', 'Guide', 'Transport'],
                'whats_excluded' => ['Flights', 'Visa', 'Tips', 'Drinks'],
            ],
            [
                'name' => 'Kilimanjaro Trekking Adventure',
                'slug' => 'kilimanjaro-trekking-adventure',
                'description' => 'Conquer Africa\'s highest peak on this challenging 7-day Kilimanjaro trek via the Machame Route. Reach the Roof of Africa!',
                'category' => 'classic-safari',
                'price' => 2800.00,
                'duration' => 7,
                'image' => 'mountain-image',
                'destinations' => ['Kilimanjaro'],
                'highlights' => ['Summit Uhuru Peak', 'Machame Route', 'Experienced Guides', 'All Equipment Included'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Machame Gate to Camp', 'description' => 'Begin ascent'],
                    ['day' => 2, 'title' => 'Shira Camp', 'description' => 'Moorland zone'],
                ],
                'whats_included' => ['Camping equipment', 'All meals', 'Park fees', 'Guides & porters', 'Rescue fees'],
                'whats_excluded' => ['Flights', 'Tips for crew', 'Sleeping bag', 'Personal gear'],
            ],
            [
                'name' => 'Zanzibar Beach Escape',
                'slug' => 'zanzibar-beach-escape',
                'description' => 'Relax on pristine beaches after your safari. 5 days of paradise on Zanzibar\'s stunning coastline with optional water activities.',
                'category' => 'classic-safari',
                'price' => 1500.00,
                'duration' => 5,
                'image' => 'zanzibar-beach',
                'destinations' => ['Zanzibar'],
                'highlights' => ['White Sand Beaches', 'Snorkeling', 'Stone Town Tour', 'Spice Tour'],
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival & Beach', 'description' => 'Settle in to paradise'],
                    ['day' => 2, 'title' => 'Beach Day', 'description' => 'Relax and unwind'],
                ],
                'whats_included' => ['Beach resort', 'Breakfast', 'Airport transfers', 'Stone Town tour'],
                'whats_excluded' => ['Flights', 'Lunch & dinner', 'Water activities', 'Tips'],
            ],
        ];

        foreach ($safaris as $safari) {
            SafariPackage::updateOrCreate(
                ['slug' => $safari['slug']],
                $safari
            );
        }
    }
}
