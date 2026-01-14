<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroCarouselSlide extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'image_path',
        'display_order',
        'is_active',
        'link_url',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'display_order' => 'integer',
    ];

    /**
     * Get the full image URL
     */
    public function getImageUrl(): string
    {
        if (str_starts_with($this->image_path, 'http')) {
            return $this->image_path;
        }
        
        return asset('storage/' . $this->image_path);
    }

    /**
     * Scope to get active slides ordered by display_order
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('display_order');
    }
}
