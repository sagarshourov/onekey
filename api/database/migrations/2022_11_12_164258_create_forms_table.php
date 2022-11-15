<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFormsTable extends Migration {

	public function up()
	{
		Schema::create('forms', function(Blueprint $table) {
			$table->increments('id');
			$table->string('title', 225);
			$table->integer('group_id')->unsigned();
			$table->timestamps();
			$table->longText('content')->nullable();
			$table->boolean('visibility');
			$table->boolean('allows_edit');
		});
	}

	public function down()
	{
		Schema::drop('forms');
	}
}