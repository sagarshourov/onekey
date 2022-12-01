<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Events;
use App\Models\User;
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

        $user_id = Auth::user()->id;


        if (Auth::user()->is_admin) {
            $users = array('events' => Events::select('user_id', 'notes', 'note_date')->with(['users'])->get(), 'users' => User::get(['id','first_name','last_name','email']));

           //$users = Events::select('user_id', 'notes', 'note_date')->with(['users'])->get();
        } else {
            $users =   Events::select('user_id', 'notes', 'note_date')->with(['users'])->where('user_id', $user_id)->get();
        }





        return $this->sendResponse($users, 'Events retrieved successfully.');
    }


    public function save_event(Request $users)
    {
        $input = $users->all();
        Events::create(
            [
                'user_id' => $input['user_id'],
                'notes' => $input['notes'],
                'note_date' => $input['date'],
            ]
        );

        return $this->sendResponse($input, 'Event created successfully.');
    }
}
