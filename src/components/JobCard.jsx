function JobCard({ job }) {
  return (
    <article>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.type}</p>
      <div>
         {job.technologies.map((technology) => (
           <span key={technology}>
             {technology}
           </span>
         ))}
      </div>
    </article>
  )
}

export default JobCard