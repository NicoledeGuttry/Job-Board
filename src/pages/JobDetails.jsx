import { useParams } from 'react-router-dom'
import jobs from '../data/jobs'
import InfoCard from '../components/InfoCard'
import JobInfo from '../components/JobInfo'

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
    responsibilities,
    benefits,
  } = job

  const formattedSalary = `€${salary.min.toLocaleString('it-IT')} - €${salary.max.toLocaleString('it-IT')}`

  return (
    <main className="container">
      <section className="job-details">
        <h1>{title}</h1>

        <h2>{company.name}</h2>

        <div className="job-info-grid">
          <JobInfo
            label="Località"
            value={`${location.city}, ${location.region}`}
          />

          <JobInfo
            label="Contratto"
            value={contract.type}
          />

          <JobInfo
            label="Modalità"
            value={workMode}
          />

          <JobInfo
            label="Esperienza"
            value={experience}
          />

          <JobInfo
            label="RAL"
            value={formattedSalary}
          />
        </div>

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







