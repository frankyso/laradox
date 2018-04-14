<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Schema extends Model
{
    use Searchable;
    use SoftDeletes;
    
    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function tables()
    {
    	return $this->hasMany('App\Table');
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return $array;
    }

    public function searchableAs()
    {
        return config('algolia.index');
    }

    public function sharedSchemas(){
        return $this->hasMany('App\SharedSchema');
    }
}
