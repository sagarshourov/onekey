<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Laravel\Sanctum\HasApiTokens;

use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;


    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'email', 'password', 'is_admin', 'user_phone', 'whatsapp', 'birth_date', 'gendar', 'package', 'status'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function student_info()
    {
        return $this->hasOne(StudentInfo::class, 'user_id', 'id');
    }

    public function profile()
    {
        return $this->hasMany(Files::class, 'user_id', 'id');
    }

    public function package()
    {
        return $this->hasOne(Packages::class, 'package', 'id');
    }

    public function data()
    {
        return $this->hasOne(FormData::class, 'user_id', 'id')->select('id', 'user_id', 'content');
    }
}
