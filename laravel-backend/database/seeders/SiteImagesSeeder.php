<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SiteImage;

class SiteImagesSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $images = [
            // Navigation Dropdown Images
            [
                'key' => 'nav_services_featured',
                'page' => 'navigation',
                'section' => 'services_dropdown',
                'title' => 'Services Dropdown Featured Image',
                'description' => 'Featured image shown in the Services navigation dropdown menu',
                'image_path' => 'images/hero-serengeti.jpg',
                'alt_text' => 'Tanzania Safari Services',
                'is_active' => true,
                'display_order' => 1,
            ],
            [
                'key' => 'nav_planning_featured',
                'page' => 'navigation',
                'section' => 'planning_dropdown',
                'title' => 'Planning Dropdown Featured Image',
                'description' => 'Featured image shown in the Planning navigation dropdown menu',
                'image_path' => 'images/hero-ngorongoro.jpg',
                'alt_text' => 'Safari Planning Guide',
                'is_active' => true,
                'display_order' => 2,
            ],
            
            // Home Page
            [
                'key' => 'home_welcome_hero',
                'page' => 'home',
                'section' => 'welcome',
                'title' => 'Home Welcome Section Hero',
                'description' => 'Main hero image for the welcome section on homepage',
                'image_path' => 'Welcome-to-the-Wild.png',
                'alt_text' => 'Safari Experience',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // About Page
            [
                'key' => 'about_hero',
                'page' => 'about',
                'section' => 'hero',
                'title' => 'About Page Hero',
                'description' => 'Hero image for About Us page',
                'image_path' => 'Welcome-to-the-Wild.png',
                'alt_text' => 'About Elysora Safaris',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Contact Page
            [
                'key' => 'contact_hero',
                'page' => 'contact',
                'section' => 'hero',
                'title' => 'Contact Page Hero',
                'description' => 'Hero image for Contact page',
                'image_path' => 'Welcome-to-the-Wild.png',
                'alt_text' => 'Contact Us',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Conservation Page
            [
                'key' => 'conservation_hero',
                'page' => 'conservation',
                'section' => 'hero',
                'title' => 'Conservation Page Hero',
                'description' => 'Hero image for Conservation page',
                'image_path' => 'images/destination-serengeti.jpg',
                'alt_text' => 'Wildlife Conservation',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Gallery Page
            [
                'key' => 'gallery_hero',
                'page' => 'gallery',
                'section' => 'hero',
                'title' => 'Gallery Page Hero',
                'description' => 'Hero image for Gallery page',
                'image_path' => 'images/migration_photography.jpg',
                'alt_text' => 'Safari Photo Gallery',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Blog Index
            [
                'key' => 'blog_index_hero',
                'page' => 'blog',
                'section' => 'hero',
                'title' => 'Blog Index Hero',
                'description' => 'Hero image for Blog index page',
                'image_path' => 'images/blog-post-1.jpg',
                'alt_text' => 'Safari Blog',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Planning - Safari Guide
            [
                'key' => 'planning_safari_guide_hero',
                'page' => 'planning_safari_guide',
                'section' => 'hero',
                'title' => 'Safari Guide Hero',
                'description' => 'Hero image for Safari Planning Guide page',
                'image_path' => 'images/hero-serengeti.jpg',
                'alt_text' => 'Safari Planning Guide',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Services - Luxury Safari
            [
                'key' => 'services_luxury_hero',
                'page' => 'services_luxury',
                'section' => 'hero',
                'title' => 'Luxury Safari Hero',
                'description' => 'Hero image for Luxury Safari service page',
                'image_path' => 'images/luxury-safari-hero.jpg',
                'alt_text' => 'Luxury Safari Experience',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Services - Group Safari
            [
                'key' => 'services_group_hero',
                'page' => 'services_group',
                'section' => 'hero',
                'title' => 'Group Safari Hero',
                'description' => 'Hero image for Group Safari service page',
                'image_path' => 'images/group-safari-vehicle.png',
                'alt_text' => 'Group Safari Adventure',
                'is_active' => true,
                'display_order' => 2,
            ],
            
            // Services - Tailor Made Safari
            [
                'key' => 'services_tailor_made_hero',
                'page' => 'services_tailor_made',
                'section' => 'hero',
                'title' => 'Tailor Made Safari Hero',
                'description' => 'Hero image for Tailor-Made Safari service page',
                'image_path' => 'images/tailor-made-bush-dinner.png',
                'alt_text' => 'Tailor-Made Safari',
                'is_active' => true,
                'display_order' => 3,
            ],
            
            // Services - Cultural Tours
            [
                'key' => 'services_cultural_hero',
                'page' => 'services_cultural',
                'section' => 'hero',
                'title' => 'Cultural Tours Hero',
                'description' => 'Hero image for Cultural Tours service page',
                'image_path' => 'images/culture-maasai-portrait.png',
                'alt_text' => 'Cultural Tours',
                'is_active' => true,
                'display_order' => 4,
            ],
            
            // Services - Mountain Hiking
            [
                'key' => 'services_mountain_hero',
                'page' => 'services_mountain',
                'section' => 'hero',
                'title' => 'Mountain Hiking Hero',
                'description' => 'Hero image for Mountain Hiking service page',
                'image_path' => 'images/mountain-kilimanjaro-hiker.png',
                'alt_text' => 'Mountain Hiking',
                'is_active' => true,
                'display_order' => 5,
            ],
            
            // Services - Zanzibar Beach Safari
            [
                'key' => 'services_zanzibar_hero',
                'page' => 'services_zanzibar',
                'section' => 'hero',
                'title' => 'Zanzibar Beach Safari Hero',
                'description' => 'Hero image for Zanzibar Beach Safari service page',
                'image_path' => 'images/destination-zanzibar.jpg',
                'alt_text' => 'Zanzibar Beach Safari',
                'is_active' => true,
                'display_order' => 6,
            ],
            
            // Destinations Index Page
            [
                'key' => 'destinations_hero',
                'page' => 'destinations',
                'section' => 'hero',
                'title' => 'Destinations Index Hero',
                'description' => 'Hero image for Destinations index/listing page',
                'image_path' => 'images/destination-serengeti.jpg',
                'alt_text' => 'Tanzania Destinations',
                'is_active' => true,
                'display_order' => 1,
            ],
            
            // Safaris Index Page
            [
                'key' => 'safaris_hero',
                'page' => 'safaris',
                'section' => 'hero',
                'title' => 'Safaris Index Hero',
                'description' => 'Hero image for Safaris index/listing page',
                'image_path' => 'images/hero-serengeti.jpg',
                'alt_text' => 'Tanzania Safari Packages',
                'is_active' => true,
                'display_order' => 1,
            ],
        ];

        foreach ($images as $image) {
            SiteImage::create($image);
        }
    }
}
