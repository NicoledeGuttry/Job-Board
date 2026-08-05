function JobInfo({ icon, label, value }) {
  return (
    <div className="job-info">
      <div className="job-info-header">
        {icon}

        <span className="job-info-label">
          {label}
        </span>
      </div>

      <span className="job-info-value">
        {value}
      </span>
    </div>
  )
}

export default JobInfo