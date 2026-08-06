import InfoCard from './InfoCard'
import JobInfo from './JobInfo'

function JobSummary({
  contract,
  workMode,
  experience,
  salary,
  technologies,
  benefits,
}) {
  const formattedSalary = `€${salary.min.toLocaleString(
    'it-IT'
  )} - €${salary.max.toLocaleString('it-IT')}`

  return (
    <>
      <InfoCard title="Informazioni principali">
        <div className="job-info-grid">
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
      </InfoCard>

      <InfoCard title="Stack Tecnologico">
        <div className="technologies">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="technology-tag"
            >
              {technology}
            </span>
          ))}
        </div>
      </InfoCard>

      <InfoCard title="Benefit">
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </InfoCard>
    </>
  )
}

export default JobSummary