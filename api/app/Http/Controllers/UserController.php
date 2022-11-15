<?php

namespace App\Http\Controllers;

use App\Models\User;


use App\Http\Controllers\BaseController as BaseController;

class UserController extends BaseController
{
    //

    public function index()
    {
        $users =   User::all();

        return $this->sendResponse($users, 'Users retrieved successfully.');
    }
}
