<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'author' => 'Sarah Johnson',
                'country' => 'United States',
                'rating' => 5,
                'comment' => 'Our 7-day Serengeti safari exceeded all expectations! The guides were incredibly knowledgeable, and we witnessed the Great Migration up close. The luxury tented camp was beyond amazing. Elysora made our dream safari a reality!',
                'safari_taken' => '7-Day Great Migration Safari',
                'author_image' => 'testimonial-1',
                'is_approved' => true,
                'order' => 1,
            ],
            [
                'author' => 'James Mitchell',
                'country' => 'United Kingdom',
                'rating' => 5,
                'comment' => 'Absolutely phenomenal experience! From the moment we landed to our departure, everything was perfectly organized. We saw all of the Big Five and the sunset game drives were magical. Highly recommend Elysora for an authentic African safari.',
                'safari_taken' => '10-Day Tanzania Explorer',
                'author_image' => 'testimonial-2',
                'is_approved' => true,
                'order' => 2,
            ],
            [
                'author' => 'Emma van der Berg',
                'country' => 'Netherlands',
                'rating' => 5,
                'comment' => 'The Ngorongoro Crater was breathtaking! Our guide Peter was fantastic - his passion for wildlife and conservation was inspiring. The accommodations were luxurious yet eco-friendly. This trip changed my perspective on travel.',
                'safari_taken' => '5-Day Ngorongoro & Tarangire Safari',
                'author_image' => 'testimonial-3',
                'is_approved' => true,
                'order' => 3,
            ],
            [
                'author' => 'Michael Chen',
                'country' => 'Australia',
                'rating' => 5,
                'comment' => 'Best honeymoon ever! The private safari was intimate and romantic. Watching lions at sunrise, champagne sundowners, and stargazing from our tent - pure magic. Thank you Elysora for creating unforgettable memories!',
                'safari_taken' => 'Luxury Honeymoon Safari',
                'author_image' => 'testimonial-4',
                'is_approved' => true,
                'order' => 4,
            ],
            [
                'author' => 'Lisa Anderson',
                'country' => 'Canada',
                'rating' => 5,
                'comment' => 'Traveling with three kids, I was worried about logistics, but Elysora handled everything perfectly. The guides were patient and engaging with the children. We all learned so much about wildlife conservation. A truly educational family adventure!',
                'safari_taken' => 'Family Safari Adventure',
                'author_image' => 'testimonial-5',
                'is_approved' => true,
                'order' => 5,
            ],
            [
                'author' => 'Hans Schmidt',
                'country' => 'Germany',
                'rating' => 5,
                'comment' => 'As a photographer, this safari was a dream come true. The guides understood my need for perfect lighting and positioning. Captured incredible shots of leopards, elephants, and the migration. Professional service from start to finish.',
                'safari_taken' => 'Photography Safari Special',
                'author_image' => 'testimonial-6',
                'is_approved' => true,
                'order' => 6,
            ],
            [
                'author' => 'Maria Rodriguez',
                'country' => 'Spain',
                'rating' => 5,
                'comment' => 'The combination of safari and Zanzibar beach was perfect! After the excitement of game drives, relaxing on pristine beaches was heavenly. Excellent value for money and seamless coordination between locations.',
                'safari_taken' => 'Safari & Zanzibar Beach Combo',
                'author_image' => 'testimonial-7',
                'is_approved' => true,
                'order' => 7,
            ],
            [
                'author' => 'David Thompson',
                'country' => 'South Africa',
                'rating' => 5,
                'comment' => 'Even as someone who has been on many safaris, Tanzania with Elysora was exceptional. The attention to detail, quality of guides, and choice of locations were outstanding. The mobile camping experience was particularly authentic.',
                'safari_taken' => 'Classic Tanzania Safari',
                'author_image' => 'testimonial-8',
                'is_approved' => true,
                'order' => 8,
            ],
            [
                'author' => 'Sophie Laurent',
                'country' => 'France',
                'rating' => 5,
                'comment' => 'Climbing Kilimanjaro followed by a safari was the adventure of a lifetime! The team was supportive throughout the climb, and the safari was the perfect way to celebrate reaching the summit. Merci Elysora!',
                'safari_taken' => 'Kilimanjaro & Safari Package',
                'author_image' => 'testimonial-9',
                'is_approved' => true,
                'order' => 9,
            ],
            [
                'author' => 'Robert Williams',
                'country' => 'Ireland',
                'rating' => 5,
                'comment' => 'Solo traveler here - felt completely safe and well looked after. Joined a small group safari and made lifelong friends. The guides\' storytelling around the campfire was as memorable as the wildlife sightings. Couldn\'t recommend more highly!',
                'safari_taken' => 'Small Group Safari',
                'author_image' => 'testimonial-10',
                'is_approved' => true,
                'order' => 10,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
