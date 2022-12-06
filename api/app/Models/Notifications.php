<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{

    protected $table = 'notifications';
    public $timestamps = true;


    protected $fillable = [
        'id', 'title', 'notification', 'is_read', 'reciver', 'user_id'
    ];


    public function user()
    {

        return $this->hasOne(User::class,  'id', 'user_id')->select('id', 'first_name', 'last_name', 'email');
    }
}
