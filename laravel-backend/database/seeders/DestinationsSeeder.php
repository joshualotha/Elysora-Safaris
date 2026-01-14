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
                'stats' => [
                    'bestTime' => 'June-October',
                    'size' => '14,763 km²',
                    'climate' => 'Tropical savanna'
                ],
                'highlights' => [
                    ['title' => 'Great Migration', 'description' => 'Witness millions of wildebeest and zebra'],
                    ['title' => 'Big Five', 'description' => 'Home to all of Africa\'s iconic animals'],
                    ['title' => 'Predator Action', 'description' => 'Exceptional lion, leopard and cheetah viewing']
                ],
                'sections' => [
                    ['title' => 'Wildlife', 'content' => 'The Serengeti is renowned for housing the largest concentration of plains game in Africa. Home to over 1.5 million wildebeest, 200,000 zebra, and 300,000 gazelle, the park offers unparalleled wildlife viewing opportunities year-round.'],
                    ['title' => 'Landscape', 'content' => 'The Serengeti\'s endless plains stretch to the horizon, dotted with distinctive kopjes (rocky outcrops) that serve as vantage points for big cats. The diverse ecosystems include grasslands, woodlands, and riverine forests.']
                ],
            ],
            [
                'slug' => 'ngorongoro',
                'name' => 'Ngorongoro Crater',
                'description' => 'A self-contained ecosystem within a massive volcanic caldera, often called "The Garden of Eden" for its density of wildlife.',
                'image' => 'destination-ngorongoro',
                'attractions' => ['Rhino', 'Hippo', 'Flamingo', 'Hyena'],
                'stats' => [
                    'bestTime' => 'Year-round',
                    'size' => '264 km²',
                    'climate' => 'Temperate'
                ],
                'highlights' => [
                    ['title' => 'Crater Floor', 'description' => 'Densest concentration of wildlife in Africa'],
                    ['title' => 'Black Rhino', 'description' => 'Best place to see endangered black rhinos'],
                    ['title' => 'Maasai Culture', 'description' => 'Visit traditional Maasai villages']
                ],
                'sections' => [
                    ['title' => 'The Crater', 'content' => 'At 600 meters deep and 260 square kilometers wide, the Ngorongoro Crater is the world\'s largest intact volcanic caldera. This natural amphitheater provides a unique sanctuary where wildlife thrives in spectacular density.'],
                    ['title' => 'Conservation', 'content' => 'As a UNESCO World Heritage Site, Ngorongoro represents a groundbreaking conservation model where wildlife and Maasai pastoralists coexist harmoniously, maintaining both ecological and cultural heritage.']
                ],
            ],
            [
                'slug' => 'tarangire',
                'name' => 'Tarangire National Park',
                'description' => 'Famous for its huge elephant herds that gather along the Tarangire River and the iconic, ancient baobab trees that dot the landscape.',
                'image' => 'destination-tarangire',
                'attractions' => ['Elephant', 'Baobab', 'Giraffe', 'Wildebeest'],
                'stats' => [
                    'bestTime' => 'June-October',
                    'size' => '2,850 km²',
                    'climate' => 'Semi-arid'
                ],
                'highlights' => [
                    ['title' => 'Elephant Paradise', 'description' => 'Largest elephant population in Tanzania'],
                    ['title' => 'Baobab Trees', 'description' => 'Iconic ancient trees dot the landscape'],
                    ['title' => 'Bird Watching', 'description' => 'Over 550 bird species recorded']
                ],
                'sections' => [
                    ['title' => 'Elephants', 'content' => 'Tarangire is elephant heaven, with herds of up to 300 individuals gathering during the dry season. Watch families interact at the river, dust bathe, and engage in fascinating social behaviors.'],
                    ['title' => 'Scenery', 'content' => 'Ancient baobab trees, some over 2,000 years old, create a dramatic backdrop for game viewing. The Tarangire River provides a lifeline for wildlife during the dry season, creating spectacular concentrations.']
                ],
            ],
            [
                'slug' => 'manyara',
                'name' => 'Lake Manyara',
                'description' => 'Known for its tree-climbing lions, vast flocks of pink flamingos, and diverse scenery ranging from forest to soda lake.',
                'image' => 'destination-manyara',
                'attractions' => ['Tree-climbing Lions', 'Flamingo', 'Baboon', 'Buffalo'],
                'stats' => [
                    'bestTime' => 'July-October',
                    'size' => '330 km²',
                    'climate' => 'Tropical'
                ],
                'highlights' => [
                    ['title' => 'Tree-Climbing Lions', 'description' => 'Famous for lions lounging in acacia trees'],
                    ['title' => 'Flamingo Flocks', 'description' => 'Thousands of flamingos on the soda lake'],
                    ['title' => 'Diverse Habitats', 'description' => 'Forest, grassland, and wetland ecosystems']
                ],
                'sections' => [
                    ['title' => 'Unique Wildlife', 'content' => 'Lake Manyara is famous for its tree-climbing lions, a rare behavior where these big cats lounge on acacia branches. The park also hosts large buffalo herds, elephants, and abundant birdlife including flamingos and pelicans.'],
                    ['title' => 'The Lake', 'content' => 'The shallow alkaline lake attracts vast numbers of flamingos, creating a pink band along the shoreline. During the wet season, the lake can cover two-thirds of the park, transforming the landscape into a water wonderland.']
                ],
            ],
            [
                'slug' => 'zanzibar',
                'name' => 'Zanzibar Island',
                'description' => 'An archipelago with a rich Swahili history, spice-scented air, and stunning white-sand beaches bordering turquoise waters.',
                'image' => 'destination-zanzibar',
                'attractions' => ['Beaches', 'Stone Town', 'Spice Farms', 'Dolphins'],
                'stats' => [
                    'bestTime' => 'June-October',
                    'size' => '1,554 km²',
                    'climate' => 'Tropical coastal'
                ],
                'highlights' => [
                    ['title' => 'Stone Town', 'description' => 'UNESCO World Heritage historic center'],
                    ['title' => 'Beaches', 'description' => 'Pristine white sand and crystal waters'],
                    ['title' => 'Spice Tours', 'description' => 'Explore aromatic spice plantations']
                ],
                'sections' => [
                    ['title' => 'Culture & History', 'content' => 'Stone Town\'s winding alleys tell stories of sultans, traders, and explorers. This UNESCO site blends Swahili, Arab, Persian, Indian, and European influences into a unique cultural tapestry. Visit the Old Fort, House of Wonders, and historic slave market.'],
                    ['title' => 'Beach Life', 'content' => 'Zanzibar\'s powder-white beaches and turquoise waters offer the perfect safari extension. Explore coral reefs, swim with dolphins, island hop to Mnemba Atoll, or simply relax in a beachfront villa. The east coast offers consistent ocean breezes and stunning sunrises.']
                ],
            ],
            [
                'slug' => 'kilimanjaro',
                'name' => 'Mount Kilimanjaro',
                'description' => 'Africa\'s highest peak and the world\'s tallest free-standing mountain, offering a challenging and rewarding climb through multiple ecosystems.',
                'image' => 'destination-kilimanjaro',
                'attractions' => ['Climbing', 'Views', 'Glaciers', 'Alpine Desert'],
                'stats' => [
                    'bestTime' => 'January-March, June-October',
                    'size' => '5,895 meters elevation',
                    'climate' => 'Multiple zones'
                ],
                'highlights' => [
                    ['title' => 'Summit Success', 'description' => 'Reach Uhuru Peak at 5,895m'],
                    ['title' => 'Five Climate Zones', 'description' => 'Journey from rainforest to arctic'],
                    ['title' => 'No Technical Climbing', 'description' => 'Accessible to fit trekkers']
                ],
                'sections' => [
                    ['title' => 'The Climb', 'content' => 'Kilimanjaro offers multiple routes to the summit, each with unique scenery and challenges. The Machame and Lemosho routes are most popular, taking 6-8 days and offering better acclimatization. You\'ll climb through rainforest, moorland, alpine desert, and finally arctic conditions.'],
                    ['title' => 'Routes & Preparation', 'content' => 'Choose from seven established routes, each varying in difficulty and scenery. The Marangu (Coca-Cola) route offers hut accommodation while others use tents. Proper acclimatization is crucial - success rates increase significantly with longer itineraries. Physical fitness and mental determination are your best preparation.']
                ],
            ],
        ];

        foreach ($destinations as $destination) {
            Destination::create($destination);
        }
    }
}
