<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;

use App\Models\Tasks;
use Illuminate\Support\Facades\Auth;

class TasksController extends BaseController
{
    //


    public function task_list()
    {



        $user_id = Auth::user()->id;
    //    return $this->sendResponse($user_id, 'Tasks retrieved successfully.');

        if (Auth::user()->is_admin==1) {

            $users =  Tasks::with(['users', 'stage'])->orderByDesc('id')->get();
            //$users = Events::select('user_id', 'notes', 'note_date')->with(['users'])->get();
        } else {
            $users =  Tasks::with(['users', 'stage'])->where('user_id',  $user_id)->orderByDesc('id')->get();
        }

        return $this->sendResponse($users, 'Tasks retrieved successfully.');
    }
}
