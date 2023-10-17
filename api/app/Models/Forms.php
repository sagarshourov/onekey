<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forms extends Model 
{
    protected $table = 'forms';
    public $timestamps = true;

    protected $fillable = [
       'title', 'content', 'content', 'visibility', 'allows_edit'
    ];

    public function from_groups()
    {
        return $this->belongsTo('FormGroups');
    }

}