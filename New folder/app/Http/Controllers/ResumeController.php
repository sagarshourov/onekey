<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


use App\Models\ResumeFiels;


class ResumeController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $file_name = $_GET['form'];
        //
        $file = Storage::get('resume/' .  $file_name);
        return $file;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $input = $request->all();
        $path = $request->file('file')->storeAs('resume', $input['name']);;


        //$arr['baseUrl'] = 'http://127.0.0.1:8000/api/file/' . $path;
        //  $input['baseUrl'] = 'https://api.onekeyclients.info/api/file/' . $path;
        $arr['baseUrl'] = 'https://api.onekeyclients.info/api/file/' . $path;
        //return $this->sendResponse($arr, 'Resume file successfully.');
        return $this->sendResponse($arr, 'Resume file successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy()
    {
        //
        $arr['baseUrl'] = 'https://api.onekeyclients.info/api/file/';
        return $this->sendResponse($arr, 'Deleted file successfully.');
    }
}
