<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class SchemaController extends Controller
{
	public function index()
	{
		// 		Auth::guard()->user();
		error(401);
	}
	
	public function show($uuid)
	{
		$scheme 	=	Auth::guard()->user()->schemes()->where('uuid',$uuid)->first();
		if ($scheme==null) {
			return abort(404);
		}
		$scheme 	=	collect($scheme->toArray())->forget('id');
		return response()->json(['responseCode'=>200, 'responseItem'=>$scheme]);
	}
	
	public function fieldTypes()
	{
		include(base_path('resources\fieldTypes\54.php'));
		return response()->json(['responseCode'=>200, 'responseItem'=>$fieldTypes]);
	}

	public function destroy($uuid)
	{
		$scheme 	=	Auth::guard()->user()->schemes()->where('uuid',$uuid)->first();
		if ($scheme==null) {
			return abort(404);
		}

		$scheme->delete();
		return response()->json(['responseCode'=>200, 'responseItem'=>'']);
	}
}
