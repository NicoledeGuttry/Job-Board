function JobInfo({ label, value }) {
  return (
    <div className="job-info">
      <p className="job-info-label">{label}</p>

      <p className="job-info-value">{value}</p>
    </div>
  )
}

export default JobInfo