<?php

namespace Database\Seeders;

use App\Models\SafariPackage;
use Illuminate\Database\Seeder;

class SafariPackagesSeeder extends Seeder
{
    public function run(): void
    {
        $safaris = [
            [
                'slug' => 'classic-serengeti-ngorongoro',
                'name' => 'Classic Serengeti & Ngorongoro',
                'duration' => 5,
                'destinations' => ['Serengeti', 'Ngorongoro Crater'],
                'highlights' => ['Big Five Sighting', 'Great Migration', 'Crater View'],
                'price' => 2500,
                'image' => 'safari-card-1',
                'description' => 'Experience the best of Tanzania\'s northern circuit. Witness the endless plains of the Serengeti and descend into the magnificent Ngorongoro Crater.',
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival in Arusha', 'description' => 'Arrive at Kilimanjaro International Airport (JRO), transfer to your lodge in Arusha.'],
                    ['day' => 2, 'title' => 'To Serengeti National Park', 'description' => 'Drive to Serengeti, enjoying a game drive en route. Afternoon game drive in the heart of the park.'],
                    ['day' => 3, 'title' => 'Full Day in Serengeti', 'description' => 'Explore the vast plains of the Serengeti, tracking the Great Migration if in season.'],
                    ['day' => 4, 'title' => 'Ngorongoro Crater', 'description' => 'Drive to Ngorongoro, descend into the crater for a full day of game viewing.'],
                    ['day' => 5, 'title' => 'Departure', 'description' => 'Morning game drive in Ngorongoro or visit a Maasai village, then drive back to Arusha for your departure.'],
                ],
                'whats_included' => ['Accommodation', 'All meals', '4x4 Safari Vehicle', 'Professional Guide', 'Park Fees'],
                'whats_excluded' => ['International Flights', 'Visa', 'Tips', 'Personal Items'],
            ],
            [
                'slug' => 'tanzania-wildlife-explorer',
                'name' => 'Tanzania Wildlife Explorer',
                'duration' => 7,
                'destinations' => ['Tarangire', 'Lake Manyara', 'Serengeti', 'Ngorongoro'],
                'highlights' => ['Elephant Herds', 'Tree-climbing Lions', 'Diverse Landscapes'],
                'price' => 3500,
                'image' => 'safari-card-2',
                'description' => 'A comprehensive journey through Tanzania\'s most famous national parks, offering a wide variety of wildlife and landscapes.',
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival & Tarangire', 'description' => 'Arrive, meet your guide and drive to Tarangire National Park, famous for its large elephant herds and baobab trees.'],
                    ['day' => 2, 'title' => 'Tarangire Game Drive', 'description' => 'Full day exploring Tarangire, searching for elephants, lions, and other wildlife along the Tarangire River.'],
                    ['day' => 3, 'title' => 'Lake Manyara', 'description' => 'Drive to Lake Manyara National Park, known for its tree-climbing lions and flocks of flamingos.'],
                    ['day' => 4, 'title' => 'To the Serengeti', 'description' => 'Journey to the world-famous Serengeti National Park, with a game drive on the way.'],
                    ['day' => 5, 'title' => 'Serengeti Exploration', 'description' => 'A full day to discover the Serengeti\'s secrets, from its vast plains to its hidden corners.'],
                    ['day' => 6, 'title' => 'Ngorongoro Crater', 'description' => 'Travel to the Ngorongoro Conservation Area and descend into the breathtaking crater for a packed day of wildlife viewing.'],
                    ['day' => 7, 'title' => 'Return to Arusha', 'description' => 'Enjoy a final morning activity before driving back to Arusha for your onward journey.'],
                ],
                'whats_included' => ['Accommodation', 'All meals', '4x4 Safari Vehicle', 'Professional Guide', 'Park Fees', 'Crater Service'],
                'whats_excluded' => ['International Flights', 'Visa', 'Tips', 'Alcoholic Beverages'],
            ],
            [
                'slug' => 'ultimate-safari-zanzibar-beach',
                'name' => 'Ultimate Safari & Zanzibar Beach',
                'duration' => 10,
                'destinations' => ['Serengeti', 'Ngorongoro', 'Zanzibar'],
                'highlights' => ['Wildlife Adventure', 'Beach Relaxation', 'Cultural Experience'],
                'price' => 5000,
                'image' => 'safari-card-3',
                'description' => 'The perfect blend of adventure and relaxation. Witness incredible wildlife in the Serengeti and Ngorongoro before unwinding on the white sandy beaches of Zanzibar.',
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival in Arusha', 'description' => 'Arrive at Kilimanjaro International Airport (JRO), transfer to your lodge in Arusha.'],
                    ['day' => 2, 'title' => 'To Serengeti National Park', 'description' => 'Drive to Serengeti, enjoying a game drive en route. Afternoon game drive in the heart of the park.'],
                    ['day' => 3, 'title' => 'Full Day in Serengeti', 'description' => 'Explore the vast plains of the Serengeti.'],
                    ['day' => 4, 'title' => 'Ngorongoro Crater', 'description' => 'Drive to Ngorongoro, descend into the crater for a full day of game viewing.'],
                    ['day' => 5, 'title' => 'Flight to Zanzibar', 'description' => 'After a morning activity, transfer to Arusha Airport (ARK) for your flight to Zanzibar. Transfer to your beach resort.'],
                    ['day' => 6, 'title' => 'Zanzibar Beach', 'description' => 'Relax on the beach, swim in the turquoise waters, or enjoy water sports.'],
                    ['day' => 7, 'title' => 'Stone Town Tour', 'description' => 'Explore the historic alleyways of Stone Town, a UNESCO World Heritage site.'],
                    ['day' => 8, 'title' => 'Spice Farm & Jozani Forest', 'description' => 'Discover Zanzibar\'s "Spice Island" heritage and visit the Jozani Forest to see the rare Red Colobus monkeys.'],
                    ['day' => 9, 'title' => 'Leisure Day', 'description' => 'A final day to relax, shop for souvenirs, or take an optional tour.'],
                    ['day' => 10, 'title' => 'Departure', 'description' => 'Transfer to Abeid Amani Karume International Airport (ZNZ) for your departure.'],
                ],
                'whats_included' => ['All Accommodations', 'Meals as specified', 'Safari Vehicle & Guide', 'Park Fees', 'Domestic Flight (ARK-ZNZ)'],
                'whats_excluded' => ['International Flights', 'Visa', 'Tips', 'Optional Tours in Zanzibar'],
            ],
            [
                'slug' => 'budget-camping-adventure',
                'name' => 'Budget Camping Adventure',
                'duration' => 4,
                'destinations' => ['Tarangire', 'Ngorongoro Crater'],
                'highlights' => ['Affordable', 'Authentic Experience', 'Close to Nature'],
                'price' => 1500,
                'image' => 'safari-card-4',
                'description' => 'An adventurous and budget-friendly camping safari that brings you close to nature without breaking the bank.',
                'itinerary' => [
                    ['day' => 1, 'title' => 'Tarangire National Park', 'description' => 'Drive from Arusha to Tarangire. Full day game drive and overnight at a public campsite.'],
                    ['day' => 2, 'title' => 'To Ngorongoro', 'description' => 'Morning game drive in Tarangire, then drive to the Ngorongoro crater rim for overnight camping with stunning views.'],
                    ['day' => 3, 'title' => 'Ngorongoro Crater', 'description' => 'Full day game drive inside the Ngorongoro Crater. Overnight at a campsite.'],
                    ['day' => 4, 'title' => 'Return to Arusha', 'description' => 'Morning activities, then drive back to Arusha.'],
                ],
                'whats_included' => ['Camping Equipment', 'Cook', 'All meals', 'Safari Vehicle & Guide', 'Park Fees'],
                'whats_excluded' => ['Sleeping Bag', 'International Flights', 'Visa', 'Tips'],
            ],
            [
                'slug' => 'luxury-tanzania-experience',
                'name' => 'Luxury Tanzania Experience',
                'duration' => 8,
                'destinations' => ['Tarangire', 'Ngorongoro', 'Serengeti'],
                'highlights' => ['Luxury Lodges', 'Exclusive Experiences', 'Gourmet Dining'],
                'price' => 8000,
                'image' => 'safari-card-5',
                'description' => 'Indulge in the ultimate safari experience with stays at exclusive luxury lodges, personalized service, and unforgettable moments.',
                'itinerary' => [
                    ['day' => 1, 'title' => 'Arrival & Luxury Lodge', 'description' => 'Arrive at JRO, where you\'ll be greeted and transferred to a luxurious lodge in Arusha.'],
                    ['day' => 2, 'title' => 'Tarangire Treetops', 'description' => 'Drive to Tarangire and check into a unique treetop lodge. Enjoy an afternoon game drive.'],
                    ['day' => 3, 'title' => 'Explore Tarangire', 'description' => 'Full day in Tarangire with options for walking safaris and night game drives.'],
                    ['day' => 4, 'title' => 'Ngorongoro Crater Lodge', 'description' => 'Travel to the Ngorongoro Conservation Area and check into a lodge with breathtaking crater views.'],
                    ['day' => 5, 'title' => 'Crater Game Drive', 'description' => 'Private full-day game drive in the Ngorongoro Crater with a gourmet picnic lunch.'],
                    ['day' => 6, 'title' => 'Luxury Camp in Serengeti', 'description' => 'Fly from Manyara airstrip to a central Serengeti airstrip and transfer to a luxurious tented camp.'],
                    ['day' => 7, 'title' => 'Serengeti Balloon Safari', 'description' => 'Experience a magical hot air balloon safari at sunrise, followed by a champagne breakfast. Afternoon game drive.'],
                    ['day' => 8, 'title' => 'Departure', 'description' => 'Enjoy one last morning game drive before flying from the Serengeti back to JRO for your departure.'],
                ],
                'whats_included' => ['Luxury Accommodation', 'All meals and drinks', 'Domestic Flights', 'Balloon Safari', 'Private 4x4 & Guide', 'Park Fees'],
                'whats_excluded' => ['International Flights', 'Visa', 'Tips', 'Premium Liquors'],
            ],
        ];

        foreach ($safaris as $safari) {
            SafariPackage::create($safari);
        }
    }
}
