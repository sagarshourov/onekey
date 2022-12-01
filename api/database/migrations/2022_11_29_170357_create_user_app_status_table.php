<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateUserAppStatusTable extends Migration {

	public function up()
	{
		Schema::create('user_app_status', function(Blueprint $table) {
			$table->increments('id');
			$table->enum('sub', array('0', '1'));
			$table->enum('main', array('0', '1'));
			$table->bigInteger('user_id')->unsigned();
			$table->integer('status_text')->unsigned()->nullable();
			$table->integer('sub_status_text')->unsigned()->nullable();
			$table->timestamps();
		});
	}

	public function down()
	{
		Schema::drop('user_app_status');
	}
}