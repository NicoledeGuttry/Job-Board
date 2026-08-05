import { useParams } from 'react-router-dom'
import jobs from '../data/jobs'
import InfoCard from '../components/InfoCard'
import JobInfo from '../components/JobInfo'
import {
  Briefcase,
  Building2,
  GraduationCap,
  Wallet,
} from 'lucide-react'


function JobDetails() {
  const { id } = useParams()

  const job = jobs.find((job) => job.id === Number(id))

  if (!job) {
    return <p>Offerta non trovata</p>
  }
  const {
    title,
    company,
    location,
    salary,
    contract,
    experience,
    workMode,
    technologies,
    description,
    requirements,
    benefits,
  } = job

  const formattedSalary = `€${salary.min.toLocaleString('it-IT')} - €${salary.max.toLocaleString('it-IT')}`

  return (
    <main className="container">
      <section className="job-details">

        <header className="job-details-header">
          <div>
            <h1>{title}</h1>

            <h2>{company.name}</h2>

            <p className="company-meta">
              {company.industry} • {company.employees.min}-{company.employees.max} dipendenti
            </p>

            <p className="job-location">
              {location.city}, {location.region}
            </p>

          </div>
        </header>


        <InfoCard title="Informazioni principali">

          <div className="job-info-grid">

            <JobInfo
              icon={<Briefcase size={18} />}
              label="Contratto"
              value={contract.type}
            />

            <JobInfo
              icon={<Building2 size={18} />}
              label="Modalità"
              value={workMode}
            />

            <JobInfo
              icon={<GraduationCap size={18} />}
              label="Esperienza"
              value={experience}
            />

            <JobInfo
              icon={<Wallet size={18} />}
              label="RAL"
              value={formattedSalary}
            />

          </div>

        </InfoCard>




        <InfoCard title="Stack Tecnologico">
          <div className="technologies">
            {technologies.map((technology) => (
              <span
                className="technology-tag"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Descrizione">
          <p>{description}</p>
        </InfoCard>
        <InfoCard title="Requisiti tecnici">
          <ul>
            {requirements.technical.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard title="Soft Skills">
          <ul>
            {requirements.soft.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard title="Benefit">
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </InfoCard>
      </section>
    </main>
  )
}

export default JobDetails







