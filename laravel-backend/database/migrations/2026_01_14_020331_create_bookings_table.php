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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('safari_package_id')->constrained()->onDelete('cascade');
            
            // Step 1: Travel Details
            $table->date('travel_date');
            $table->integer('number_of_travelers');
            $table->integer('number_of_children')->default(0);
            
            // Step 2: Accommodation
            $table->enum('accommodation_type', ['budget', 'standard', 'luxury'])->default('standard');
            
            // Step 3: Add-ons (stored as JSON array)
            $table->json('add_ons')->nullable();
            
            // Step 4: Contact Details
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('country')->nullable();
            $table->text('special_requests')->nullable();
            
            // Admin Management
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('pending');
            $table->text('admin_notes')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
