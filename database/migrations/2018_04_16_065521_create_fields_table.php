<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fields', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid', 100);
            $table->string('type', 100);
            $table->string('name', 100);
            $table->integer('length');
            $table->integer('decimal');
            $table->text('enum');
            $table->tinyInteger('attrib_increment');
            $table->tinyInteger('attrib_unsigned');
            $table->tinyInteger('attrib_primary');
            $table->tinyInteger('attrib_index');
            $table->tinyInteger('attrib_nullable');
            $table->tinyInteger('attrib_unique');
            $table->tinyInteger('attrib_fillable');
            $table->tinyInteger('attrib_guarded');
            $table->tinyInteger('attrib_visible');
            $table->tinyInteger('attrib_hidden');
            $table->tinyInteger('attrib_foreign');
            $table->integer('attrib_foreign_field_id');
            $table->string('attrib_foreign_on_delete');
            $table->string('attrib_foreign_on_update');
            $table->integer('table_id');
            $table->integer('order');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fields');
    }
}
