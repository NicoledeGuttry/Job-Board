import './App.css'
import jobs from './data/jobs'
import JobCard from './components/JobCard'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <p className="eyebrow">JOB BOARD</p>
          <h1>Trova il lavoro giusto per te!</h1>
          <p className="hero-description">
            Esplora le migliori opportunità di lavoro nel settore tech.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="jobs-section">
          <div className="section-header">
            <h2>Offerte di lavoro</h2>
            <span>{jobs.length} offerte disponibili</span>
          </div>

          <div className="jobs-grid">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App