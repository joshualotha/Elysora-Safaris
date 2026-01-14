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
        Schema::create('hero_carousel_slides', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Slide title like Serengeti, Tanzania');
            $table->text('subtitle')->comment('Slide description/tagline');
            $table->string('image_path')->comment('Path to uploaded image');
            $table->integer('display_order')->default(0)->index();
            $table->boolean('is_active')->default(true)->index();
            $table->string('link_url')->nullable()->comment('Optional link when slide clicked');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hero_carousel_slides');
    }
};
