<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;

use Illuminate\Http\Request;
use App\Models\User;

use App\Models\VisaType;
use App\Models\VisaStatus;
use App\Models\Universty;
use App\Models\StudentInfo;
use Validator;

class UserController extends BaseController
{
    //

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
        $users =  User::where('is_admin', 0)->orderByDesc('id')->get();

        return $this->sendResponse($users, 'Users retrieved successfully.');
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

        $validator = Validator::make($input, [
            'code' => 'required',
            'date' => 'required',
            'time' => 'required',
            'university' => 'required',
            'type' => 'required',
        ]);
        if ($validator->fails()) {

            return $this->sendError('Validation Error.', $validator->errors());
        }

        StudentInfo::updateOrCreate([
            'user_id'   => $input['user_id'],
        ], [
            'code' => $input['code'],
            'interview_date' => $input['date'],
            'interview_time' => $input['time'],
            'university' => $input['university'],
            'visa_status' => 1,
            'user_id'   => $input['user_id'],
            'visa_type'   => $input['type'],

        ]);

        return $this->sendResponse(['success'], 'You will recive an email within short time.');
        //
    }

    public function all_students()
    {
        $students =  User::with(array(
            'student_info',
            'student_info.university',
            'student_info.visa_type'
        ))->orderByDesc('id')->get();;

        return $this->sendResponse($students, 'Users retrieved successfully.');
    }


    public function update_user_status(Request $request)
    {

        $input = $request->all();

        if ($input['type'] == 'remove') {
            $user = User::find($input['user_id']);



            $user->delete();
            return $this->sendResponse(['Success'], 'Removed successfully.');
        }


        $user = User::find($input['user_id']);
        $user->status = $input['type'];
        $user->save();

        return $this->sendResponse(['Success'], 'Saved successfully.');
    }
}
