<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;

use App\Models\Tasks;

class TasksController extends BaseController
{
    //


    public function task_list($user_id)
    {
        $tasks = Tasks::with(['users','stage'])->orderByDesc('id')->get();

        return $this->sendResponse($tasks, 'Tasks retrieved successfully.');
    }
}
