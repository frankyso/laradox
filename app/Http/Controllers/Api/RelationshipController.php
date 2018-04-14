<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Table;
use App\ModelRelation;
use Auth;

class RelationshipController extends Controller
{
    public function edit($tableUuid)
    {
        dd("anjay");
    }

    public function store(Request $request)
    {
        $this->validate($request, [
    	    'functionName' 		=> 'required',
    	    'sourceTableUuid' 	=> 'required',
    	    'targetTableUuid' 	=> 'required',
    	    'relationType' 		=> 'required'
        ]);

        $user = Auth::guard()->user();

        // Checking if this is mine or not
        $sourceTable    =   Table::where('uuid',$request->get('sourceTableUuid'))->firstOrFail();
        $targetTable    =   Table::where('uuid',$request->get('targetTableUuid'))->firstOrFail();

        if($user->id != $sourceTable->schema->user_id) {
            abort(404);
        }

        if($user->id != $targetTable->schema->user_id) {
            abort(404);
        }

        $relation   =   new ModelRelation;
        $relation->source_table_id= $sourceTable->id;
        $relation->target_table_id=$targetTable->id;
        $relation->foreign_key=$request->get('foreignKey');
        $relation->function_name=$request->get('functionName');
        $relation->type=$request->get('relationType');
        $relation->save();

        // After checking it next, save process
        return response()->json(['responseCode'=>200, 'responseItem'=>""]);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
    	    'functionName' 		=> 'required',
    	    'sourceTableUuid' 	=> 'required',
    	    'targetTableUuid' 	=> 'required',
    	    'relationType' 		=> 'required'
        ]);

        $user = Auth::guard()->user();

        // Checking if this is mine or not
        $sourceTable    =   Table::where('uuid',$request->get('sourceTableUuid'))->firstOrFail();
        $targetTable    =   Table::where('uuid',$request->get('targetTableUuid'))->firstOrFail();

        if($user->id != $sourceTable->schema->user_id) {
            abort(404);
        }

        if($user->id != $targetTable->schema->user_id) {
            abort(404);
        }

        $relation   = ModelRelation::find($id);

        // Check Owner
        if($relation->sourceTable->schema->user_id!=$user->id)
        {
            abort(404);
        }

        $relation->source_table_id= $sourceTable->id;
        $relation->target_table_id=$targetTable->id;
        $relation->foreign_key=$request->get('foreignKey');
        $relation->function_name=$request->get('functionName');
        $relation->type=$request->get('relationType');
        $relation->save();

        // After checking it next, save process
        return response()->json(['responseCode'=>200, 'responseItem'=>""]);
    }

    public function destroy($id)
    {
        $user = Auth::guard()->user();
        $relation   =   ModelRelation::find($id);
        $user_id    =   $relation->sourceTable->schema->user_id;

        // Check If this is his own
        if($user->id != $user_id)
        {
            abort(404);
        }

        $relation->delete();
        return response()->json(['responseCode'=>200, 'responseItem'=>""]);
    }
}
