<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Field;
use App\Table;
use Auth;
use Validator;

class FieldController extends Controller
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
        $validator = Validator::make($request->all(), [
            'tableUuid'         => 'required',
            'tableName'         => 'required',
            'name'              => '',
            'length'            => '',
            'decimal'           => '',
            'enum'              => 'array',
            'optionValues'      => 'array'
        ]);

        // Check Table
        $user       =   Auth::guard()->user();
        $table      =   Table::where('uuid','=',$request->get('tableUuid'))->first();
        if ($table==null) {
            return abort(404);
        }

        $schema     =   $table->schema;
        if ($schema->user_id !=     $user->id) {
            return abort(404);
        }

        $validator->validate();

        $field  =   new Field;
        $field->uuid                =   \Uuid::generate()->string;
        $field->type                =   $request->get('type');
        $field->name                =   $request->get('name');
        $field->length              =   $request->get('length');
        $field->decimal             =   $request->get('decimal');
        $field->enum                =   json_encode($request->get('enum'));
        $field->attrib_increment    =   $request->get('optionValues.increment',0);
        $field->attrib_unsigned     =   $request->get('optionValues.unsigned',0);
        $field->attrib_primary      =   $request->get('optionValues.primary',0);
        $field->attrib_index        =   $request->get('optionValues.index',0);
        $field->attrib_nullable     =   $request->get('optionValues.nullable',0);
        $field->attrib_unique       =   $request->get('optionValues.unique',0);
        $field->attrib_fillable     =   $request->get('optionValues.fillable',0);
        $field->attrib_guarded      =   $request->get('optionValues.guarded',0);
        $field->attrib_visible      =   $request->get('optionValues.visible',0);
        $field->attrib_hidden       =   $request->get('optionValues.hidden',0);
        $field->attrib_foreign      =   $request->get('optionValues.foreign',0);
        $field->table_id            =   $table->id;
        $field->order               =   $table->fields()->count()+1;
        $field->save();

        // if ($request->get('optionValues.foreign',0)) {
        //     $field->attrib_foreign_field_id     =   $request->get('optionValues.foreignValue.fieldUuid');
        //     $field->attrib_foreign_on_delete    =   $request->get('optionValues.foreignValue.onDelete');
        //     $field->attrib_foreign_on_update    =   $request->get('optionValues.foreignValue.onUpdate');
        // }

        $collection     =   [
            'uuid'              =>  $field->uuid,
            'name'              =>  $field->name,
            'type'              =>  $field->type,
            'length'            =>  $field->length,
            'default'           =>  $field->default,
            'enum'              =>  $request->get('enum'),
            'options'           =>  $request->get('optionValues'),
            'order'             =>  $field->order,
        ];

        return response()->json(['responseCode'=>200, 'responseItem'=>$collection]);

        // tableUuid:null,
        // tableName:null,
        // name:null,
        // type:null,
        // typeDescription:null,
        // length:null,
        // decimal:null,
        // default:null,
        // enum:[""],
        // options:{
        //     autoIncrementCheck:false,
        //     unsignedCheck:false,
        //     primaryKeyCheck:false,
        //     indexCheck:false,
        //     nullableCheck:false,
        //     fillableCheck:false,
        //     guardedCheck:false,
        //     visibleCheck:false,
        //     hiddenCheck:false,
        //     foreignKeyCheck:false,
        //     uniqueCheck:false,

        //     nameVisibility:false,
        //     lengthVisibility:false,
        //     lengthDecimalVisibility:false,
        //     arrayVisibility:false,
        //     defaultValueVisibility:false,
        // },
        // optionValues:{

        // }
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
        $validator = Validator::make($request->all(), [
            'tableUuid'         => 'required',
            'tableName'         => 'required',
            'uuid'              => 'required',
            'name'              => '',
            'length'            => '',
            'decimal'           => '',
            'enum'              => 'array',
            'optionValues'      => 'array'
        ]);

        // Check Table
        $user       =   Auth::guard()->user();
        $table      =   Table::where('uuid','=',$request->get('tableUuid'))->first();
        if ($table==null) {
            return abort(404);
        }

        $schema     =   $table->schema;
        if ($schema->user_id !=     $user->id) {
            return abort(404);
        }

        $validator->validate();

        // Updating Field
        $field  =   $table->fields()->where('uuid','=',$id)->firstOrFail();
        // $field->uuid                =   \Uuid::generate()->string;
        $field->type                =   $request->get('type');
        $field->name                =   $request->get('name');
        $field->length              =   $request->get('length');
        $field->decimal             =   $request->get('decimal');
        $field->enum                =   json_encode($request->get('enum'));
        $field->attrib_increment    =   $request->get('optionValues.increment',0);
        $field->attrib_unsigned     =   $request->get('optionValues.unsigned',0);
        $field->attrib_primary      =   $request->get('optionValues.primary',0);
        $field->attrib_index        =   $request->get('optionValues.index',0);
        $field->attrib_nullable     =   $request->get('optionValues.nullable',0);
        $field->attrib_unique       =   $request->get('optionValues.unique',0);
        $field->attrib_fillable     =   $request->get('optionValues.fillable',0);
        $field->attrib_guarded      =   $request->get('optionValues.guarded',0);
        $field->attrib_visible      =   $request->get('optionValues.visible',0);
        $field->attrib_hidden       =   $request->get('optionValues.hidden',0);
        $field->attrib_foreign      =   $request->get('optionValues.foreign',0);
        // $field->table_id            =   $table->id;
        // $field->order               =   $table->fields()->count()+1;
        $field->save();

        // if ($request->get('optionValues.foreign',0)) {
        //     $field->attrib_foreign_field_id     =   $request->get('optionValues.foreignValue.fieldUuid');
        //     $field->attrib_foreign_on_delete    =   $request->get('optionValues.foreignValue.onDelete');
        //     $field->attrib_foreign_on_update    =   $request->get('optionValues.foreignValue.onUpdate');
        // }

        $collection     =   [
            'uuid'              =>  $field->uuid,
            'name'              =>  $field->name,
            'type'              =>  $field->type,
            'length'            =>  $field->length,
            'default'           =>  $field->default,
            'enum'              =>  $request->get('enum'),
            'options'           =>  $request->get('optionValues'),
            'order'             =>  $field->order,
        ];

        return response()->json(['responseCode'=>200, 'responseItem'=>$collection]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $field  =   Field::where('uuid','=',$id)->first();        
        if($field->table->schema->user_id!=Auth::user()->id)
        {  
            abort(404);
        }
        else
        {
            $field->delete();
        }

        return response()->json(['responseCode'=>200]);
    }
}
