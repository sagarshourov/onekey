<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStatgesTable extends Migration {

	public function up()
	{
		Schema::create('statges', function(Blueprint $table) {
			$table->increments('id');
			$table->string('title', 225);
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('statges');
	}
}