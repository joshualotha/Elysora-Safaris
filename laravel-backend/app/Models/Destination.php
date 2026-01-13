<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'image',
        'attractions',
    ];

    protected $casts = [
        'attractions' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
