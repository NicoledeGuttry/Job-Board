<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    protected $fillable = [
        'name',
        'website',
        'industry',
        'employees_min',
        'employees_max',
        'description',
    ];
    public function jobs(): HasMany
    {
        return $this->hasMany(Job::class);
    }
}
