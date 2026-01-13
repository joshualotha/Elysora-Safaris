<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
    ];

    /**
     * Get a setting value by key
     */
    public static function get($key, $default = null)
    {
        $setting = static::where('key', $key)->first();
        return $setting ? $setting->value : $default;
    }

    /**
     * Set a setting value
     */
    public static function set($key, $value, $type = 'text', $group = null)
    {
        return static::updateOrCreate(
            ['key' => $key],
            ['value' => $value, 'type' => $type, 'group' => $group]
        );
    }

    /**
     * Get all settings in a group
     */
    public static function getGroup($group)
    {
        return static::where('group', $group)->get()->pluck('value', 'key');
    }

    /**
     * Get all settings as key-value array
     */
    public static function getAllSettings()
    {
        return static::query()->get()->pluck('value', 'key')->toArray();
    }
}
