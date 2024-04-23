<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ResumeController;
use App\Http\Controllers\Admin\FormController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('forgot', 'App\Http\Controllers\AuthController@forgot');



Route::post('register', 'App\Http\Controllers\AuthController@register');
Route::get('countries', 'App\Http\Controllers\UserController@countries');




Route::get('universities', 'App\Http\Controllers\Admin\UserController@universities');
Route::get('visa_types', 'App\Http\Controllers\Admin\UserController@visa_types');

Route::post('student_info', 'App\Http\Controllers\Admin\UserController@student_info');

Route::post('register_api', 'App\Http\Controllers\AuthController@register_api');
// Route::get('get_form', 'App\Http\Controllers\Admin\UserController@get_form');

// Route::post('save_form', 'App\Http\Controllers\Admin\UserController@save_form');
// Route::get('forms', 'App\Http\Controllers\Admin\FormController@getallforms');


Route::post('forgot_password', 'App\Http\Controllers\AuthController@forgot_password');

Route::get('/pdf/{formId}', [FormController::class, 'createPDF']);

//Route::get('has/{pass}', 'App\Http\Controllers\UserController@has_pass');

//Route::post('file_upload', 'App\Http\Controllers\FileController@file_upload');





//Route::resource('resume_upload', ResumeController::class);


Route::get('resume_upload','App\Http\Controllers\ResumeController@index');

Route::post('resume_upload','App\Http\Controllers\ResumeController@store');
Route::delete('resume_upload','App\Http\Controllers\ResumeController@destroy');

Route::group(["prefix" => "/", 'middleware' => 'auth:api', "name" => "user."], function () {


    Route::get('get_form', 'App\Http\Controllers\Admin\UserController@get_form');

    Route::post('save_form', 'App\Http\Controllers\Admin\UserController@save_form');
    Route::get('forms', 'App\Http\Controllers\Admin\FormController@getallforms');



    Route::post('file_upload', 'App\Http\Controllers\FileController@file_upload');
    Route::get('events/{user_id?}', 'App\Http\Controllers\EventsController@all_events');
    Route::post('delete_file', 'App\Http\Controllers\FileController@delete_file');
    Route::post('dwonload', 'App\Http\Controllers\FileController@dwonload');


    Route::get('userfiles', 'App\Http\Controllers\UserController@userfiles');

    Route::get('userinfo/{id}', 'App\Http\Controllers\UserController@userinfo');

    Route::post('save_user', 'App\Http\Controllers\UserController@save_user');

    Route::get('app_status/{id}', 'App\Http\Controllers\UserController@app_status');


    Route::get('tasks', 'App\Http\Controllers\TasksController@task_list');

    Route::post('submit_form', 'App\Http\Controllers\Admin\FormController@submit_form');
});



Route::get('file/{folder}/{path}', 'App\Http\Controllers\FileController@getFile');


Route::get('dwonload/{folder}/{path}', 'App\Http\Controllers\FileController@dwonload');






Route::group(["prefix" => "admin", 'middleware' => 'auth:api', "name" => "admin."], function () {
    // Route::get('users', [UserController::class, 'index']);

    Route::get('all_students', 'App\Http\Controllers\Admin\UserController@all_students');

    // Route::get('users', 'App\Http\Controllers\Admin\UserController@index');
    Route::get('users', 'App\Http\Controllers\Admin\UserController@all_users');

    Route::get('get_trash', 'App\Http\Controllers\Admin\UserController@get_trash');

    Route::get('get_archived', 'App\Http\Controllers\Admin\UserController@get_archived');
    


    Route::post('restore', 'App\Http\Controllers\Admin\UserController@restore');
    
    



    Route::get('admin_users', 'App\Http\Controllers\Admin\UserController@admin_users');

    Route::post('change_admins', 'App\Http\Controllers\Admin\UserController@change_admins');
    



    Route::post('create_admin_users', 'App\Http\Controllers\Admin\UserController@create_admin_users');



    Route::post('update_user_status', 'App\Http\Controllers\Admin\UserController@update_user_status');
    Route::post('assign_admin_users', 'App\Http\Controllers\Admin\UserController@assign_admin_users');

    Route::post('delete_admin_users', 'App\Http\Controllers\Admin\UserController@delete_admin_users');

    Route::post('delete_admins', 'App\Http\Controllers\Admin\UserController@delete_admins');




    Route::get('assign_users/{id}', 'App\Http\Controllers\Admin\UserController@assign_users');



    Route::get('forms', 'App\Http\Controllers\Admin\FormController@getallforms');

    Route::get('forms/{type}/{id}', 'App\Http\Controllers\Admin\FormController@getforms');

    Route::get('formbyid/{id}', 'App\Http\Controllers\Admin\FormController@formbyid');

    Route::get('formdata/{id}', 'App\Http\Controllers\Admin\FormController@formdata');

    Route::get('formdata/{id}/{user_id}', 'App\Http\Controllers\Admin\FormController@formDataUser');

    Route::post('completed', 'App\Http\Controllers\Admin\FormController@completed');
    

    Route::post('save_form', 'App\Http\Controllers\Admin\FormController@save_form');
    Route::post('update_form', 'App\Http\Controllers\Admin\FormController@update_form');

    Route::post('update_form_status', 'App\Http\Controllers\Admin\FormController@update_form_status');


    Route::get('app_status/{id}', 'App\Http\Controllers\UserController@app_status');

    Route::post('save_app_status', 'App\Http\Controllers\UserController@save_status');


    Route::post('save_notes', 'App\Http\Controllers\UserController@save_notes');

    Route::post('delete_notes', 'App\Http\Controllers\UserController@delete_notes');

    

    Route::post('save_event', 'App\Http\Controllers\EventsController@save_event');
    Route::post('delete_event', 'App\Http\Controllers\EventsController@delete_event');

    Route::get('notifications', 'App\Http\Controllers\UserController@notifications');

    Route::post('delete_noti', 'App\Http\Controllers\UserController@delete_notification');


    Route::get('admin_files', 'App\Http\Controllers\FileController@admin_files');

    //ds form
    Route::get('get_ds_form/{fid}/{id}', 'App\Http\Controllers\Admin\FormController@get_ds_form');
    Route::post('save_ds_form', 'App\Http\Controllers\Admin\FormController@save_ds_form');
    Route::get('del_ds_form/{form_id}/{id}', 'App\Http\Controllers\FormController@del_ds_form');
});


Route::group(["prefix" => "send_mail", "name" => "send_mail."], function () {
    Route::post('reset_password', 'App\Http\Controllers\MailController@reset_password');
    Route::post('new_user', 'App\Http\Controllers\MailController@new_user');

    Route::post('user_approved', 'App\Http\Controllers\MailController@user_approved');
    
    Route::post('calender_notes', 'App\Http\Controllers\MailController@calender_notes');
    Route::post('file_upload', 'App\Http\Controllers\MailController@file_upload');

    Route::post('stage_notes', 'App\Http\Controllers\MailController@stage_notes');
    Route::post('form_submit', 'App\Http\Controllers\MailController@form_submit');
    
    

    

});







// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
