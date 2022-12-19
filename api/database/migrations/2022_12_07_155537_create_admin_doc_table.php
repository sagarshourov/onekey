<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdminDocTable extends Migration {

	public function up()
	{
		Schema::create('admin_doc', function(Blueprint $table) {
			$table->increments('id');
			$table->string('title', 225)->nullable();
			$table->string('file_path', 225)->nullable();
			$table->bigInteger('admin_id')->unsigned()->nullable();
			$table->softDeletes();
			$table->timestamps();
			$table->integer('doc_type')->unsigned()->nullable();
			$table->bigInteger('user_id')->unsigned()->nullable();
		});
	}

	public function down()
	{
		Schema::drop('admin_doc');
	}
}