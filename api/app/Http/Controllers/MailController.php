<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    //

    public function reset_password(Request $request)
    {


        try {
            //Here send the link with CURL with an external email API         return true;
            $email =  $request->email;

            $link = $request->link;

            $em = Mail::send('email.forget_password', ['link' => $link], function ($message) use ($email) {
                $message->to($email, 'Admin')->subject('Reset Password Notification');
                $message->from("info@onekeyclient.us", 'Admin');
            });
            return $em;
        } catch (\Exception $e) {
            return $e;
        }
    }



    public function new_user(Request $request)
    {



        $em =  Mail::send('email.new_user', ['user' => $request], function ($message) {
            $message->to("info@onekeyclient.us", 'Admin')->subject('New User Register Request Received!');
            $message->from("info@onekeyclient.us", 'Admin');
        });

        return      $em;
    }

    public function user_approved(Request $request)
    {

        $name = $request->name;

        $email = $request->email;
        $password = $request->password;

        $em = Mail::send('email.request_approved', ['name' => $name, 'email' => $email, 'password' => $password], function ($message) use ($email, $name) {

            $message->from("info@onekeyclient.us", 'OneKeyClient');

            $message->to($email, $name)->subject('Approved - Your Request has been approved');
        });
        return      $em;
    }


    public function calender_notes(Request $request)
    {

        $email = $request->email;
        $name = $request->name;

        $em = Mail::send('email.calender_notes', $request->array_data, function ($message) use ($email, $name) {

            $message->to($email, $name)->subject('Calender Notes');

            $message->from("info@onekeyclient.us", 'OneKeyClient');
        });


        return $em;
    }

    public function file_upload(Request $request)
    {

        //  return $request;


        $assignAdmin = $request->assignAdmin;

        $user = (object) $request->user;
        $title = $request->title;


        // return $user;



        $em =  Mail::send('email.file_upload', ['user' =>  $user, 'title' => $title], function ($message) use ($assignAdmin) {
            $message->to($assignAdmin, 'Admin')->subject('New Document Uploaded');
            $message->from("info@onekeyclient.us", 'Admin');
        });


        return $request;
    }

    public function stage_notes(Request $request)
    {
        $user = (object) $request->user;

        $email = $user->email;

        $em = Mail::send('email.stage_notes', ['user' => $user->first_name], function ($message) use ($email) {
            $message->to($email, 'OneKey Client Portal')->subject('Your Case Status');
            $message->from("info@onekeyclient.us", 'OneKey Client Portal');
        });


        return $em;
    }

    public function form_submit(Request $request)
    {

        $user = (object) $request->user;

        $title =  $user->first_name.' '.$request->title;

        $assignAmin = $request->assignAmin;

        $em = Mail::send('email.form_submit', ['user' => $user, 'form' => $title], function ($message) use ($title, $assignAmin) {

            $subject = $title . ' has  Submitted';

            $message->to($assignAmin, 'Admin')->subject($subject);
            $message->from("info@onekeyclient.us", 'Admin');
        });

        return $em;
    }
}
