<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateModelRelationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('model_relations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('source_field_id');
            $table->integer('target_field_id');
            $table->string('foreign_key', 100);
            $table->string('function_name',50);
            $table->string('type', 20);
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
        Schema::dropIfExists('model_relations');
    }
}
