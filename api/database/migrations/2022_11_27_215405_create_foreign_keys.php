<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration
{

	public function up()
	{

		Schema::table('files', function (Blueprint $table) {
			$table->foreign('doc_type')->references('id')->on('files')
				->onDelete('set null')
				->onUpdate('set null');
		});
		Schema::table('files', function (Blueprint $table) {
			$table->foreign('user_id')->references('id')->on('Users')
				->onDelete('set null')
				->onUpdate('set null');
		});
	}

	public function down()
	{
		Schema::table('forms', function (Blueprint $table) {
			$table->dropForeign('forms_group_id_foreign');
		});
		Schema::table('events', function (Blueprint $table) {
			$table->dropForeign('events_user_id_foreign');
		});
		Schema::table('files', function (Blueprint $table) {
			$table->dropForeign('files_doc_type_foreign');
		});
		Schema::table('files', function (Blueprint $table) {
			$table->dropForeign('files_user_id_foreign');
		});
		Schema::table('degrees', function (Blueprint $table) {
			$table->dropForeign('degrees_type_foreign');
		});
		Schema::table('degrees', function (Blueprint $table) {
			$table->dropForeign('degrees_user_id_foreign');
		});
		Schema::table('tasks', function (Blueprint $table) {
			$table->dropForeign('tasks_stage_foreign');
		});
		Schema::table('tasks', function (Blueprint $table) {
			$table->dropForeign('tasks_user_id_foreign');
		});
		Schema::table('visas', function (Blueprint $table) {
			$table->dropForeign('visas_type_foreign');
		});
		Schema::table('visas', function (Blueprint $table) {
			$table->dropForeign('visas_university_foreign');
		});
		Schema::table('visas', function (Blueprint $table) {
			$table->dropForeign('visas_user_id_foreign');
		});
		Schema::table('visas', function (Blueprint $table) {
			$table->dropForeign('visas_status_foreign');
		});
		Schema::table('passports', function (Blueprint $table) {
			$table->dropForeign('passports_user_id_foreign');
		});
		Schema::table('form_data', function (Blueprint $table) {
			$table->dropForeign('form_data_form_id_foreign');
		});
		Schema::table('form_data', function (Blueprint $table) {
			$table->dropForeign('form_data_user_id_foreign');
		});
		Schema::table('student_info', function (Blueprint $table) {
			$table->dropForeign('student_info_university_foreign');
		});
		Schema::table('student_info', function (Blueprint $table) {
			$table->dropForeign('student_info_visa_status_foreign');
		});
		Schema::table('student_info', function (Blueprint $table) {
			$table->dropForeign('student_info_user_id_foreign');
		});
		Schema::table('student_info', function (Blueprint $table) {
			$table->dropForeign('student_info_visa_type_foreign');
		});
	}
}
