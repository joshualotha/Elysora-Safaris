<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HeroCarouselSlide;

class HeroCarouselSlidesSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $slides = [
            [
                'title' => 'Tanzania',
                'subtitle' => 'Experience an unparalleled journey through vast savannas, ancient cultures, and diverse ecosystems. From the snow-capped Kilimanjaro to the turquoise waters of Zanzibar, Tanzania offers a safari adventure that touches the soul and ignites the spirit of exploration.',
                'image_path' => 'images/hero-home-luxury.jpg',
                'display_order' => 1,
                'is_active' => true,
                'link_url' => '/destinations',
            ],
            [
                'title' => 'Serengeti',
                'subtitle' => 'Immerse yourself in the world\'s most famous wildlife sanctuary. Witness the thunderous spectacle of the Great Migration, where millions of wildebeest and zebras brave the plains in an ancient cycle of life, survival, and renewal across endless horizons.',
                'image_path' => 'images/hero-serengeti.jpg',
                'display_order' => 2,
                'is_active' => true,
                'link_url' => '/destinations/serengeti',
            ],
            [
                'title' => 'Ngorongoro',
                'subtitle' => 'Descend into the world\'s largest inactive volcanic caldera, a self-contained ecosystem teeming with wildlife. Encounter the Big Five in this breathtaking natural wonder, often called the "Garden of Eden", where nature thrives in a prehistoric setting.',
                'image_path' => 'images/hero-ngorongoro.jpg',
                'display_order' => 3,
                'is_active' => true,
                'link_url' => '/destinations/ngorongoro',
            ],
            [
                'title' => 'Kilimanjaro',
                'subtitle' => 'Challenge yourself to conquer the "Roof of Africa". Trek through lush rainforests, alpine deserts, and glacial peaks to reach the summit of the world\'s highest free-standing mountain, rewarded with breathtaking sunrises above the clouds.',
                'image_path' => 'images/destination-kilimanjaro.jpg',
                'display_order' => 4,
                'is_active' => true,
                'link_url' => '/destinations/kilimanjaro',
            ],
            [
                'title' => 'Zanzibar',
                'subtitle' => 'Escape to a tropical paradise where history meets relaxation. Wander through the ancient, spice-filled alleys of Stone Town, then unwind on pristine white-sand beaches bordering the crystal-clear azure waters of the Indian Ocean.',
                'image_path' => 'images/destination-zanzibar.jpg',
                'display_order' => 5,
                'is_active' => true,
                'link_url' => '/destinations/zanzibar',
            ],
            [
                'title' => 'Tarangire',
                'subtitle' => 'Discover a landscape dotted with ancient baobab trees and teeming with massive elephant herds. Tarangire offers a wilder, quieter safari experience, especially during the dry season when wildlife gathers in thousands along the lifeline of the Tarangire River.',
                'image_path' => 'images/hero-tarangire.jpg',
                'display_order' => 6,
                'is_active' => true,
                'link_url' => '/destinations/tarangire',
            ],
        ];

        foreach ($slides as $slide) {
            HeroCarouselSlide::create($slide);
        }
    }
}
