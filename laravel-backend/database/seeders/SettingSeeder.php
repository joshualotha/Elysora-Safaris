<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // Contact Information
            ['key' => 'site_email', 'value' => 'info@elysora.com', 'type' => 'email', 'group' => 'contact'],
            ['key' => 'site_phone', 'value' => '+255 754 000 000', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'site_address', 'value' => 'Sokoine Road, Arusha, Tanzania', 'type' => 'textarea', 'group' => 'contact'],
            
            // Social Media
            ['key' => 'social_instagram', 'value' => 'https://instagram.com/elysorasafaris', 'type' => 'url', 'group' => 'social'],
            ['key' => 'social_facebook', 'value' => 'https://facebook.com/elysorasafaris', 'type' => 'url', 'group' => 'social'],
            ['key' => 'social_twitter', 'value' => 'https://twitter.com/elysorasafaris', 'type' => 'url', 'group' => 'social'],
            
            // Business Information
            ['key' => 'business_hours', 'value' => 'Monday - Friday: 8:00 AM - 6:00 PM EAT\nSaturday: 9:00 AM - 4:00 PM EAT\nSunday: Closed', 'type' => 'textarea', 'group' => 'business'],
            ['key' => 'company_description', 'value' => 'Crafting authentic, sustainable, and unforgettable safari experiences in the heart of Tanzania. We believe in travel that transforms.', 'type' => 'textarea', 'group' => 'business'],
            
            // Email Settings
            ['key' => 'admin_email', 'value' => 'admin@elysora.com', 'type' => 'email', 'group' => 'email'],
            ['key' => 'contact_form_recipient', 'value' => 'info@elysora.com', 'type' => 'email', 'group' => 'email'],
            
            // SEO Settings
            ['key' => 'seo_title', 'value' => 'Elysora Safaris - Authentic Tanzania Safari Experiences', 'type' => 'text', 'group' => 'seo'],
            ['key' => 'seo_description', 'value' => 'Experience the magic of Tanzania with Elysora Safaris. Tailor-made safaris, luxury accommodations, and unforgettable wildlife encounters in East Africa\'s most pristine wilderness.', 'type' => 'textarea', 'group' => 'seo'],
            ['key' => 'seo_keywords', 'value' => 'Tanzania safari, Serengeti tours, Ngorongoro Crater, luxury safari, wildlife safari, Zanzibar beach, Kilimanjaro trekking', 'type' => 'textarea', 'group' => 'seo'],
            
            // Analytics
            ['key' => 'google_analytics_id', 'value' => '', 'type' => 'text', 'group' => 'analytics'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}
