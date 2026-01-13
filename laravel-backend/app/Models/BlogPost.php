<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'excerpt',
        'image',
        'author',
        'date',
        'read_time',
        'category',
        'content',
    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
