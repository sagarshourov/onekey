<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotificationsTable extends Migration {

	public function up()
	{
		Schema::create('notifications', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('title', 225);
			$table->longText('notification')->nullable();
			$table->boolean('is_read');
		});
	}

	public function down()
	{
		Schema::drop('notifications');
	}
}