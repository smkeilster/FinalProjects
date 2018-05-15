<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class New_events extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('new_events', function(Blueprint $table){
            $table->integer('eventID');
            $table->integer('cityID');
            $table->string('type');
            $table->integer('eventOrder');
            $table->longText('description');
            $table->longText('descriptionLink');
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
        Schema::drop('new_events');
    }
}
