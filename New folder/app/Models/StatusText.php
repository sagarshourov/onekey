<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class StatusText extends Model 
{

    protected $table = 'status_text';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    public function sub_status()
    {

        return $this->hasMany(SubStatusText::class,'status_text','id')->select('id','title','status_text');
    }

}