import './App.css'
import jobs from './data/jobs'

function App() {
  return (
    <div>
      <h1>Job Board</h1>
      <p>Trova la tua prossima opportunità</p>

      <div>
        {jobs.map((job) => (
          <article key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.type}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default App