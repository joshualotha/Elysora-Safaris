<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SafariPackage extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'duration',
        'destinations',
        'highlights',
        'price',
        'image',
        'description',
        'category',
        'itinerary',
        'whats_included',
        'whats_excluded',
        'is_featured',
    ];

    protected $casts = [
        'destinations' => 'array',
        'highlights' => 'array',
        'itinerary' => 'array',
        'whats_included' => 'array',
        'whats_excluded' => 'array',
        'price' => 'decimal:2',
        'is_featured' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
