<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;

use App\Models\FormData;
use App\Models\Forms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Notifications;
use Illuminate\Support\Facades\Mail;

class FormController extends BaseController
{
    //


    public function getallforms()
    {
        $forms =  Forms::all();

        return $this->sendResponse($forms, 'Forms retrieved successfully.');
    }

    public function formbyid($id)
    {


        $forms =  FormData::with(['user', 'form'])->where('form_id', $id)->get(['id', 'user_id', 'form_id']);
        // return $this->sendResponse($assign, 'Formby id successfully.');
        // $assign = $this->assignUsers();
        // if ($assign) {

        //     $filterClause = function ($query) use ($assign) {
        //         return $query->whereIn('id', $assign);
        //     };

        //     $forms = FormData::with(['user' => $filterClause,'form'])
        //         ->whereHas('user', $filterClause)
        //         ->where('form_id', $id)
        //         ->get();
        // } else {
        //     $forms =  FormData::with(['user', 'form'])->where('form_id', $id)->get(['id', 'user_id', 'form_id']);
        // }






        return $this->sendResponse($forms, 'Formby id successfully.');
    }


    public function formdata($id)
    {

        if (Auth::user()->is_admin) {


            $forms =  FormData::where('id', $id)->get(['id', 'user_id', 'form_id', 'content']);
            $form_con =  Forms::find($forms[0]->form_id);
            $return['form_id'] = $forms[0]->form_id;
            $return['val'] = json_decode($forms[0]->content);

            $return['con'] = json_decode($form_con->content);
        } else {
            $user_id =  Auth::user()->id;
            $forms =  FormData::where(['form_id' => $id, 'user_id' => $user_id])->first(['id', 'user_id', 'form_id', 'content']);

            if (!empty($forms))  $return['val'] = json_decode($forms->content);


           // return $this->sendResponse($forms, 'Formby id successfully.');


            $form_con =  Forms::find($id);


            if (!empty($form_con)) {
                $return['con'] = json_decode($form_con->content);
            } else {
                $return['con'] = '[]';
            }
        }




        $return['title'] = $form_con->title;

        return $this->sendResponse($return, 'Formby id successfully.');


        // $forms = Forms::all();

        // $return = [];

        // foreach ($forms as $key => $value) {

        //     $return[] = json_decode($value->content);

        //     $return[]['title'] = 'some';

        // }




        // return $this->sendResponse($return, 'Forms retrieved successfully.');
    }






    public function getforms($type, $id)
    {
        $forms =  Forms::find($id);

        $return['title'] = $forms->title;
        $return['con'] = json_decode($forms->content);

        if ($type == 'read') {
            return $this->sendResponse($return, 'Forms retrieved successfully.');
        } else {
            return $this->sendResponse($forms, 'Forms retrieved successfully.');
        }




        //return $this->sendResponse($forms, 'Forms retrieved successfully.');
    }








    public function save_form(Request $request)
    {
        $input = $request->all();
        Forms::updateOrCreate([
            'title'   => $input['title'],
        ], [
            'title' => $input['title'],
            'content' => json_encode($input['data']),
            'visibility' => 1,
            'allows_edit' => 1

        ]);



        return $this->sendResponse($request->all(), 'Users retrieved successfully.');
    }

    public function update_form(Request $request)
    {
        $input = $request->all();
        Forms::updateOrCreate([
            'id'   => $input['id'],
        ], [
            'title' => $input['title'],
            'content' => json_encode($input['data']),
            'visibility' => 1,
            'allows_edit' => 1

        ]);



        return $this->sendResponse(['success'], 'Users retrieved successfully.');
    }





    public function update_form_status(Request $request)
    {
        $input = $request->all();
        $user = Forms::find($input['form_id']);

        if ($input['type'] == 'remove') {
            $user->delete();
            return $this->sendResponse(['Success'], 'Removed successfully.');
        }
        if ($input['type'] == 'private') {
            $user->visibility = 1;
            $user->save();
            return $this->sendResponse(['Success'], 'Public successfully.');
        }
        if ($input['type'] == 'public') {
            $user->visibility = 0;
            $user->save();
            return $this->sendResponse(['Success'], 'Priivate successfully.');
        }
    }


    public function submit_form(Request $request)
    {


        $input = $request->all();



        $user = Auth::user();

        $user_id = Auth::id();


        //  return $this->sendResponse($this->assignAdminEmail($user_id), 'save form data successfully.');

        FormData::updateOrCreate([
            'user_id'   =>   $user_id,
            'form_id' => $input['form_id']
        ], [
            'user_id'   =>    $user_id,
            'content' => json_encode($input['data']),
            'form_id' => $input['form_id']

        ]);


        if ($input['last_step'] == true) {
            $noti =  Notifications::create([
                'user_id' =>   $user_id,
                'title' => 'Form Submited',
                'notification' =>  $user->first_name . ' has submited ' . $input['title'] . ' form',
                'is_read' => 0,
                'reciver' => 1
            ]);
            $assignAmin = $this->assignAdminEmail($user_id);

            Mail::send('email.form_submit', ['user' => $user, 'form' => $input['title']], function ($message) use ($assignAmin) {
                $message->to($assignAmin, 'Admin')->subject('New Form Submited');
                $message->from("info@onekeyclient.us", 'Admin');
            });
        }





        return $this->sendResponse(['success'], 'save form data successfully.');
    }
}
