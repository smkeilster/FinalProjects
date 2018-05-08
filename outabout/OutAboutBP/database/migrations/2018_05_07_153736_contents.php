<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Contents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function(Blueprint $table){
            $table->increments('id');
            $table->string('sectionTitle');
            $table->string('regionId');
            $table->string('anchorLink');
            $table->string('breakfast');
            $table->string('breakfastLink');
            $table->string('morning');
            $table->string('morningLink');
            $table->string('lunch');
            $table->string('lunchLink');
            $table->string('afternoon');
            $table->string('afternoonLink');
            $table->string('drinks');
            $table->string('drinksLink');
            $table->string('dinner');
            $table->string('dinnerLink');
            $table->longText('photoURL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('contents');
    }
}
