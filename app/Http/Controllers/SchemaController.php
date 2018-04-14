<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schema;
use Auth;
use Storage;
use App\Services\MigrationGenerator\MigrationGenerator;

class SchemaController extends Controller
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
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'namespace'=>'required'
        ]);

        $schema             =   new Schema;
        $schema->uuid       =   (string) \Uuid::generate();
        $schema->name       =   title_case($request->get('name'));
        $schema->namespace  =   $request->get('namespace');
        $schema->is_private =   $request->get('is_private', 0);
        $schema->user_id    =   Auth::user()->id;
        $schema->save();
        
        return redirect('schemas/'.$schema->uuid);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($uuid)
    {

        $schema     =   Schema::where('uuid',$uuid)->first();
        if ($schema==null) {
            return redirect('/');
        }

        if (!Auth::check()) {
            return view('pages.designer.guest')->with('uuid',$uuid)->with('namespace',$schema->namespace)->with('name',$schema->name)->with('is_private',$schema->is_private);
        }
        elseif ($schema->user_id == Auth::user()->id) {
            return view('pages.designer.owner')->with('uuid',$uuid)->with('namespace',$schema->namespace)->with('name',$schema->name)->with('is_private',$schema->is_private);
        }
        else
        {
            return view('pages.designer.guest')->with('uuid',$uuid)->with('namespace',$schema->namespace)->with('name',$schema->name)->with('is_private',$schema->is_private);
        }
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
        $this->validate($request, [
            'name' => 'required',
            'namespace'=>'required'
        ]);

        $schema             =   Schema::where('uuid','=', $id)->first();
        
        if($schema->user_id != Auth::user()->id)
        {
            return redirect()->back();
        }

        $schema->name       =   title_case($request->get('name'));
        $schema->namespace  =   $request->get('namespace');
        $schema->is_private =   $request->get('is_private', 0);
        $schema->save();
        
        return redirect('schemas/'.$schema->uuid);
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

    public function export($id)
    {
        $schema             =   Schema::where('uuid','=', $id)->first();
        // if($schema->user_id != Auth::user()->id) {
        //     return redirect()->back();
        // }

        $migration  =   new MigrationGenerator($schema);
        $downloadLink   =   $migration->generate();
        
        return response()->download($downloadLink);
    }
}