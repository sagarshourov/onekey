<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentInfoTable extends Migration {

	public function up()
	{
		Schema::create('student_info', function(Blueprint $table) {
			$table->increments('id');
			$table->string('code');
			$table->date('interview_date');
			$table->integer('university')->unsigned()->nullable();
			$table->integer('visa_status')->unsigned()->nullable();
			$table->bigInteger('user_id')->unsigned()->nullable();
			$table->integer('visa_type')->unsigned()->nullable();
			$table->string('interview_time', 100)->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}

	public function down()
	{
		Schema::drop('student_info');
	}
}