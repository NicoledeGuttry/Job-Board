import { Link } from 'react-router-dom'

function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <div>
          <h3>{job.title}</h3>
          <p className="company">{job.company.name}</p>
        </div>

        <span className="job-type">
          {job.contract.type}
        </span>
      </div>

      <div className="job-location">
         {job.location.city}, {job.location.region}
      </div>

      <div className="technologies">
        {job.techSkills.map((technology) => (
          <span
            className="technology-tag"
            key={technology}
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="details-button"
      >
        Dettagli Offerta
      </Link>
    </article>
  )
}

export default JobCard