<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResumeFiels extends Model
{

    protected $table = 'cv_fiels';
    public $timestamps = true;


    protected $fillable = [
        'form_id', 'user_id', 'file_path', 'file_name'
    ];
}
