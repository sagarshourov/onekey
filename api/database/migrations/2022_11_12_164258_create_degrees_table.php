<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDegreesTable extends Migration {

	public function up()
	{
		Schema::create('degrees', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->integer('type')->unsigned();
			$table->string('institute', 225)->nullable();
			$table->string('city', 225)->nullable();
			$table->bigInteger('user_id')->unsigned();
			$table->string('start', 50);
			$table->string('end', 50);
			$table->string('major', 20)->nullable();
			$table->string('gpa', 20)->nullable();
			$table->string('cgpa', 20)->nullable();
		});
	}

	public function down()
	{
		Schema::drop('degrees');
	}
}