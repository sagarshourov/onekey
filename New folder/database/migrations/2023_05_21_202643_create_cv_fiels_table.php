<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCvFielsTable extends Migration {

	public function up()
	{
		Schema::create('cv_fiels', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->integer('form_id')->nullable();
			$table->bigInteger('user_id')->nullable();
			$table->string('file_path', 225)->nullable();
			$table->string('file_name', 225)->nullable();
		});
	}

	public function down()
	{
		Schema::drop('cv_fiels');
	}
}