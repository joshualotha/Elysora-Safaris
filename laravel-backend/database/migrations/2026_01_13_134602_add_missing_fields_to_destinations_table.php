<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->string('subtitle')->nullable()->after('name');
            $table->json('stats')->nullable()->after('description');
            $table->json('highlights')->nullable()->after('stats');
            $table->json('sections')->nullable()->after('highlights');
        });
    }

    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropColumn(['subtitle', 'stats', 'highlights', 'sections']);
        });
    }
};
