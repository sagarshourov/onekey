<?php

namespace App\Http\Controllers;

use App\Models\User;

use App\Models\Country;


use App\Http\Controllers\BaseController as BaseController;

class UserController extends BaseController
{
    //

    public function index()
    {
        $users =   User::all();

        return $this->sendResponse($users, 'Users retrieved successfully.');
    }


    public function countries()
    {

        $country =   Country::all();

        return   $country ;

       // return $this->sendResponse($country, 'Countries retrieved successfully.');
    }
}
