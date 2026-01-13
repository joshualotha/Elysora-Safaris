<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('safari_packages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->integer('duration');
            $table->json('destinations');
            $table->json('highlights');
            $table->decimal('price', 10, 2);
            $table->string('image');
            $table->text('description');
            $table->json('itinerary');
            $table->json('whats_included');
            $table->json('whats_excluded');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('safari_packages');
    }
};
