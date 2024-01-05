<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class VisaStatus extends Model 
{

    protected $table = 'visa_status';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

}