<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{

    protected $table = 'files';
    public $timestamps = true;

    protected $fillable = [
        'id', 'title', 'file_path', 'doc_type', 'user_id'
    ];

    public function docTypes()
    {
        return $this->belongsTo(DocType::class, 'doc_type', 'id')->select('id', 'title');
    }
}
