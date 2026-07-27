function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <div>
          <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
        </div>

        <span className="job-type">{job.type}</span>
      </div>

      <div className="job-location">
         {job.location}
      </div>

      <div className="technologies">
        {job.technologies.map((technology) => (
          <span className="technology-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <button className="details-button">
        Visualizza dettagli
      </button>
    </article>
  )
}

export default JobCard