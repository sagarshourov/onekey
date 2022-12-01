<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAppStatus extends Model 
{

    protected $table = 'user_app_status';
    public $timestamps = true;


    
    protected $fillable = [
        'id', 'main', 'sub', 'user_id', 'status_text', 'sub_status_text'
     ];

    public function status()
    {
        return $this->hasOne('StatusText');
    }

    public function users()
    {
        return $this->hasOne('Users');
    }

    public function sub_status()
    {
        return $this->hasOne('SubStatusText');
    }

}