<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AddOn;

class AddOnsSeeder extends Seeder
{
    public function run(): void
    {
        $addOns = [
            [
                'name' => 'Hot Air Balloon Safari',
                'description' => 'Experience the breathtaking Serengeti from above with a sunrise hot air balloon ride',
                'price' => 450.00,
                'is_active' => true,
            ],
            [
                'name' => 'Cultural Village Visit',
                'description' => 'Immerse yourself in local Maasai culture with a guided village tour',
                'price' => 75.00,
                'is_active' => true,
            ],
            [
                'name' => 'Extended Game Drive',
                'description' => 'Add extra hours to your game drive for more wildlife viewing opportunities',
                'price' => 150.00,
                'is_active' => true,
            ],
            [
                'name' => 'Photography Workshop',
                'description' => 'Professional wildlife photography guidance throughout your safari',
                'price' => 200.00,
                'is_active' => true,
            ],
        ];

        foreach ($addOns as $addOn) {
            AddOn::create($addOn);
        }
    }
}
