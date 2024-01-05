<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Models\AdminUsers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Models\User;

use App\Models\VisaType;

use App\Models\Universty;
use App\Models\StudentInfo;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;
use App\Models\Events;

class UserController extends BaseController
{
    //







    public function assign_admin_users(Request $request)
    {
        $input = $request->all();

        if (count($input['data'])  > 0) {

            foreach ($input['data'] as $user_id) {
                AdminUsers::create([
                    'admin_id' => $input['user_id'],
                    'user_id' => $user_id,
                ]);
            }
        } else {
            return $this->sendError($request->all(), 'Something wrong.');
        }





        return $this->sendResponse($request->all(), 'Admin retrieved successfully.');
    }

    public function admin_users($type = 1)
    {
        if ($type == 1) {


            $users =  User::with(['profile' => function ($query) {
                $query->where('doc_type', 2);
            }])->whereIn('is_admin', [1, 2])->orderByDesc('id')->get();
        } else {

            $users =  User::with(['profile' => function ($query) {
                $query->where('doc_type', 2);
            }])->where('is_admin', 0)->orderByDesc('id')->get();
        }


        return $this->sendResponse($users, 'Users retrieved successfully.');
    }


    public function save_form(Request $request)
    {

        return $this->sendResponse($request->all(), 'Users retrieved successfully.');
    }

    public function get_form(Request $request)
    {

        return $this->sendResponse($request->all(), 'Users retrieved successfully.');
    }



    public function index()
    {
        $users =    User::where('is_admin', 1)->orderByDesc('id')->get();

        return $this->sendResponse($users, 'Users retrieved successfully.');
    }


    public function change_admins(Request $request)
    {

        $input = $request->all();

        $user =  User::where('id', (int)  $input['user_id'])
            ->update(['is_admin' => (int) $input['is_admin']]);


        return  $this->admin_users(1);
    }

    public function all_users()
    {

        $users = User::with(['student_info', 'data' => function ($query) {
            $query->where('form_id', 1);
        }])->where('is_admin', 0)->orderByDesc('id')->get();
        return $this->sendResponse($users, 'Users retrieved successfully.');
    }

    public function get_trash()
    {

        $users = User::onlyTrashed()->where('status', '!=', 'archive')->orderByDesc('id')->get();
        return $this->sendResponse($users, 'Users retrieved successfully.');
    }

    public function get_archived()
    {

        $users = User::onlyTrashed()->where('status', '=', 'archive')->orderByDesc('id')->get();
        return $this->sendResponse($users, 'Users retrieved successfully.');
    }






    public function restore(Request $request)
    {

        User::withTrashed()->find($request->id)->restore();

        User::find($request->id)
            ->update(['status' => 'approved']);


        if ($request->status == 'archive') {
            return $this->get_archived();
        } else {
            return $this->get_trash();
        }
    }






    public function create_admin_users(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|regex:/(.+)@(.+)\.(.+)/i|unique:users',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        $input['password'] = bcrypt($input['password']);
        $input['first_name'] = $input['first_name'];
        $input['last_name'] = $input['last_name'];
        $input['email'] = $input['email'];
        $input['is_admin'] = $input['is_admin'];
        $input['status'] = 'approved';
        $input['package'] = 1;
        User::create($input);
        //   return $input;

        if ($input['is_admin'] == 1) {
            return  $this->admin_users($input['is_admin']);
        } else {
            return $this->all_users();
        }
    }


    public function delete_admins(Request $request)
    {
        $input = $request->all();


        User::find($input['user_id'])->forceDelete();

        return $this->admin_users(1);
    }



    public function assign_users($id)
    {
        // $users =  AdminUsers::with(['user'])->where('admin_id', 1)->orderByDesc('id')->get();

        $users =  AdminUsers::with('users')->where('admin_id', $id)->orderByDesc('id')->get();
        return $this->sendResponse($users, 'Users retrieved successfully.');
    }

    public function delete_admin_users(Request $request)
    {
        $input = $request->all();


        AdminUsers::where(['admin_id' => $input['admin_id'], 'user_id' => $input['user_id']])->forceDelete();

        return $this->sendResponse(['success'], 'Users retrieved successfully.');
    }


    public function visa_types()
    {
        $visaType = VisaType::orderByDesc('id')->get();

        return $this->sendResponse($visaType, 'Users retrieved successfully.');
    }
    public function universities()
    {
        $university =  Universty::orderByDesc('id')->get();

        return $this->sendResponse($university, 'Users retrieved successfully.');
    }


    public function student_info(Request $request)
    {
        $input = $request->all();

        // $validator = Validator::make($input, [
        //     'code' => 'required',
        //     'date' => 'required',
        //     'time' => 'required',
        //     'university' => 'required',
        //     'type' => 'required',
        //     'package' => 'required',
        // ]);
        // if ($validator->fails()) {

        //     return $this->sendError('Validation Error.', $validator->errors());
        // }

        $input['visa_status'] = 1;


        if (isset($input['package'])) {
            $user =  User::where('id', (int)  $input['user_id'])
                ->update(['package' => (int) $input['package']]);
        }

        StudentInfo::updateOrCreate([
            'user_id'   => $input['user_id'],
        ],  $input);


        if (isset($input['interview_date']) && $input['interview_date'] != '') {


            Events::updateOrCreate(
                [
                    'user_id'   => $input['user_id'],
                    'note_date' => $input['interview_date']
                ],
                [
                    'user_id' => $input['user_id'],
                    'notes' => 'Your Visa interview date has been scheduled at the ' . $input['us_consultant'] . ' on ' . $input['interview_date'] . ' at ' . $input['interview_time'],
                    'note_date' => $input['interview_date'],
                ]
            );

            $user_data = User::find($input['user_id']);



            $array_data = array(

                'user' => $user_data->first_name . ' ' . $user_data->last_name,

                'notes' => 'Your Visa interview date has been scheduled at the ' . $input['us_consultant'] . ' on ' . $input['interview_date'] . ' at ' . $input['interview_time'],

                'date' => $input['interview_date']

            );

            $name = $user_data->first_name . ' ' . $user_data->last_name;

            $email = $user_data->email;

            Mail::send('email.calender_notes', $array_data, function ($message) use ($email, $name) {
                $message->to($email, $name)->subject('Calender Notes');
                $message->from("info@onekeyclient.us", 'OneKeyClient');
            });
        }





        return $this->sendResponse($user, 'You will receive an email within short time.');
        //
    }

    public function all_students()
    {
        // $assign = $this->assignUsers();
        // if ($assign) { //when master admin 
        //     $students =  User::with(array(
        //         'student_info',
        //         'student_info.university',
        //         'student_info.visa_type'
        //     ))->whereIn('id', $assign)->orderByDesc('id')->get();;

        //     return $this->sendResponse($students, 'Users retrieved successfully.');
        // } else {
        //     $students =  User::with(array(
        //         'student_info',
        //         'student_info.university',
        //         'student_info.visa_type'
        //     ))->orderByDesc('id')->get();;

        //     return $this->sendResponse($students, 'Users retrieved successfully.');
        // }

        // $students =  User::with(array(
        //     'student_info',
        //     'student_info.university',
        //     'student_info.visa_type'
        // ))->orderByDesc('id')->get();;


        $students =  User::with(
            'student_info',
        )->orderByDesc('id')->get();;

        return $this->sendResponse($students, 'Users retrieved successfully.');
    }


    public function update_user_status(Request $request)
    {

        $input = $request->all();

        if ($input['type'] == 'remove') {
            $user = User::find($input['user_id']);
            $user->delete();
            $users =  User::where('is_admin', 0)->orderByDesc('id')->get();
            return $this->sendResponse($users, 'Removed successfully.');
        }


        if ($input['type'] == 'archive') {
            $user = User::find($input['user_id']);
            $user->status = 'archive';
            $user->deleted_at = date("Y-m-d H:i:s");
            $user->save();
            $users =  User::where('is_admin', 0)->orderByDesc('id')->get();
            return $this->sendResponse($users, 'Archived successfully.');
        }


        $user = User::find($input['user_id']);
        $user->status = $input['type'];



        $name =  $user->first_name;

        $email =  $user->email;

        $password = Str::random(10);




        if ($input['type'] == 'approved') {
            Mail::send('email.request_approved', ['name' => $name, 'email' => $email, 'password' => $password], function ($message) use ($email, $name) {

                $message->from("info@onekeyclient.us", "OneKeyClient");

                $message->to($email, $name)->subject('Approved - Your Request has been approved');
            });

            $user->password = Hash::make($password);



            $endpoint = config('app.mail_url') . '/user_approved';

            $data['name'] = $name;
            $data['email'] = $email;
            $data['password'] = $password;


            $response = Http::post($endpoint, $data);
        }



        $user->save();
        $users =  User::where('is_admin', 0)->orderByDesc('id')->get();


        return $this->sendResponse($users, 'Saved successfully.');
    }
}
