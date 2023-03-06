<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Models\AdminUsers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Models\User;

use App\Models\VisaType;
use App\Models\VisaStatus;
use App\Models\Universty;
use App\Models\StudentInfo;
use Illuminate\Support\Facades\Mail;


use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;

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
            return $this->sendError($request->all(), 'Something worng.');
        }





        return $this->sendResponse($request->all(), 'Admin retrieved successfully.');
    }

    public function admin_users()
    {
        $users =  User::with(['profile' => function ($query) {
            $query->where('doc_type', 2);
        }])->where('is_admin', 1)->orderByDesc('id')->get();



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

    public function all_users()
    {
        // $assign = $this->assignUsers();


        // if ($assign) {
        //     $users =  User::whereIn('id', $assign)->orderByDesc('id')->get();
        // } else {
        //     $users =  User::where('is_admin', 0)->orderByDesc('id')->get();
        // }

        // $users =  User::with(['data'=> function($query){
        //         //$query->where('form_id',1);

        // }])->where('is_admin', 0)->orderByDesc('id')->get();


        $users = User::with(['data' => function ($query) {
            $query->where('form_id', 1)->get(['content']);
        }])->where('is_admin', 0)->orderByDesc('id')->get();





        return $this->sendResponse($users, 'Users retrieved successfully.');
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
        $input['is_admin'] = 1;
        $input['status'] = 'approved';
        $input['package'] = 1;
        User::create($input);
        return  $this->admin_users();
    }


    public function delete_admins(Request $request)
    {
        $input = $request->all();


        User::find($input['user_id'])->forceDelete();

        return $this->admin_users();
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






        return $this->sendResponse($user, 'You will recive an email within short time.');
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


        $user = User::find($input['user_id']);
        $user->status = $input['type'];



        $name =  $user->first_name;

        $email =  $user->email;

        $password = Str::random(10);




        if ($input['type'] == 'approved') {
            Mail::send('email.request_approved', ['name' => $name, 'email' => $email, 'password' => $password], function ($message) use ($email, $name) {

                $message->from(env('MAIL_FROM_ADDRESS'), env('ProjectName'));

                $message->to($email, $name)->subject('Approved - Your Request has been approved');
            });

            $user->password = Hash::make($password);
        }



        $user->save();
        $users =  User::where('is_admin', 0)->orderByDesc('id')->get();


        return $this->sendResponse($users, 'Saved successfully.');
    }
}
