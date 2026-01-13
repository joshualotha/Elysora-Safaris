<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'author',
        'country',
        'rating',
        'comment',
        'safari_taken',
        'author_image',
        'is_approved',
        'order',
    ];

    protected $casts = [
        'is_approved' => 'boolean',
        'rating' => 'integer',
        'order' => 'integer',
    ];

    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order')->orderBy('created_at', 'desc');
    }
}
