<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDegreeTypeTable extends Migration {

	public function up()
	{
		Schema::create('degree_type', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('title', 225);
		});
	}

	public function down()
	{
		Schema::drop('degree_type');
	}
}