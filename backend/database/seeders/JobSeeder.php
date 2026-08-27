<?php

namespace Database\Seeders;

use App\Models\Job;
use Illuminate\Database\Seeder;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Job::create([
            'company_id' => 1,
            'title' => 'Junior Frontend Developer',
            'city' => 'Roma',
            'region' => 'Lazio',
            'country' => 'Italia',
            'salary_min' => 18000,
            'salary_max' => 22000,
            'currency' => 'EUR',
            'contract_type' => 'Stage',
            'contract_duration' => '6 mesi',
            'experience' => 'Junior',
            'work_mode' => 'Hybrid',
            'published_at' => '2026-07-28',
            'description' => 'Entrerai a far parte del team Frontend occupandoti dello sviluppo di interfacce moderne utilizzando React',
        ]);

        Job::create([
            'company_id' => 2,
            'title' => 'FullStack Web Developer',
            'city' => 'Milano',
            'region' => 'Lombardia',
            'country' => 'Italia',
            'salary_min' => 22000,
            'salary_max' => 25000,
            'currency' => 'EUR',
            'contract_type' => 'Tempo indeterminato',
            'contract_duration' => null,
            'experience' => 'Middle',
            'work_mode' => 'On-site',
            'published_at' => '2026-08-03',
            'description' => 'Entrerai a far parte di un team strutturato abituato a lavorare in modalità Agile, dando il tuo contributo per il mantenimento di progetti in corso e dello sviluppo dei successivi',
        ]);

        Job::create([
            'company_id' => 3,
            'title' => 'Stage Cyber Security Analyst',
            'city' => 'Milano',
            'region' => 'Lombardia',
            'country' => 'Italia',
            'salary_min' => 16000,
            'salary_max' => 18000,
            'currency' => 'EUR',
            'contract_type' => 'Stage',
            'contract_duration' => '6 mesi',
            'experience' => 'Prima esperienza',
            'work_mode' => 'On-site',
            'published_at' => '2026-07-23',
            'description' => 'La risorsa affiancherà i professionisti del team nelle attività di monitoraggio degli eventi di sicurezza, analisi delle vulnerabilità e gestione degli incidenti informatici',
        ]);
    }
}