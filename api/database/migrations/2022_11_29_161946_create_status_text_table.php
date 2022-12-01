<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStatusTextTable extends Migration {

	public function up()
	{
		Schema::create('status_text', function(Blueprint $table) {
			$table->string('title', 225)->nullable();
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::drop('status_text');
	}
}