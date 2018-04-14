<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Table extends Model
{
    use SoftDeletes;
    public function schema()
    {
    	return $this->belongsTo('App\Schema');
    }

    public function fields()
    {
    	return $this->hasMany('App\Field');
    }

    public function modelRelationshipsPrimary()
    {
        return $this->hasMany('App\ModelRelation','source_table_id');
    }

    public function modelRelationshipsForeign()
    {
        return $this->hasMany('App\ModelRelation','target_table_id');
    }
}
