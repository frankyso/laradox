<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Field extends Model
{
    use SoftDeletes;
    public function table()
    {
    	return $this->belongsTo('App\Table');
    }
}
