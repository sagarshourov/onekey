<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFormGroupsTable extends Migration {

	public function up()
	{
		Schema::create('form_groups', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('title', 225);
		});
	}

	public function down()
	{
		Schema::drop('form_groups');
	}
}