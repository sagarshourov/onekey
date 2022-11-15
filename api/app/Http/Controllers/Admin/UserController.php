<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends BaseController
{
    //

    public function index()
    {
        $users =    User::where('is_admin', 1)->orderByDesc('id')->get();

        return $this->sendResponse($users, 'Users retrieved successfully.');
    }

    public function all_users()
    {
        $users =    User::where('is_admin', 0)->orderByDesc('id')->get();

        return $this->sendResponse($users, 'Users retrieved successfully.');
    }
}
