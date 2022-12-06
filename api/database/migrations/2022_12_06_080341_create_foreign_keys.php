<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('Users', function(Blueprint $table) {
			$table->foreign('package')->references('id')->on('packages')
						->onDelete('set null')
						->onUpdate('set null');
		});
		
	}

	public function down()
	{
		Schema::table('Users', function(Blueprint $table) {
			$table->dropForeign('Users_package_foreign');
		});
		Schema::table('events', function(Blueprint $table) {
			$table->dropForeign('events_user_id_foreign');
		});
		Schema::table('notifications', function(Blueprint $table) {
			$table->dropForeign('notifications_user_id_foreign');
		});
		Schema::table('files', function(Blueprint $table) {
			$table->dropForeign('files_doc_type_foreign');
		});
		Schema::table('files', function(Blueprint $table) {
			$table->dropForeign('files_user_id_foreign');
		});
		Schema::table('degrees', function(Blueprint $table) {
			$table->dropForeign('degrees_type_foreign');
		});
		Schema::table('degrees', function(Blueprint $table) {
			$table->dropForeign('degrees_user_id_foreign');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->dropForeign('tasks_stage_foreign');
		});
		Schema::table('tasks', function(Blueprint $table) {
			$table->dropForeign('tasks_user_id_foreign');
		});
		Schema::table('visas', function(Blueprint $table) {
			$table->dropForeign('visas_type_foreign');
		});
		Schema::table('visas', function(Blueprint $table) {
			$table->dropForeign('visas_university_foreign');
		});
		Schema::table('visas', function(Blueprint $table) {
			$table->dropForeign('visas_user_id_foreign');
		});
		Schema::table('visas', function(Blueprint $table) {
			$table->dropForeign('visas_status_foreign');
		});
		Schema::table('passports', function(Blueprint $table) {
			$table->dropForeign('passports_user_id_foreign');
		});
		Schema::table('form_data', function(Blueprint $table) {
			$table->dropForeign('form_data_form_id_foreign');
		});
		Schema::table('form_data', function(Blueprint $table) {
			$table->dropForeign('form_data_user_id_foreign');
		});
		Schema::table('student_info', function(Blueprint $table) {
			$table->dropForeign('student_info_visa_status_foreign');
		});
		Schema::table('student_info', function(Blueprint $table) {
			$table->dropForeign('student_info_user_id_foreign');
		});
		Schema::table('sub_status_text', function(Blueprint $table) {
			$table->dropForeign('sub_status_text_status_text_foreign');
		});
		Schema::table('user_app_status', function(Blueprint $table) {
			$table->dropForeign('user_app_status_user_id_foreign');
		});
		Schema::table('user_app_status', function(Blueprint $table) {
			$table->dropForeign('user_app_status_status_text_foreign');
		});
		Schema::table('user_app_status', function(Blueprint $table) {
			$table->dropForeign('user_app_status_sub_status_text_foreign');
		});
		Schema::table('app_status_notes', function(Blueprint $table) {
			$table->dropForeign('app_status_notes_status_text_foreign');
		});
		Schema::table('app_status_notes', function(Blueprint $table) {
			$table->dropForeign('app_status_notes_user_id_foreign');
		});
		Schema::table('app_status_notes', function(Blueprint $table) {
			$table->dropForeign('app_status_notes_created_by_foreign');
		});
		Schema::table('admin_user', function(Blueprint $table) {
			$table->dropForeign('admin_user_user_id_foreign');
		});
		Schema::table('admin_user', function(Blueprint $table) {
			$table->dropForeign('admin_user_admin_id_foreign');
		});
	}
}