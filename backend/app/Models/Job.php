<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Job extends Model
{
    protected $table = 'job_posts';
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }
}
