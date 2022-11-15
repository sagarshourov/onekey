<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Events;
use App\Http\Controllers\BaseController as BaseController;

class EventsController extends BaseController
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function all_events()
    {
        $users =   Events::select('user_id','notes', 'note_date')->with(['users'])->get();

        return $this->sendResponse($users, 'Events retrieved successfully.');
    }
}
