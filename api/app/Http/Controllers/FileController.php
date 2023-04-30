<?php

namespace App\Http\Controllers;

use App\Models\AdminDoc;
use Illuminate\Http\Request;
use App\Models\Files;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

class FileController extends BaseController
{
    //

    public function userfiles()
    {
        $user_id = Auth::id();

        if (Auth::user()->is_admin == 1) {
            $files =   Files::with(['docTypes', 'user'])->get()->groupBy('user_id');
        } else {
            $files =   Files::with('docTypes')->where('user_id', $user_id)->get();
        }
        return $files;
    }



    public function getFile($folder,  $filename)
    {

        $file = Storage::get($folder . '/' . $filename);
        return $file;
    }


    public function dwonload($folder,  $filename)
    {

        // $headers = array(
        //     'Content-Type' => 'application/pdf',
        // );

        if (Storage::exists($folder . '/' . $filename)) {
            return Storage::download($folder . '/' . $filename);
        }
    }

    public function delete_file(Request $request)
    {
        $in = $request->all();

        $file = Files::find($in['id']);
        $path = storage_path() . '/app/public/files/' .   $file->file_path;
        Storage::delete($path);
        $file->forceDelete();

        return $this->sendResponse($this->userfiles(), 'FIle deleted successfully.');
    }

    public function admin_files()
    {
        $user = Auth::user();

        if ($user->is_admin == 1) {
            $files = AdminDoc::with(['admin', 'user', 'doctype'])->where('admin_id', $user->id)->orderBy('created_at', 'desc')->get();
        } else {
            $files = AdminDoc::with(['admin', 'user', 'doctype'])->where('user_id', $user->id)->orderBy('created_at', 'desc')->get();
        }



        return $this->sendResponse($files, 'Admin file successfully.');
    }



    public function file_upload(Request $request)
    {
        $user = Auth::user();
        $input = $request->all();
        if ($user->is_admin == 1) {
            $path = $request->file('file')->store('adfiles');
            $user_id =  $user->id;

            $file = AdminDoc::updateOrCreate([
                'user_id'   =>  $input['user_id'],
                'admin_id'   =>  $user_id,
                'doc_type' => $input['type'],
                'title' =>   $input['title'],
            ], [
                'title' =>   $input['title'],
                'file_path' =>  $path,
                'user_id'   =>  $input['user_id'],
                'doc_type' => $input['type'],
                'admin_id' => $user_id

            ]);
            return $this->sendResponse($this->admin_files(), 'Admin file uploaded successfully.');
        } else {

            $path = $request->file('file')->store('files');
            $user_id =  $user->id;
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
                $assignAmin = $this->assignAdminEmail($user_id);

                Mail::send('email.file_upload', ['user' =>  $user, 'title' => $input['title']], function ($message) use ($assignAmin) {
                    $message->to($assignAmin, 'Admin')->subject('New Document Uploaded');
                    $message->from("info@onekeyclient.us", 'Admin');
                });

                $data['user'] = $user;
                $data['title'] = $input['title'];
                $data['assignAdmin'] =  $assignAmin;
                $endpoint = config('app.mail_url') . '/file_upload';

               // $response = Http::post($endpoint, $data);


               // return $response;
            }
            return $this->sendResponse($this->userfiles(), 'User file uploaded successfully.');
        }
    }
}
