<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class New_cities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('new_cities', function(Blueprint $table){
            $table->increments('cityID');
            $table->string('cityState');
            $table->string('anchorLink');
            $table->longText('imageURL');
            $table->string('Region');
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
        Schema::drop('new_cities');
    }
}
