<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller as Controller;
use App\Models\AdminUsers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class BaseController extends Controller
{

    /**

     * success response method.

     *

     * @return \Illuminate\Http\Response

     */
    public function sendResponse($result, $message)
    {

        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];


        return response()->json($response, 200);
    }

    /**

     * return error response.

     *

     * @return \Illuminate\Http\Response

     */
    public function sendError($error, $errorMessages = [], $code = 200)
    {

        $response = [
            'success' => false,
            'message' => $error,
        ];


        if (!empty($errorMessages)) {

            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }

    public function assignUsers()
    {

        $admin = Auth::user();
        $return = AdminUsers::where('admin_id', $admin->id)->pluck('user_id');

        if ($admin->id == 1) {

            return false;
        } else {
            return $return;
        }
    }


    public function assignAdminEmail($user_id)
    {

        $admin = AdminUsers::where('user_id', $user_id)->get('admin_id');

        if ($admin->isNotEmpty()) {
            return array(env('MAIL_FROM_ADDRESS'), User::where('id', $admin[0]['admin_id'])->pluck('email')[0]);
        } else {
            return env('MAIL_FROM_ADDRESS');
        }
    }
}
