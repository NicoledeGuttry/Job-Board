<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Technology extends Model
{
    protected $fillable = [
        'name',
    ];

    public function jobs(): BelongsToMany
    {
        return $this->belongsToMany(
            Job::class,
            'job_post_technology',
            'technology_id',
            'job_post_id'
        );
    }
}