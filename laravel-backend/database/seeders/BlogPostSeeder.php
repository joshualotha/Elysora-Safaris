<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        $posts = [
            [
                'title' => 'Witnessing the Great Migration: A Photographer\'s Guide',
                'category' => 'Photography',
                'author' => 'Sarah Jenkins',
                'date' => '2025-08-15',
                'read_time' => 8,
                'image' => 'migration_photography', // Will need to generate this
                'excerpt' => 'Capturing the raw power of millions of wildebeest crossing the Mara River requires patience, timing, and the right gear. Here is how to prepare for the spectacle.',
                'content' => '
                    <p>The Great Migration is often called the "Greatest Show on Earth," and for good reason. Over two million wildebeest, zebras, and gazelles traverse the Serengeti-Mara ecosystem in an endless loop for survival.</p>
                    
                    <h3>The River Crossing</h3>
                    <p>The most dramatic moments happen at the Mara River. From July to October, herds gather at the banks, hesitant and nervous. The tension is palpable. As a photographer, you need a high shutter speed (1/2000s+) to freeze the splashing water and chaotic movement.</p>
                    
                    <h3>Gear Recommendations</h3>
                    <ul>
                        <li><strong>Lens:</strong> A 100-400mm or 70-200mm is versatile. Prime 400mm+ is great for close-ups but can be limiting when the action is close.</li>
                        <li><strong>Body:</strong> A camera with high burst rate (FPS) is essential.</li>
                        <li><strong>Dust Protection:</strong> The Serengeti is dusty. Bring a cover or simple pillowcase for your gear.</li>
                    </ul>
                    
                    <p>Remember, the story isn\'t just about the herds. It\'s about the predators lurking in the tall grass, the vultures circling above, and the crocodiles waiting in the water.</p>
                '
            ],
            [
                'title' => 'Beyond the Big Five: The Little Five of Tanzania',
                'category' => 'Wildlife',
                'author' => 'David Molyneux',
                'date' => '2025-09-02',
                'read_time' => 5,
                'image' => 'little_five', // Will need to generate this
                'excerpt' => 'Everyone knows the Lion and Elephant, but have you met the Elephant Shrew or the Ant Lion? Discover the smaller wonders of the bush.',
                'content' => '
                    <p>While the Big Five (Lion, Leopard, Elephant, Buffalo, Rhino) steal the spotlight, the "Little Five" are equally fascinating if you know where to look. They correspond to the names of the Big Five but in miniature form.</p>
                    
                    <h3>1. Elephant Shrew</h3>
                    <p>A tiny insectivore with a long nose that resembles an elephant\'s trunk. They are incredibly fast and shy.</p>
                    
                    <h3>2. Buffalo Weaver</h3>
                    <p>A noisy, social bird often found following herds of buffalo, feeding on the insects disturbed by their hooves.</p>
                    
                    <h3>3. Leopard Tortoise</h3>
                    <p>Named for the beautiful yellow and black markings on its shell. It’s the fourth largest tortoise species in the world.</p>
                    
                    <h3>4. Ant Lion</h3>
                    <p>A fierce predator in the insect world, digging conical pits in the sand to trap ants.</p>
                    
                    <h3>5. Rhinoceros Beetle</h3>
                    <p>One of the strongest creatures on earth relative to its size, with a horn that rivals the rhino\'s in proportion.</p>
                    
                    <p>Next time you are on a game drive, ask your guide to point out these tiny marvels!</p>
                '
            ],
            [
                'title' => 'Luxury in the Wild: Sleeping Under the Canvas',
                'category' => 'Accommodation',
                'author' => 'Elena Rossi',
                'date' => '2025-10-10',
                'read_time' => 6,
                'image' => 'luxury_tent', // Will need to generate this
                'excerpt' => 'There is something primal yet incredibly sophisticated about a luxury tented camp. Experience the sounds of the night while wrapped in 1000-thread count sheets.',
                'content' => '
                    <p>The concept of "glamping" originated in Africa. Early explorers didn\'t skimp on comfort, and neither should you. Modern luxury camps offer an immersive experience without sacrificing amenities.</p>
                    
                    <h3>What to Expect</h3>
                    <p>Imagine a spacious canvas suite with wooden floors, an en-suite bathroom with a hot shower (often open to the stars), and a private deck overlooking a waterhole.</p>
                    
                    <blockquote>
                    "The only thing separating you from the lions roaring in the distance is a layer of canvas. It makes you feel alive in a way no hotel room ever could."
                    </blockquote>
                    
                    <p>Many camps are semi-permanent or mobile, moving with the Migration to ensure you are always in the heart of the action. Yet, they serve three-course gourmet meals and fine wines in the middle of nowhere.</p>
                '
            ],
            [
                'title' => 'A Day in the Life of a Maasai Warrior',
                'category' => 'Culture',
                'author' => 'Joseph Ole Timan',
                'date' => '2025-11-20',
                'read_time' => 7,
                'image' => 'maasai_warrior', // Will need to generate this
                'excerpt' => 'From herding cattle at sunrise to the jumping dance at sunset. An authentic look into the traditions that have survived for centuries.',
                'content' => '
                    <p>To be a Maasai is to be a guardian of the plains. Our life revolves around our cattle, which we believe were a gift from Enkai (God). A man\'s wealth is measured by his cattle and children.</p>
                    
                    <h3>Morning Rituals</h3>
                    <p>The day begins before dawn. The women milk the cows while the warriors (Morans) prepare to take the herds out to graze. We walk for miles, armed only with a spear and a rungu (club) to protect against lions.</p>
                    
                    <h3>The Jumping Dance (Adumu)</h3>
                    <p>You may have seen photos of us jumping high into the air. This is the Adumu, a competitive dance performed by warriors to demonstrate strength and stamina to attract brides. It is not just a show; it is a rite of passage.</p>
                    
                    <p>We invite you to visit our Bomas, not as tourists, but as guests, to share stories and understand our connection to this land.</p>
                '
            ],
            [
                'title' => 'Sustainable Safaris: How Your Visit Helps',
                'category' => 'Conservation',
                'author' => 'Dr. Jane Goodall Inst.',
                'date' => '2025-12-05',
                'read_time' => 5,
                'image' => 'sustainable_safari', // Will need to generate this
                'excerpt' => 'Tourism is the lifeblood of conservation in Tanzania. Learn how your park fees contribute to anti-poaching units and community development.',
                'content' => '
                    <p>High-value, low-impact tourism is the model Tanzania has chosen. By charging premium fees for park entry, the government can fund extensive conservation efforts without overcrowding the parks.</p>
                    
                    <h3>Where the Money Goes</h3>
                    <ul>
                        <li><strong>Anti-Poaching:</strong> Funding rangers, vehicles, and surveillance technology to protect rhinos and elephants.</li>
                        <li><strong>Community Outreach:</strong> Building schools and clinics for villages bordering the parks, reducing human-wildlife conflict.</li>
                        <li><strong>Research:</strong> Supporting long-term studies on lion prides and ecosystem health.</li>
                    </ul>
                    
                    <p>By choosing eco-friendly lodges that use solar power and ban single-use plastics, you amplify this positive impact. Your footprint should be small, but your contribution significant.</p>
                '
            ],
             [
                'title' => 'Zanzibar: The Perfect Bush-to-Beach Ending',
                'category' => 'Travel Tips',
                'author' => 'Amelia Clarke',
                'date' => '2026-01-08',
                'read_time' => 4,
                'image' => 'zanzibar_beach', // Will need to generate this
                'excerpt' => 'After a week of dusty game drives, nothing compares to the turquoise waters of Zanzibar. Why Stone Town and Nungwi are essential stops.',
                'content' => '
                    <p>The classic "Bush and Beach" itinerary is a classic for a reason. The sensory overload of the safari—the dust, the early mornings, the adrenaline—is perfectly balanced by the slow, rhythmic pace of island life.</p>
                    
                    <h3>Stone Town</h3>
                    <p>Get lost in the winding alleys of this UNESCO World Heritage site. The smell of cloves and cinnamon hangs in the air. Visit the Night Market at Forodhani Gardens for fresh seafood skewers and Zanzibar Pizza.</p>
                    
                    <h3>The Northern Beaches</h3>
                    <p>Head to Nungwi or Kendwa for non-tidal beaches where you can swim all day. The sunsets here, with dhow boats silhouetted against a burning orange sky, are legendary.</p>
                '
            ]
        ];

        foreach ($posts as $post) {
            BlogPost::create(array_merge($post, [
                'slug' => Str::slug($post['title']),
            ]));
        }
    }
}
