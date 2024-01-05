<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visa extends Model 
{

    protected $table = 'visas';
    public $timestamps = true;

    public function unversities()
    {
        return $this->hasOne('Universty');
    }

    public function visa_status()
    {
        return $this->hasOne('VisaStatus');
    }

}