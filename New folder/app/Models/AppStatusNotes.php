<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AppStatusNotes extends Model
{

    protected $table = 'app_status_notes';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];


    protected $fillable = [
        'id', 'message', 'status_text', 'user_id', 'created_by', 'is_read'
    ];


    public function status()
    {

        return $this->hasOne(StatusText::class, 'id', 'status_text')->select('id', 'title');
    }

    public function created_by()
    {

        return $this->hasOne(User::class,  'id', 'created_by')->select('id', 'first_name', 'last_name','email');
    }
}
