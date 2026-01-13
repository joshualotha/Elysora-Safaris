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
        'itinerary',
        'whats_included',
        'whats_excluded',
    ];

    protected $casts = [
        'destinations' => 'array',
        'highlights' => 'array',
        'itinerary' => 'array',
        'whats_included' => 'array',
        'whats_excluded' => 'array',
        'price' => 'decimal:2',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
