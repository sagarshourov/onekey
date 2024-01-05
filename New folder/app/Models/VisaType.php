<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class VisaType extends Model 
{

    protected $table = 'visa_type';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

}