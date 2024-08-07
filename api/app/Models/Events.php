<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{

    protected $table = 'events';
    public $timestamps = true;
    protected $fillable = [
        'id', 'user_id', 'notes', 'note_date'
    ];



    public function users()
    {
        return $this->hasOne(User::class, 'id', 'user_id')->select('id', 'first_name', 'last_name', 'email');
    }
}
