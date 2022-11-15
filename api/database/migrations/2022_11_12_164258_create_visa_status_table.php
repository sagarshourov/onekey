<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateVisaStatusTable extends Migration {

	public function up()
	{
		Schema::create('visa_status', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->softDeletes();
			$table->string('title', 225);
		});
	}

	public function down()
	{
		Schema::drop('visa_status');
	}
}