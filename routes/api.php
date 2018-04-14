<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function () {
	Route::resource('/schemas','Api\SchemaController');

	Route::post('/tables/{id}/position','Api\TableController@updateTablePosition');
	Route::post('/tables/{id}/sortfield','Api\TableController@sortField');
	Route::resource('/tables','Api\TableController');
	Route::resource('/fields','Api\FieldController');
	Route::resource('/relationships','Api\RelationshipController');
	// Route::post('/short', 'UrlMapperController@store');
});