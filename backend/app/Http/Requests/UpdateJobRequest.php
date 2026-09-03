<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateJobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'company_id' => ['required', 'integer', 'exists:companies,id'],
            'title' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'region' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
            'salary_min' => ['nullable', 'integer', 'min:0'],
            'salary_max' => ['nullable', 'integer', 'min:0', 'gte:salary_min'],
            'currency' => ['required', 'string', 'size:3'],
            'contract_type' => ['required', 'string', 'max:255'],
            'contract_duration' => ['nullable', 'string', 'max:255'],
            'experience' => ['required', 'string', 'max:255'],
            'work_mode' => ['required', 'string', 'max:255'],
            'published_at' => ['required', 'date'],
            'description' => ['required', 'string'],
            'technologies' => ['required', 'array', 'min:1'],
            'technologies.*' => ['integer', 'exists:technologies,id'],
        ];
    }
}