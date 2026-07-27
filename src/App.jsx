import './App.css'
import jobs from './data/jobs'
import JobCard from './components/JobCard'

function App() {
  return (
    <div>
      <h1>Job Board</h1>
      <p>Trova la tua prossima opportunità</p>

      <div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default App