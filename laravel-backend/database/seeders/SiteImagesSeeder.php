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
        ];

        foreach ($images as $image) {
            SiteImage::create($image);
        }
    }
}
