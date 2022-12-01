<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\FormData;
use App\Models\Forms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            $forms =  FormData::where(['form_id' => $id, 'user_id' => $user_id])->get(['id', 'user_id', 'form_id', 'content']);

            if (isset($forms[0]))  $return['val'] = json_decode($forms[0]->content);


            $form_con =  Forms::find($id);
            $return['con'] = json_decode($form_con->content);
        }






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
            'group_id' => 1,
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
            'group_id' => 1,
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

        $user_id = Auth::id();


        FormData::updateOrCreate([
            'user_id'   =>   $user_id,
            'form_id' => $input['form_id']
        ], [
            'user_id'   =>    $user_id,
            'content' => json_encode($input['data']),
            'form_id' => $input['form_id']

        ]);



        return $this->sendResponse($input, 'save form data successfully.');
    }
}
