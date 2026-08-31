<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'company' => [
                'id' => $this->company->id,
                'name' => $this->company->name,
            ],

            'location' => [
                'city' => $this->city,
                'region' => $this->region,
                'country' => $this->country,
            ],

            'salary' => [
                'min' => $this->salary_min,
                'max' => $this->salary_max,
                'currency' => $this->currency,
            ],

            'contract' => [
                'type' => $this->contract_type,
                'duration' => $this->contract_duration,
            ],

            'experience' => $this->experience,
            'work_mode' => $this->work_mode,
            'published_at' => $this->published_at,
            'description' => $this->description,
            'technologies' => $this->technologies
                ->pluck('name')
                ->values(),
        ];
    }
}