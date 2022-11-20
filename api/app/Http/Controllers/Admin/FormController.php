<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Forms;
use Illuminate\Http\Request;

class FormController extends BaseController
{
    //


    public function getallforms()
    {
        $forms =  Forms::all();

        return $this->sendResponse($forms, 'Forms retrieved successfully.');
    }

    public function getforms($id)
    {
        $forms =  Forms::find($id);

        return $this->sendResponse($forms, 'Forms retrieved successfully.');
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
}
