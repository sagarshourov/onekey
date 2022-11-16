<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;





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

Route::post('register', 'App\Http\Controllers\AuthController@register');

Route::get('tasks/{user_id?}', 'App\Http\Controllers\TasksController@task_list');
Route::get('events/{user_id?}', 'App\Http\Controllers\EventsController@all_events');

Route::get('universities', 'App\Http\Controllers\Admin\UserController@universities');
Route::get('visa_types', 'App\Http\Controllers\Admin\UserController@visa_types');

Route::post('student_info', 'App\Http\Controllers\Admin\UserController@student_info');



Route::group(["prefix" => "admin", 'middleware' => 'auth:api', "name" => "admin."], function () {
    // Route::get('users', [UserController::class, 'index']);

    Route::get('all_students', 'App\Http\Controllers\Admin\UserController@all_students');

   // Route::get('users', 'App\Http\Controllers\Admin\UserController@index');
    Route::get('users', 'App\Http\Controllers\Admin\UserController@all_users');

    Route::post('update_user_status', 'App\Http\Controllers\Admin\UserController@update_user_status');
    

    


  
    

 
    
});






// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
