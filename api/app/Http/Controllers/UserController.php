<?php

namespace App\Http\Controllers;

use App\Models\User;

use App\Models\Country;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\BaseController as BaseController;
use App\Models\AppStatusNotes;
use App\Models\Files;
use App\Models\Notifications;
use App\Models\Packages;
use App\Models\StatusText;
use App\Models\SubStatusText;
use App\Models\UserAppStatus;
use App\Models\StudentInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;




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

        return   $country;

        // return $this->sendResponse($country, 'Countries retrieved successfully.');
    }


    public function app_status($id)
    {
        $app_status = StatusText::with('sub_status')->get(['id', 'title']);


        if ($id > 0) {
            $user_id = $id;
        } else {
            $user_id =  Auth::user()->id;
        }


        $user_app_status = UserAppStatus::where('user_id',  $user_id)->get(['id', 'main', 'sub', 'status_text', 'sub_status_text']);


        $notes = AppStatusNotes::with(['status', 'created_by'])->where('user_id',  $user_id)->get(['id', 'message', 'status_text', 'user_id', 'created_by', 'is_read', 'created_at']);

        // $user_app_status = UserAppStatus::where('user_id', 105)->get(['id', 'main', 'sub', 'status_text', 'sub_status_text']);


        return $this->sendResponse(array('status_text' => $app_status, 'user_app_status' => $user_app_status, 'notes'  => $notes), 'Status retrieved successfully.');
    }

    public function userfiles()
    {
        $user_id = Auth::id();




        if (Auth::user()->is_admin) {
            // $assign = $this->assignUsers();
            // if ($assign) {
            //     $files =   Files::with(['docTypes', 'user'])->whereIn('user_id', $assign)->get()->groupBy('user_id');
            // } else {
            //     $files =   Files::with(['docTypes', 'user'])->get()->groupBy('user_id');
            // }

            $files =   Files::with(['docTypes', 'user'])->get()->groupBy('user_id');
        } else {
            $files =   Files::with('docTypes')->where('user_id', $user_id)->get();
        }
        return $this->sendResponse($files, 'Files retrieved successfully.');
    }


    public function save_status(Request $request)
    {
        $input = $request->all();


        if ($input['sub_id'] == null) {
            if ($input['active'] === true) {
                $users = UserAppStatus::where(['user_id' => $input['user_id'], 'status_text' => $input['status_text']])->delete();
            } else {
                $subStatus = SubStatusText::where('status_text', $input['status_text'])->get(['id']);
                foreach ($subStatus as $value) {
                    $users = UserAppStatus::create([
                        'user_id'   => (int) $input['user_id'],
                        'status_text' => $input['status_text'],
                        'sub_status_text' => $value->id,
                        'sub' => 1,
                        'main' => 1,
                    ]);
                }
            }
        } else {

            if ($input['active'] === true) {
                $users = UserAppStatus::where(['user_id' => $input['user_id'], 'status_text' => $input['status_text'], 'sub_status_text' => $input['sub_id']])->delete();
            } else {

                $users = UserAppStatus::create([
                    'user_id'   => (int) $input['user_id'],
                    'status_text' => $input['status_text'],
                    'sub_status_text' => $input['sub_id'],
                    'sub' => 1,
                    'main' => 1,
                ]);
            }
        }







        return $this->sendResponse($users, 'Files retrieved successfully.');
    }

    public function save_notes(Request $request)
    {

        $input = $request->all();
        $user_id = Auth::id();

        $users = AppStatusNotes::create([
            'message' => $input['message'],
            'user_id'   => (int) $input['user_id'],
            'status_text' => $input['status_text'],
            'created_by' =>   $user_id,
            'is_read' => 0
        ]);


        return $this->sendResponse($users, 'Saved successfully.');
    }








    public function userinfo($id)
    {

        if ($id == 0) {
            $user_id = Auth::id();
        } else {
            $user_id = $id;
        }






        $users =   User::find($user_id);
        $return['id'] = $users->id;

        $return['first_name'] = $users->first_name;
        $return['middle_name'] = $users->middle_name;
        $return['last_name'] = $users->last_name;
        $return['profile_image'] = Files::where(['user_id' => $user_id, 'doc_type' => 2])->first('file_path');
        $return['email'] = $users->email;
        $return['user_phone'] = $users->user_phone;
        $return['whatsapp'] = $users->whatsapp;
        $return['birth'] = $users->birth_date;
        $return['gendar'] = $users->gendar;
        $return['package'] = Packages::where(['id' => $users->package])->pluck('title');

        $return['visa_type'] = StudentInfo::where(['user_id' => $user_id])->pluck('visa_type');


        return $this->sendResponse($return, 'Users retrieved successfully.');
    }



    public function save_user(Request $users)
    {

        $input = $users->all();


        $in['first_name'] = $input['first_name'];
        $in['middle_name'] = $input['middle_name'];
        $in['last_name'] = $input['last_name'];
        $in['email'] = $input['email'];
        $in['user_phone'] = $input['user_phone'];
        $in['whatsapp'] = $input['whatsapp'];
        $in['birth_date'] =  $input['birth'];
        $in['gendar'] = $input['gendar'];


        if (isset($input['password'])) {
            $in['password'] = Hash::make($input['password']);
        }


        User::updateOrCreate(
            [
                'id'   => $input['id'],
            ],
            $in

        );

        return $this->sendResponse($input, 'Users updated successfully.');
    }


    public function notifications()
    {
        $assign = $this->assignUsers();
        if ($assign) {
            $noti =  Notifications::with('user')->get();
        } else {
            $noti =  Notifications::with('user')->whereIn('user_id', $assign)->get();
        }


        return $this->sendResponse($noti, 'Notifications retrive successfully.');
    }

    public function delete_notification(Request $req)
    {
        $input = $req->all();
        $noti = Notifications::find($input['id'])->delete();

        return $this->sendResponse($input['id'], 'Notifications retrive successfully.');
    }
}
