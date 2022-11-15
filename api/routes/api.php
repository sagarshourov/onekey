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

Route::get('users', 'App\Http\Controllers\UserController@index');
Route::post('login', 'App\Http\Controllers\AuthController@login');

Route::post('register', 'App\Http\Controllers\AuthController@register');

Route::get('tasks/{user_id?}', 'App\Http\Controllers\TasksController@task_list');
Route::get('events/{user_id?}', 'App\Http\Controllers\EventsController@all_events');

Route::group(["prefix" => "admin", 'middleware' => 'auth:api', "name" => "admin."], function () {
   // Route::get('users', [UserController::class, 'index']);

    Route::get('users', 'App\Http\Controllers\Admin\UserController@index');
    Route::get('all_users', 'App\Http\Controllers\Admin\UserController@all_users');
});






// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
