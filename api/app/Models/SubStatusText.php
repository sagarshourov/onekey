<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SubStatusText extends Model
{

    protected $table = 'sub_status_text';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    
}
