<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Validator;
use Crypt;
use Auth;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;
use Session;

class AuthController extends Controller
{
    public function getLogin(Request $request)
    {
    	return view('pages.auth.login');
    }

    public function postLogin(Request $request)
    {
        $rules      = [
                        'email'          => 'required',
                        'password'         => 'required',
                    ];
        $validator  = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect()->back()
                    ->withErrors($validator)
                    ->withInput($request->except('password'));
        }

        if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')])) {
            return redirect('/');
        }

        return redirect()->back();
    }

    public function getRegister(Request $request)
    {
    	return view('pages.auth.register');
    }

    public function postRegister(Request $request)
    {
        $rules      = [
                        'email'         => 'required|unique:users,email|email',
                        'password'      => 'required|confirmed',
                    ];

        $validator  = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect()->back()
                    ->withErrors($validator)
                    ->withInput($request->except('password'));
        }
        
        $user = new User;
        $user->email    	=   $request->get('email');
        $user->name    	    =   $request->get('name');
        $user->password 	=   bcrypt($request->get('password'));
        $user->email_token  =   str_random(15);
        $user->api_token 	=   str_random(60);
        $user->save();

        $user->sendEmailConfirmation();

        return view('pages/auth/register-success');
    }

    public function resendEmail()
    {
        if(Auth::user()->confirmed==0) {
            Auth::user()->sendEmailConfirmation();
        }

        return redirect()->back();
    }

    public function postForgotPassowrd(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);

        $response = \Password::sendResetLink($request->only('email'), function (Message $message) {
           $message->subject("Your Password Reset Link");
        });

        switch ($response) {
            case Password::RESET_LINK_SENT:
                Session::flash('message', 'Your link reset password has been sent to your email!'); 
                Session::flash('alert-class', 'alert-success');
                return redirect()->back();

            case Password::INVALID_USER:
                return redirect()->back()->withErrors(['email' => trans($response)]);
        }
    }

    public function getActivate($email_token)
    {
    	$user   =   \App\User::where('email_token',$email_token)->first();
    	if ($user==null) {
    		return redirect('/');
    	}
    	$user->confirmed 	=	1;
    	$user->save();    

    	return view('pages/auth/confirmed');
    }
}
