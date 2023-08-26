<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Forms extends Model 
{
    use SoftDeletes;
    protected $table = 'forms';
    public $timestamps = true;

    protected $dates = ['deleted_at'];

    protected $fillable = [
       'title', 'content', 'content', 'visibility', 'allows_edit'
    ];

    public function from_groups()
    {
        return $this->belongsTo('FormGroups');
    }

}