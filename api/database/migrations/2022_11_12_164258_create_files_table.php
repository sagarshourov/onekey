<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFilesTable extends Migration {

	public function up()
	{
		Schema::create('files', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('file_name', 225)->nullable();
			$table->integer('doc_type')->unsigned();
			$table->bigInteger('user_id')->unsigned()->nullable();
		});
	}

	public function down()
	{
		Schema::drop('files');
	}
}