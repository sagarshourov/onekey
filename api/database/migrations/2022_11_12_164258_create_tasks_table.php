<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateTasksTable extends Migration {

	public function up()
	{
		Schema::create('tasks', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->integer('statge')->unsigned();
			$table->bigInteger('user_id')->unsigned();
			$table->text('notes');
			$table->boolean('is_done');
		});
	}

	public function down()
	{
		Schema::drop('tasks');
	}
}