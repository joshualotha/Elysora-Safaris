<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationsSeeder extends Seeder
{
    public function run(): void
    {
        $destinations = [
            [
                'slug' => 'serengeti',
                'name' => 'Serengeti National Park',
                'description' => 'Home to the Great Migration, the Serengeti\'s vast plains teem with wildlife, offering arguably the most quintessential African safari experience.',
                'image' => 'destination-serengeti',
                'attractions' => ['Lion', 'Leopard', 'Elephant', 'Zebra'],
            ],
            [
                'slug' => 'ngorongoro',
                'name' => 'Ngorongoro Crater',
                'description' => 'A self-contained ecosystem within a massive volcanic caldera, often called "The Garden of Eden" for its density of wildlife.',
                'image' => 'destination-ngorongoro',
                'attractions' => ['Rhino', 'Hippo', 'Flamingo', 'Hyena'],
            ],
            [
                'slug' => 'tarangire',
                'name' => 'Tarangire National Park',
                'description' => 'Famous for its huge elephant herds that gather along the Tarangire River and the iconic, ancient baobab trees that dot the landscape.',
                'image' => 'destination-tarangire',
                'attractions' => ['Elephant', 'Baobab', 'Giraffe', 'Wildebeest'],
            ],
            [
                'slug' => 'manyara',
                'name' => 'Lake Manyara',
                'description' => 'Known for its tree-climbing lions, vast flocks of pink flamingos, and diverse scenery ranging from forest to soda lake.',
                'image' => 'destination-manyara',
                'attractions' => ['Tree-climbing Lions', 'Flamingo', 'Baboon', 'Buffalo'],
            ],
            [
                'slug' => 'zanzibar',
                'name' => 'Zanzibar Island',
                'description' => 'An archipelago with a rich Swahili history, spice-scented air, and stunning white-sand beaches bordering turquoise waters.',
                'image' => 'destination-zanzibar',
                'attractions' => ['Beaches', 'Stone Town', 'Spice Farms', 'Dolphins'],
            ],
            [
                'slug' => 'kilimanjaro',
                'name' => 'Mount Kilimanjaro',
                'description' => 'Africa\'s highest peak and the world\'s tallest free-standing mountain, offering a challenging and rewarding climb through multiple ecosystems.',
                'image' => 'destination-kilimanjaro',
                'attractions' => ['Climbing', 'Views', 'Glaciers', 'Alpine Desert'],
            ],
        ];

        foreach ($destinations as $destination) {
            Destination::create($destination);
        }
    }
}
