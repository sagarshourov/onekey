<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Events;
use App\Models\User;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Facades\Mail;

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

        $assign = $this->assignUsers();

        $user_id = Auth::user()->id;


        if (Auth::user()->is_admin == 1) {

            // if ($assign) {
            //     $users = array('events' => Events::select('user_id', 'notes', 'note_date')->with(['users'])->whereIn('user_id', $assign)->get(), 'users' => User::whereIn('id', $assign)->get(['id', 'first_name', 'last_name', 'email']));
            // } else {
            //     $users = array('events' => Events::select('user_id', 'notes', 'note_date')->with(['users'])->get(), 'users' => User::get(['id', 'first_name', 'last_name', 'email']));
            // }


            $users = array('events' => Events::select('id', 'user_id', 'notes', 'note_date')->with(['users'])->orderBy('id', 'desc')->get(), 'users' => User::get(['id', 'first_name', 'last_name', 'email']));

            //$users = Events::select('user_id', 'notes', 'note_date')->with(['users'])->get();
        } else {
            $users =   Events::select('user_id', 'notes', 'note_date')->with(['users'])->where('user_id', $user_id)->get();
        }





        return $this->sendResponse($users, 'Events retrieved successfully.');
    }





    public function delete_event(Request $req)
    {


        Events::find($req->event_id)->forceDelete();




        return $this->all_events();
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

        $user_data = User::find($input['user_id']);

        $array_data = array(

            'user' => $user_data->first_name . ' ' . $user_data->last_name,

            'notes' => $input['notes'],

            'date' => $input['date']

        );


        $name = $user_data->first_name . ' ' . $user_data->last_name;

        $email = $user_data->email;


        if ($input['notification'] == 1) {
            Mail::send('email.calender_notes', $array_data, function ($message) use ($email, $name) {

                $message->to($email, $name)->subject('Calender Notes');

                $message->from(env('MAIL_FROM_ADDRESS'), env('ProjectName'));
            });
        }




        return  $this->all_events();
    }
}
