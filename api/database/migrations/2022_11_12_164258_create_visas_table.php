<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVisasTable extends Migration {

	public function up()
	{
		Schema::create('visas', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('code', 50);
			$table->date('interview_date')->nullable();
			$table->string('in_time', 50)->nullable();
			$table->string('type', 10)->nullable();
			$table->integer('university')->unsigned();
			$table->bigInteger('user_id')->unsigned();
			$table->integer('status')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('visas');
	}
}