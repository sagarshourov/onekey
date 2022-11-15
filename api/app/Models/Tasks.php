<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Statges;

class Tasks extends Model
{
    protected $table = 'tasks';
    public $timestamps = true;
    public function stage()
    {
        return $this->hasOne(Statges::class, 'id', 'stage')->select('id','title');
    }
    public function users()
    {
        return $this->hasOne(User::class, 'id', 'user_id')->select('id','first_name','last_name','email');
    }
}
