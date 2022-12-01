<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateSubStatusTextTable extends Migration {

	public function up()
	{
		Schema::create('sub_status_text', function(Blueprint $table) {
			$table->increments('id');
			$table->string('title', 225)->nullable();
			$table->integer('status_text')->unsigned()->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::drop('sub_status_text');
	}
}