<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');

Route::get('/discover', 'DiscoverController@index');
// function () {
//     return view('pages.discover');
// });

Route::get('/auth/login','Auth\AuthController@getLogin');
Route::post('/auth/login','Auth\AuthController@postLogin');
Route::get('/auth/forgot',function(){return view('pages.auth.forgot');});
Route::post('/auth/forgot','Auth\AuthController@postForgotPassowrd');

Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
Route::post('password/reset', 'Auth\ResetPasswordController@postReset')->name('password.reset');

Route::get('/auth/register','Auth\AuthController@getRegister');
Route::post('/auth/register','Auth\AuthController@postRegister');
Route::get('/auth/resend','Auth\AuthController@resendEmail');
Route::get('/auth/activate/{email_token}','Auth\AuthController@getActivate');
Route::resource('/schemas','SchemaController');
Route::get('/schemas/{uuid}/export','SchemaController@export');
Route::get('api/v1/schemas/laravel/54','Api\SchemaController@fieldTypes');
Route::get('api/v1/schemas/{id}/tables','Api\TableController@tableFromSchema');
Route::get('api/v1/schemas/{id}/relationships','Api\TableController@relationshipFromSchema');
Route::get('profile/edit','ProfileController@edit');
Route::patch('profile/edit','ProfileController@update');

Route::get('/about', function(){ return view('pages.about'); });
Route::get('/roadmap', function(){ return view('pages.roadmap'); });

Route::get('/auth.register', function () {
    return view('pages.auth.login');
});

Route::get('/auth/logout', function () {
    Auth::logout();
    return redirect()->back();
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
