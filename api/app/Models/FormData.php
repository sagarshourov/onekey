<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FormData extends Model
{

    protected $table = 'form_data';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];


    protected $fillable = [
        'id', 'form_id', 'content', 'user_id'
    ];



    public function form()
    {
        return $this->belongsTo(Forms::class)->select('id', 'title');
    }



    public function user()
    {
        return $this->belongsTo(User::class)->select('id', 'first_name', 'last_name');;
    }
}
