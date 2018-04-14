<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Validator;
use Session;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
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
    public function edit($id=0)
    {
        if(!Auth::check()){
            return redirect()->back();
        }

        return view('pages.profile')->with('user', Auth::user());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id=0)
    {
        $rules      = [
            'name'         => 'required',
            'password'      => 'confirmed',
        ];

        $validator  = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
        return redirect()->back()
                ->withErrors($validator)
                ->withInput($request->except('password'));
        }

        $user = Auth::user();
        $user->name    	    =   $request->get('name');

        if($request->get('password')) {
            $user->password 	=   bcrypt($request->get('password'));
        }
        $user->save();

        Session::flash('message', 'Profile Updated!'); 
        Session::flash('alert-class', 'alert-success');

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
