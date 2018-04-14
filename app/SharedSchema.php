<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SharedSchema extends Model
{
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function schema() {
        return $this->belongsTo('App\Schema');
    }
}
