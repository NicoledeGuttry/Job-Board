import { Link } from 'react-router-dom'

function JobHeader({
  title,
  company,
  location,
}) {
  return (
    <header className="job-details-header">

      <Link
        to="/"
        className="back-link"
      >
        ← Tutte le offerte
      </Link>

      <div className="job-details-hero">
        <div className="job-details-heading">
          <p className="job-eyebrow">
            Opportunità di lavoro
          </p>

          <h1>{title}</h1>
          <h2>{company.name}</h2>

          <p className="company-meta">
            {company.industry} • {company.employees.min}-{company.employees.max} dipendenti
          </p>
          <p className="job-location">
            {location.city}, {location.region}
          </p>
        </div>
        <div className="job-details-hero-accent" />
      </div>
    </header>
  )
}

export default JobHeader