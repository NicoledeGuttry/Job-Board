const jobs = [
  {
    id: 1,

    title: 'Junior Frontend Developer',

    company: {
      name: 'Tech Solutions',
      website: 'https://company.example',
      industry: 'Software House',

      employees: {
        min: 15,
        max: 20,
      },

      description:
        'Tech Solutions sviluppa applicazioni web moderne per aziende del settore finance e retail.',
    },

    location: {
      city: 'Roma',
      region: 'Lazio',
      country: 'Italia',
    },

    salary: {
      min: 18000,
      max: 22000,
      currency: 'EUR',
    },

    contract: {
      type: 'Stage',
      duration: '6 mesi',
    },

    experience: 'Junior',

    workMode: 'Hybrid',

    publishedAt: '2026-07-28',

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Git',
    ],

    requirements: {
      technical: [
        'Conoscenza base di React',
        'Git',
        'Responsive Design',
        'REST API',
      ],

      soft: [
        'Problem solving',
        'Precisione',
        'Lavoro in team',
      ],
    },

    benefits: [
      'Buoni pasto',
      'Parcheggio gratuito',
      'Assicurazione sanitaria',
    ],

    description:
      'Entrerai a far parte del team Frontend occupandoti dello sviluppo di interfacce moderne utilizzando React',

    responsibilities: [
      'Sviluppare nuove funzionalità',
      'Correggere bug',
      'Collaborare con UX/UI Designer',
      'Scrivere codice pulito e mantenibile',
    ],
  },

  {
    id: 2,

    title: 'FullStack Web Developer',

    company: {
      name: 'Prisma Software',
      website: 'https://company.example',
      industry: 'Software House',

      employees: {
        min: 35,
        max: 50,
      },

      description:
        ' Prisma Software è  una società di sviluppo software focalizzata su innovazione, cloud e trasformazione digitale',
    },

    location: {
      city: 'Milano',
      region: 'Lombardia',
      country: 'Italia',
    },

    salary: {
      min: 22000,
      max: 25000,
      currency: 'EUR',
    },

    contract: {
      type: 'Tempo indeterminato',
      duration: 'null',
    },

    experience: 'Middle',

    workMode: 'On-site',

    publishedAt: '2026-08-03',

    technologies: [
      'Laravel',
      'React',
      'MySQL',
      'PHP',
    ],

    requirements: {
      technical: [
        'Padronanza di React, Java, PHP',
        'Git',
        'Gestione Database',
        'REST API',
      ],

      soft: [
        'Problem solving',
        'Autonomia',
        'Lavoro in team',
      ],
    },

    benefits: [
      'Mensa',
      'Parcheggio gratuito',
      'Assicurazione sanitaria',
    ],

    description:
      'Entrerai a far parte di un team strutturato abituato a lavorare in modalità Agile, dando il tuo contributo per il mantenimento di progetti in corso e dello sviluppo dei successivi',

    responsibilities: [
      'Mantenimento progetti in essere',
      'Correggere bug',
      'Gestione dei database',
    ],
  },

   {
    id: 3,

    title: 'Stage Cyber Security Analyst',

    company: {
      name: 'ShieldNet Technologies',
      website: 'https://company.example',
      industry: 'Software House',

      employees: {
        min: 20,
        max: 35,
      },

      description:
        'Azienda specializzata in servizi di cybersecurity, protezione delle infrastrutture IT e monitoraggio della sicurezza informatica',
    },

    location: {
      city: 'Milano',
      region: 'Lombardia',
      country: 'Italia',
    },

    salary: {
      min: 16000,
      max: 18000,
      currency: 'EUR',
    },

    contract: {
      type: 'Stage',
      duration: '6 mesi',
    },

    experience: 'Prima esperienza',

    workMode: 'On-site',

    publishedAt: '2026-07-23',

    technologies: [
      'TCP/IP',
      'DNS',
      'VPN',
      'Firewall',
      'Fondamenti di Cyber Security',
      'SQL',
    ],

    requirements: {
      technical: [
        'Vulnerability Assessment',
        'Laurea in discipline STEM',
        'inglese tecnico',
        'Security Monitoring',
      ],

      soft: [
        'Problem solving',
        'Capacità di documentazione tecnica',
        'Attenzione ai dettagli',
      ],
    },

    benefits: [
      'Parcheggio gratuito',
      'Formazione on-the-job',
    ],

    description:
      'La risorsa affiancherà i professionisti del team nelle attività di monitoraggio degli eventi di sicurezza, analisi delle vulnerabilità e gestione degli incidenti informatici',

    responsibilities: [
      'Supportare il monitoraggio degli eventi di sicurezza tramite strumenti SIEM',
      'Redigere e aggiornare la documentazione tecnica relativa alle attività svolte',
      'Supportare il team nelle attività di vulnerability assessment e remediation',
    ],
  },

]

export default jobs