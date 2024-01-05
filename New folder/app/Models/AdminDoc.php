<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdminDoc extends Model 
{

    protected $table = 'admin_doc';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'id', 'title', 'file_path', 'doc_type', 'user_id' ,  'admin_id'
    ];

  

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id', 'id')->select('id', 'first_name','email');
    }

 

    public function docType()
    {
        return $this->belongsTo(DocType::class, 'doc_type', 'id')->select('id', 'title');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'first_name','email');
    }

}