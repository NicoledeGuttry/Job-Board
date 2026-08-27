<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name' => 'Tech Solutions',
            'website' => 'https://company.example',
            'industry' => 'Software House',
            'employees_min' => 15,
            'employees_max' => 20,
            'description' => 'Tech Solutions sviluppa applicazioni web moderne per aziende del settore finance e retail.',
        ]);

        Company::create([
            'name' => 'Prisma Software',
            'website' => 'https://company.example',
            'industry' => 'Software House',
            'employees_min' => 35,
            'employees_max' => 50,
            'description' => 'Prisma Software è una società di sviluppo software focalizzata su innovazione, cloud e trasformazione digitale.',
        ]);

        Company::create([
            'name' => 'ShieldNet Technologies',
            'website' => 'https://company.example',
            'industry' => 'Software House',
            'employees_min' => 20,
            'employees_max' => 35,
            'description' => 'Azienda specializzata in servizi di cybersecurity, protezione delle infrastrutture IT e monitoraggio della sicurezza informatica.',
        ]);
    }
}