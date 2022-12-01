<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAppStatusNotesTable extends Migration {

	public function up()
	{
		Schema::create('app_status_notes', function(Blueprint $table) {
			$table->increments('id');
			$table->longText('message')->nullable();
			$table->integer('status_text')->unsigned()->nullable();
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->bigInteger('created_by')->unsigned()->nullable();
			$table->boolean('is_read');
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::drop('app_status_notes');
	}
}