function JobHeader({
  title,
  company,
  location,
}) {
  return (
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
  )
}

export default JobHeader