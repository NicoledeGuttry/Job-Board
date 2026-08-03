import { useParams } from 'react-router-dom'
import jobs from '../data/jobs'

function JobDetails() {
  const { id } = useParams()

  const job = jobs.find((job) => job.id === Number(id))

  if (!job) {
    return <p>Offerta non trovata</p>
  }
return (
  <main className="container">
    <section className="job-details">
      <h1>{job.title}</h1>

      <h2>{job.company.name}</h2>

      <p>
        {job.location.city}, {job.location.region}
      </p>

      <p>{job.contract.type}</p>

      <p>{job.workMode}</p>

      <p>{job.experience}</p>

      <p>
         €{job.salary.min.toLocaleString('it-IT')} - €
        {job.salary.max.toLocaleString('it-IT')}
      </p>

      <h2>Stack Tecnologico</h2>

      <div className="technologies">
        {job.technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </section>
  </main>
)
}

export default JobDetails