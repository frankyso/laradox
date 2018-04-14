<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ModelRelation extends Model
{
    use SoftDeletes;
	public function sourceTable()
	{
        return $this->belongsTo('App\Table','source_table_id');
	}
	
    public function targetTable()
    {
        return $this->belongsTo('App\Table','target_table_id');
    }
}
