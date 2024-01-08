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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstName')->nullable(false);
            $table->string('lastName')->nullable(false);
            $table->text('photoProfile')->nullable();
            $table->string('email')->unique();
            $table->string('password')->nullable(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('mobileNumber')->nullable();
            $table->date('dateOfBirth')->nullable();
            $table->string('maritalStatus')->nullable();
            $table->string('gender')->nullable();
            $table->string('nationality')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('zipCode')->nullable();
            $table->string('userName')->nullable(false);
            $table->string('employeeType')->nullable();
            $table->string('department')->nullable();
            $table->string('designation')->nullable();
            $table->string('workingDays')->nullable();
            $table->date('joiningDate')->nullable();
            $table->string('officeLocation')->nullable();
            $table->text('appointment')->nullable();
            $table->text('salarySlips')->nullable();
            $table->text('reliving')->nullable();
            $table->text('experience')->nullable();
            $table->string('whatsApp')->nullable();
            $table->string('instagram')->nullable();
            $table->string('status')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
