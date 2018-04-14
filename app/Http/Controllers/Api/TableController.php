<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Table;
use App\Schema;
use App\Field;
use Auth;

class TableController extends Controller
{
    public function tableFromSchema($uuid)
    {
    	$scheme 	=	Schema::where('uuid',$uuid)->first();
    	if ($scheme==null) {
    		return abort(404);
    	}

    	$tables 	=	$scheme->tables()->get();

    	$tableItems 	=	[];
    	foreach ($tables as $tablekey => $table) {
    		$fieldItems 	=	[];
    		foreach ($table->fields()->orderBy('order','ASC')->get() as $fieldkey => $field) {
    			$fieldItems[]     =   [
    			    'uuid'              =>  $field->uuid,
    			    'name'              =>  $field->name,
    			    'type'              =>  $field->type,
    			    'length'            =>  $field->length,
    			    'default'           =>  $field->default,
    			    'enum'              =>  json_decode($field->enum, true),
    			    'options'           =>  [
    			    	'increment' 	=>	$field->attrib_increment,
    			    	'unsigned' 		=>	$field->attrib_unsigned,
    			    	'primary' 		=>	$field->attrib_primary,
    			    	'index' 		=>	$field->attrib_index,
    			    	'nullable' 		=>	$field->attrib_nullable,
    			    	'unique' 		=>	$field->attrib_unique,
    			    	'fillable' 		=>	$field->attrib_fillable,
    			    	'guarded' 		=>	$field->attrib_guarded,
    			    	'visible' 		=>	$field->attrib_visible,
    			    	'hidden' 		=>	$field->attrib_hidden,
    			    	'foreign' 		=>	$field->attrib_foreign,
    			    ],
    			    'order'             =>  $field->order,
    			];
    		}
    		

    		$tableItems[]	=	[
    			'uuid'		=>	$table->uuid,
    			'modelName'	=>	$table->model_name,
    			'index'		=>	[],
    			'style'		=>	[
	    							'position'	=>[
	    								'top'		=>	$table->top_position,
	    								'left'		=>	$table->left_position,
	    							],
	    							'tableColorClass' 	=>	$table->color
	    						],
	    		'name'		=>	$table->name,
	    		'fields'	=> 	$fieldItems

    		];
    	}

    	return response()->json(['responseCode'=>200, 'responseItem'=>$tableItems]);
    }

    public function store(Request $request)
    {
    	$this->validate($request, [
    	    'name' 				=> 'required',
    	    'modelName' 		=> 'required',
    	    'tableColorClass' 	=> 'required',
    	    'schemaUuid' 		=> 'required'
    	]);

    	// Checking Schema UUID
    	$scheme 				=	Auth::guard()->user()->schemes()->where('uuid',$request->get('schemaUuid'))->first();
    	if ($scheme==null) {
    		return abort(404);
    	}

    	// Checking name or modelname is unique
    	

    	$table 	=	new Table;
    	$table->uuid 			=	\Uuid::generate()->string;
    	$table->name 			=	$request->get('name');
    	$table->model_name 		=	$request->get('modelName');
    	$table->color 			=	$request->get('tableColorClass');
    	$table->schema_id 		=	$scheme->id;
    	$table->top_position	=	100;
    	$table->left_position	=	10;
		$table->save();
		
		// Checking basic field
		if($request->get('incrementalId')) {
			$field  =   new Field;
			$field->uuid                =   \Uuid::generate()->string;
			$field->type                =   "increments";
			$field->name                =   "id";
			$field->length              =   null;;
			$field->decimal             =   null;
			$field->enum                =   json_encode([]);
			$field->attrib_increment    =   0;
			$field->attrib_unsigned     =   0;
			$field->attrib_primary      =   0;
			$field->attrib_index        =   0;
			$field->attrib_nullable     =   0;
			$field->attrib_unique       =   0;
			$field->attrib_fillable     =   0;
			$field->attrib_guarded      =   0;
			$field->attrib_visible      =   0;
			$field->attrib_hidden       =   0;
			$field->attrib_foreign      =   0;
			$field->table_id            =   $table->id;
			$field->order               =   $table->fields()->count()+1;
			$field->save();
		}

		if($request->get('timestamps')) {
			$field  =   new Field;
			$field->uuid                =   \Uuid::generate()->string;
			$field->type                =   "timestamps";
			$field->name                =   "";
			$field->length              =   null;;
			$field->decimal             =   null;
			$field->enum                =   json_encode([]);
			$field->attrib_increment    =   0;
			$field->attrib_unsigned     =   0;
			$field->attrib_primary      =   0;
			$field->attrib_index        =   0;
			$field->attrib_nullable     =   0;
			$field->attrib_unique       =   0;
			$field->attrib_fillable     =   0;
			$field->attrib_guarded      =   0;
			$field->attrib_visible      =   0;
			$field->attrib_hidden       =   0;
			$field->attrib_foreign      =   0;
			$field->table_id            =   $table->id;
			$field->order               =   $table->fields()->count()+1;
			$field->save();
		}

		if($request->get('softDeletes')) {
			$field  =   new Field;
			$field->uuid                =   \Uuid::generate()->string;
			$field->type                =   "softDeletes";
			$field->name                =   "";
			$field->length              =   null;;
			$field->decimal             =   null;
			$field->enum                =   json_encode([]);
			$field->attrib_increment    =   0;
			$field->attrib_unsigned     =   0;
			$field->attrib_primary      =   0;
			$field->attrib_index        =   0;
			$field->attrib_nullable     =   0;
			$field->attrib_unique       =   0;
			$field->attrib_fillable     =   0;
			$field->attrib_guarded      =   0;
			$field->attrib_visible      =   0;
			$field->attrib_hidden       =   0;
			$field->attrib_foreign      =   0;
			$field->table_id            =   $table->id;
			$field->order               =   $table->fields()->count()+1;
			$field->save();
		}

		$fieldItems 	=	[];
		foreach ($table->fields()->orderBy('order','ASC')->get() as $fieldkey => $field) {
			$fieldItems[]     =   [
				'uuid'              =>  $field->uuid,
				'name'              =>  $field->name,
				'type'              =>  $field->type,
				'length'            =>  $field->length,
				'default'           =>  $field->default,
				'enum'              =>  json_decode($field->enum, true),
				'options'           =>  [
					'increment' 	=>	$field->attrib_increment,
					'unsigned' 		=>	$field->attrib_unsigned,
					'primary' 		=>	$field->attrib_primary,
					'index' 		=>	$field->attrib_index,
					'nullable' 		=>	$field->attrib_nullable,
					'unique' 		=>	$field->attrib_unique,
					'fillable' 		=>	$field->attrib_fillable,
					'guarded' 		=>	$field->attrib_guarded,
					'visible' 		=>	$field->attrib_visible,
					'hidden' 		=>	$field->attrib_hidden,
					'foreign' 		=>	$field->attrib_foreign,
				],
				'order'             =>  $field->order,
			];
		}

    	/*Composing Result*/
    	$collection 	=	[
    		'uuid'	 			=>	$table->uuid,
    		'name'	 			=>	$table->name,
    		'modelName' 		=>	$table->model_name,
    		'fields'			=>	$fieldItems,
    		'index' 			=> 	[],
    		'style'	 			=>	[
    									'position'=>[
    										'top'=>100,
    										'left'=>10
    									],
    									'tableColorClass' 	=>	$table->color
    								],
    	];

    	return response()->json(['responseCode'=>200, 'responseItem'=>$collection]);
	}
	
	public function update(Request $request, $uuid)
	{
		$this->validate($request, [
    	    'name' 				=> 'required',
    	    'modelName' 		=> 'required',
    	    'tableColorClass' 	=> 'required',
    	]);

    	// Checking name or modelname is unique
    	

		$table 	=	Table::where('uuid', '=', $uuid)->first();
		if($table==null){
			abort(404);
		}
		
		if($table->schema->user_id != Auth::guard()->user()->id)
		{
			abort(404);
		}

    	$table->name 			=	$request->get('name');
    	$table->model_name 		=	$request->get('modelName');
    	$table->color 			=	$request->get('tableColorClass');
    	// $table->top_position	=	100;
    	// $table->left_position	=	10;
    	$table->save();

    	/*Composing Result*/
    	$collection 	=	[
    		'uuid'	 			=>	$table->uuid,
    		'name'	 			=>	$table->name,
    		'modelName' 		=>	$table->model_name,
    		'fields'			=>	[],
    		'index' 			=> 	[],
    		'style'	 			=>	[
    									'position'=>[
    										'top'=> $table->top_position,
    										'left'=> $table->left_position
    									],
    									'tableColorClass' 	=>	$table->color
    								],
    	];

    	return response()->json(['responseCode'=>200, 'responseItem'=>$collection]);
	}

    public function updateTablePosition(Request $request, $uuid)
    {
        $table  =   Table::where('uuid','=',$uuid)->first();
        if ($table==null) {
            abort(404);
        }

        if (Auth::guard()->user()->id != $table->schema->user_id) {
            abort(404);
        }

        $table->top_position        =   ($request->get('top') <= 100)? 100 : $request->get('top');
        $table->left_position       =   ($request->get('left') <= 10)? 10 : $request->get('left');
        $table->save();
	}
	
	public function sortField(Request $request, $uuid)
	{
		$table  =   Table::where('uuid','=',$uuid)->first();
		if($table->schema->user_id 	!=	Auth::user()->id)
		{
			return abort(404);
		}

		foreach($request->all() as $key => $field)
		{
			// Parsing Data
			$field =	str_replace($uuid."_" , "" , $field);

			// Updating Sorting
			$field 	=	$table->fields()->where('uuid','=',$field)->first();
			$field->order 	=	$key + 1;
			$field->save();
		}
	}

	/**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $table  =   Table::where('uuid','=',$id)->first();        
        if($table->schema->user_id!=Auth::user()->id)
        {  
            abort(404);
        }
        else
        {
            $table->delete();
        }

        return response()->json(['responseCode'=>200]);
	}
	
	public function relationshipFromSchema($uuid)
	{
		$scheme 	=	Schema::where('uuid',$uuid)->first();
    	if ($scheme==null) {
    		return abort(404);
		}

		$schemeArray 	=	[];
		foreach($scheme->tables as $table)
		{
			foreach($table->modelRelationshipsPrimary as $relationship)
			{
				$push 	=	[
					"functionName"=>$relationship->function_name,
					"primary"=>[
						"table"=>$relationship->sourceTable->uuid,
						"modelName"=>$relationship->sourceTable->model_name,
						"tableObject"=>$relationship->sourceTable
					],
					"foreign"=>[
						"table"=>$relationship->targetTable->uuid,
						"modelName"=>$relationship->targetTable->model_name,
						"foreignKey"=>$relationship->foreign_key
					],
					"id"=>$relationship->id,
					"type"=>$relationship->type
				];

				$schemeArray[] =	$push;
			}
		}

		return response()->json(['responseCode'=>200,'responseItem'=>$schemeArray]);
	}
}
