<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FAQ;

class FAQSeeder extends Seeder
{
    public function run(): void
    {
        $faqs = [
            // Planning & Booking
            [
                'category' => 'Planning & Booking',
                'question' => 'When is the best time to visit Tanzania for a safari?',
                'answer' => 'The best time depends on what you want to see. The dry season (June-October) offers excellent wildlife viewing as animals gather around water sources. The wet season (November-May) brings lush landscapes, fewer crowds, and the Great Migration calving season (January-February). Each season has its unique advantages.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Planning & Booking',
                'question' => 'How far in advance should I book my safari?',
                'answer' => 'We recommend booking 6-12 months in advance, especially for peak season (June-October) and luxury accommodations. However, we can often accommodate last-minute bookings depending on availability.',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Planning & Booking',
                'question' => 'What is included in the safari package price?',
                'answer' => 'Our packages typically include accommodation, meals, park fees, game drives, professional guide services, and transportation. Specific inclusions vary by package - check the "What\'s Included" section on each safari page for details.',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'category' => 'Planning & Booking',
                'question' => 'Can you customize a safari itinerary for us?',
                'answer' => 'Absolutely! We specialize in tailor-made safaris. Contact us with your preferences, budget, and travel dates, and we\'ll create a personalized itinerary just for you.',
                'order' => 4,
                'is_active' => true,
            ],

            // Travel Requirements
            [
                'category' => 'Travel Requirements',
                'question' => 'Do I need a visa to visit Tanzania?',
                'answer' => 'Most visitors need a visa. You can obtain a visa on arrival at major entry points or apply online in advance. US citizens pay $100, UK citizens pay $50. Check with your local Tanzanian embassy for specific requirements.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Travel Requirements',
                'question' => 'What vaccinations do I need?',
                'answer' => 'Yellow fever vaccination is required if arriving from endemic countries. We recommend vaccinations for Hepatitis A, Typhoid, and routine boosters. Malaria prophylaxis is advised. Consult your doctor 6-8 weeks before travel.',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Travel Requirements',
                'question' => 'Is travel insurance necessary?',
                'answer' => 'Yes, we strongly recommend comprehensive travel insurance covering medical emergencies, evacuation, trip cancellation, and lost luggage. Some activities may require specific coverage.',
                'order' => 3,
                'is_active' => true,
            ],

            // Safari Experience
            [
                'category' => 'Safari Experience',
                'question' => 'What wildlife can I expect to see?',
                'answer' => 'Tanzania is home to the Big Five (lion, leopard, elephant, buffalo, rhino), plus cheetahs, giraffes, zebras, wildebeest, hippos, and over 500 bird species. The Great Migration offers spectacular wildlife viewing from June to October.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Safari Experience',
                'question' => 'How close do we get to the animals?',
                'answer' => 'Our experienced guides position vehicles for optimal viewing while respecting wildlife and park regulations. You\'ll get close enough for amazing photos while maintaining safe distances. Telephoto lenses (200-400mm) are recommended.',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Safari Experience',
                'question' => 'What should I pack for a safari?',
                'answer' => 'Pack light, neutral-colored clothing (khaki, beige, olive), comfortable walking shoes, sun protection, insect repellent, binoculars, camera with extra batteries, and a light jacket for early mornings. We provide a detailed packing list upon booking.',
                'order' => 3,
                'is_active' => true,
            ],
            [
                'category' => 'Safari Experience',
                'question' => 'Are safaris suitable for children?',
                'answer' => 'Yes! We offer family-friendly safaris with age-appropriate activities. Most lodges accept children, though some have minimum age requirements (usually 6-12 years). Private vehicles and flexible schedules work best for families.',
                'order' => 4,
                'is_active' => true,
            ],

            // Accommodation & Comfort
            [
                'category' => 'Accommodation & Comfort',
                'question' => 'What types of accommodation are available?',
                'answer' => 'We offer luxury lodges, tented camps, mobile camps, and budget camping options. All accommodations are carefully selected for comfort, location, and authentic safari experience.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Accommodation & Comfort',
                'question' => 'Is WiFi available during the safari?',
                'answer' => 'Most lodges and camps offer WiFi in common areas, though connectivity can be limited in remote locations. We encourage disconnecting to fully immerse in the safari experience!',
                'order' => 2,
                'is_active' => true,
            ],
            [
                'category' => 'Accommodation & Comfort',
                'question' => 'What about dietary requirements?',
                'answer' => 'We accommodate all dietary needs including vegetarian, vegan, gluten-free, and religious requirements. Please inform us of any restrictions when booking.',
                'order' => 3,
                'is_active' => true,
            ],

            // Safety & Health
            [
                'category' => 'Safety & Health',
                'question' => 'Is it safe to go on safari?',
                'answer' => 'Yes, safaris are very safe when following guide instructions. Our experienced guides prioritize your safety, vehicles are well-maintained, and we follow all park regulations. Tanzania has a stable tourism industry with excellent safety records.',
                'order' => 1,
                'is_active' => true,
            ],
            [
                'category' => 'Safety & Health',
                'question' => 'What if I get sick during the safari?',
                'answer' => 'All our guides are first-aid trained. Lodges have medical kits, and we maintain contact with medical facilities. Comprehensive travel insurance with medical evacuation coverage is essential.',
                'order' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            FAQ::create($faq);
        }
    }
}
