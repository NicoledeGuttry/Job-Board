<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobResource;
use App\Models\Job;
use Illuminate\Http\Request;
use App\Http\Requests\StoreJobRequest;

class JobController extends Controller
{
    public function index(Request $request)
    {
        $query = Job::with([
            'company',
            'technologies',
        ]);

        if ($request->filled('search')) {
            $search = $request->search;

            $query->where(function ($query) use ($search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%")
                    ->orWhereHas('company', function ($query) use ($search) {
                        $query->where('name', 'like', "%{$search}%");
                    });
            });
        }

        if ($request->filled('technology')) {
            $query->whereHas('technologies', function ($query) use ($request) {
                $query->where('name', $request->technology);
            });
        }

        $jobs = $query
            ->orderByDesc('published_at')
            ->paginate(10);

        return JobResource::collection($jobs);
    }

    public function show(Job $job)
    {
        $job->load([
            'company',
            'technologies',
        ]);

        return new JobResource($job);
    }
    public function store(StoreJobRequest $request)
    {
        $validated = $request->validated();
        $technologyIds = $validated['technologies'];

        unset($validated['technologies']);

        $job = Job::create($validated);
        $job->technologies()->sync($technologyIds);
        $job->load([
            'company',
            'technologies',
        ]);

        return (new JobResource($job))
            ->response()
            ->setStatusCode(201);
    }
}
