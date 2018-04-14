<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Schema;

class HomeController extends Controller
{
    public function index()
    {
    	if (!Auth::check()) {
            $schemes     =   Schema::limit(12)->where('is_private','0')->get();
    		return view('pages.home')->with('schemas', $schemes);
    	}
    	else
    	{
            $schemes     =   Auth::user()->schemes()->get();
    		return view('pages.home-logged-in')->with('schemes',$schemes);
    	}
    }
}
