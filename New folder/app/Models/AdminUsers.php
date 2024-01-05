<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdminUsers extends Model
{

    protected $table = 'admin_user';
    public $timestamps = true;


    protected $fillable = [
        'id', 'user_id', 'admin_id'
    ];

  //  use SoftDeletes;

    protected $dates = ['deleted_at'];

    public function users()
    {

        return $this->hasOne(User::class, 'id', 'user_id')->select('id', 'first_name', 'last_name','email');
    }
}
