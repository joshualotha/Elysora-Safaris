<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'safari_package_id',
        'travel_date',
        'number_of_travelers',
        'number_of_children',
        'accommodation_type',
        'add_ons',
        'name',
        'email',
        'phone',
        'country',
        'special_requests',
        'status',
        'admin_notes',
    ];

    protected $casts = [
        'travel_date' => 'date',
        'add_ons' => 'array',
    ];

    public function safariPackage(): BelongsTo
    {
        return $this->belongsTo(SafariPackage::class);
    }
}
