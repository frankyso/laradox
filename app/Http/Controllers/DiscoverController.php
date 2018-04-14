<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schema;

class DiscoverController extends Controller
{
    public function index(Request $request)
    {
        $schemas = Schema::search($request->get('keywords'))->where('is_private', 0)->paginate(12);
        return view('pages.discover')->with('schemas', $schemas)->with('keywords',$request->get('keywords'));
    }
}
