<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use App\Models\Files;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class FileController extends BaseController
{
    //


    public function getFile($folder,  $filename)
    {

        $file = Storage::get($folder . '/' . $filename);
        return $file;
    }


    public function dwonload(Request $request)
    {
        return $request;
    }

    public function delete_file(Request $request)
    {
        $in = $request->all();

        $file = Files::find($in['id']);
        $path = storage_path() . '/app/public/files/' .   $file->file_path;
        Storage::delete($path);
        $file->delete();

        return $this->sendResponse(['success'], 'FIle deleted successfully.');
    }





    public function file_upload(Request $request)
    {


        $path = $request->file('file')->store('files');
        $user_id = Auth::id();

        $input = $request->all();

        //   return $this->sendResponse($input['type'], 'FIle uploaded successfully.');


        if ($input['type'] == 2) {
            $file = Files::updateOrCreate([
                'user_id'   =>  $user_id,
                'doc_type' => $input['type']
            ], [
                'file_path' =>  $path,
                'user_id'   =>  $user_id,
                'doc_type' => $input['type']

            ]);
        } else {
            $file = new Files;
            $file->title = $input['title'];
            $file->file_path = $path;
            $file->doc_type = (int) $input['type'];
            $file->user_id = $user_id;

            $file->save();
        }



        return $this->sendResponse($file, 'FIle uploaded successfully.');
    }
}
