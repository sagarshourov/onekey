<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


use App\Models\User;
use App\Models\Files;

use Illuminate\Support\Facades\Validator;
use App\Models\Notifications;
use Illuminate\Support\Facades\Mail;

use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Carbon;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends BaseController
{
    //

    private function sendResetEmail($email, $token)
    { //Retrieve the user from the database
        $user = DB::table('users')->where('email', $email)->select('id', 'first_name', 'email')->first(); //Generate, the password reset link. The token generated is embedded in the link$link = config('base_url') . 'password/reset/' . $token . '?email=' . urlencode($user->email);
        $link = env('APP_URL') . '/password/' . $token . '/' . $user->id;
        try {
            //Here send the link with CURL with an external email API         return true;


            Mail::send('email.forget_password', ['link' => $link], function ($message) use ($email) {
                $message->to($email, 'Admin')->subject('Reset Password Notification');
                $message->from("info@onekeyclient.us", 'Admin');
            });
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }


    public function forgot(Request $request)
    {

        $user = DB::table('users')->where('email', '=', $request->email)
            ->first(); //Check if the user exists
        if (empty($user) || $user == null) {
            // return redirect()->back()->withErrors(['email' => trans('User does not exist')]);

            return $this->sendError($user, ['error' => 'User does not exist']);
        }

        //Create Password Reset Token
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => Str::random(60),
            'created_at' => Carbon::now()
        ]); //Get the token just created above
        $tokenData = DB::table('password_resets')
            ->where('email', $request->email)->orderBy('created_at', 'desc')->first();

        if ($this->sendResetEmail($request->email, $tokenData->token)) {

            return $this->sendResponse('[success]', ['status' => 'A reset link has been sent to your email address.']);
        } else {


            return $this->sendError('[error]', ['status' => 'A Network Error occurred. Please try again.']);
        }



        // $request->validate(['email' => 'required|email']);

        // $status = Password::sendResetLink(
        //     $request->only('email')
        // );

        // return $this->sendResponse($status, 'Forgot password successfully.');

        // $user = User::find(455);


        // Mail::send('email.new_user', ['user' => $user], function ($message) {
        //     $message->to("sagarbd28@gmail.com", 'Admin')->subject('Forget Password !');
        //     $message->from("info@onekeyclient.us", 'Admin');
        // });



    }

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('authToken')->accessToken;
            $success['user'] = $user;
            $success['profile_image'] = Files::where(['user_id' => $user->id, 'doc_type' => 2])->first('file_path');

            return $this->sendResponse($success, 'User login successfully.');
        } else {

            return $this->sendError('Unauthorised.', ['error' => 'User email or passord is worng !']);
        }
        //
    }
    public function register(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'first' => 'required',
            'last' => 'required',
            'email' => 'required|email|regex:/(.+)@(.+)\.(.+)/i|unique:users',
        ]);

        if ($validator->fails()) {

            return $this->sendError('Validation Error.', $validator->errors());
        }
        $input['password'] = bcrypt($input['email']);
        $input['first_name'] = $input['first'];
        $input['last_name'] = $input['last'];
        $input['phone'] = $input['phone'] ? $input['phone'] : "";
        $input['email'] = $input['email'];
        $input['is_admin'] = 0;
        $input['status'] = 'pending';

        $input['package'] = 1;

        $user = User::create($input);




        $noti =  Notifications::create([
            'user_id' =>  $user->id,
            'title' => 'New Registration requested',
            'notification' =>  $user->first_name . ' has submited registred form',
            'is_read' => 0,
            'reciver' => 1
        ]);



        Mail::send('email.new_user', ['user' => $user], function ($message) {
            $message->to("info@onekeyclient.us", 'Admin')->subject('New User Register Request Received!');
            $message->from(env('MAIL_FROM_ADDRESS'), 'Admin');
        });

        return $this->sendResponse(['success'], 'Your registration has been received. Please wait and your login details will be emailed to you within 24 hours. Please DO NOT REGISTER AGAIN!');

        //
    }


    public function forgot_password(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'pass' => 'required',
            'token' => 'required'
        ]);

        //check if payload is valid before moving on
        if ($validator->fails()) {

            return $this->sendError('email.', ['error' => 'Please complete the form!']);
        }

        $password = $request->pass; // Validate the token
        $tokenData = DB::table('password_resets')
            ->where('token', $request->token)->first();

        if (!isset($tokenData->email)) return  $this->sendError('token.', ['error' => 'Invalid Token']);



        $user = User::where('email', $tokenData->email)->first();

        if (!$user) return  $this->sendError('email.', ['error' => 'Email Not found']);

        $user->password = Hash::make($password);
        $user->update();
        DB::table('password_resets')->where('email', $user->email)
            ->delete();

        return $this->sendResponse($user->password, 'Password Changed successfully.');
    }
}
