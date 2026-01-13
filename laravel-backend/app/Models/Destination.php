<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'subtitle',
        'description',
        'image',
        'attractions',
        'stats',
        'highlights',
        'sections',
    ];

    protected $casts = [
        'attractions' => 'array',
        'stats' => 'array',
        'highlights' => 'array',
        'sections' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
