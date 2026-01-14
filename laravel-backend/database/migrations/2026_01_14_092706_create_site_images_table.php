<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('site_images', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique()->comment('Unique identifier like home_welcome_hero');
            $table->string('page')->index()->comment('Page name like home, about, services_luxury');
            $table->string('section')->index()->comment('Section name like hero, welcome, features');
            $table->string('title')->comment('Admin-friendly title');
            $table->text('description')->nullable()->comment('Admin notes');
            $table->string('image_path')->comment('Path to uploaded image');
            $table->string('alt_text')->comment('SEO alt text');
            $table->boolean('is_active')->default(true)->index();
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_images');
    }
};
