<?php

namespace Database\Seeders;

use App\Models\Technology;
use Illuminate\Database\Seeder;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $technologies = [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Git',
            'Laravel',
            'MySQL',
            'PHP',
            'TCP/IP',
            'DNS',
            'VPN',
            'Firewall',
            'Fondamenti di Cyber Security',
            'SQL',
        ];

        foreach ($technologies as $technology) {
            Technology::create([
                'name' => $technology,
            ]);
        }
    }
}