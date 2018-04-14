<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mail;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function sendEmailConfirmation()
    {
        $data['confirmation_url']   =    url('auth/activate/'.$this->email_token);

        $email  =  $this->email; 
        Mail::send('email.auth.confirmation', $data, function ($m) use ($email) {
            $m->to($email)->subject('Email Confirmation');
        });
    }

    public function schemes()
    {
        return $this->hasMany('App\Schema');
    }

    public function sharedSchemas(){
        return $this->hasMany('App\SharedSchema');
    }
}
