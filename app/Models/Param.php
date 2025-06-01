<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Param extends Model
{
    //
    protected $fillable = [
        'param_name',
        'param_value',
        'status',
    ];
}
