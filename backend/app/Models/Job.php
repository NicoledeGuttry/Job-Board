<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Job extends Model
{
    protected $table = 'job_posts';
    protected $fillable = [
        'company_id',
        'title',
        'city',
        'region',
        'country',
        'salary_min',
        'salary_max',
        'currency',
        'contract_type',
        'contract_duration',
        'experience',
        'work_mode',
        'published_at',
        'description',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(
            Technology::class,
            'job_post_technology',
            'job_post_id',
            'technology_id'
        );
    }
}
