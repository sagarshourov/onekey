<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


use App\Models\Universty;

class StudentInfo extends Model
{

    protected $table = 'student_info';
    public $timestamps = true;

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'code',
        'user_id',
        'interview_date',
        'interview_time',
        'university',
        'visa_status',
        'visa_type',
        'ds_160_num',
        'us_consultant'
    ];

    public function university()
    {
        return $this->hasOne(Universty::class, 'id', 'university')->select('id', 'title');
    }

    public function visa_type()
    {
        return $this->hasOne(VisaType::class, 'id','visa_type')->select('id', 'title');
    }
}
