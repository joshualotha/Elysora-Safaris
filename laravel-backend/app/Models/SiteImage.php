<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteImage extends Model
{
    protected $fillable = [
        'key',
        'page',
        'section',
        'title',
        'description',
        'image_path',
        'alt_text',
        'is_active',
        'display_order',
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
     * Scope to get active images
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to get images by page
     */
    public function scopeForPage($query, string $page)
    {
        return $query->where('page', $page);
    }

    /**
     * Scope to get images by section
     */
    public function scopeForSection($query, string $section)
    {
        return $query->where('section', $section);
    }

    /**
     * Get image by unique key
     */
    public static function getByKey(string $key): ?self
    {
        return static::where('key', $key)->first();
    }
}
