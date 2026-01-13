<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'author',
        'country',
        'author_image',
        'rating',
        'comment',
        'safari_taken',
    ];
}
