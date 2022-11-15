<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


use App\Models\User;
use Validator;
class AuthController extends BaseController
{
    //

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('authToken')->accessToken;
            $success['user'] = $user;

            return $this->sendResponse($success, 'User login successfully.');
        } else {

            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
        //
    }
    public function register(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'first' => 'required',
            'last' => 'required',
            'phone' => ['required', 'min:11'],
            'email' => 'required|email|regex:/(.+)@(.+)\.(.+)/i|unique:users',
        ]);

        if ($validator->fails()) {

            return $this->sendError('Validation Error.', $validator->errors());
        }
        $input['password'] = bcrypt($input['phone']);
        $input['first_name'] = $input['first'];
        $input['last_name'] = $input['last'];
        $input['phone'] = $input['phone'];
        $input['email'] = $input['email'];
        $input['is_admin'] = 0;
        $input['status'] = 'pending';
        


        $user = User::create($input);

        return $this->sendResponse(['success'], 'You will recive an email within short time.');

        //
    }
}
