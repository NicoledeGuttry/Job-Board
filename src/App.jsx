import { useState } from 'react'
import './App.css'
import jobs from './data/jobs'
import JobCard from './components/JobCard'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredJobs = jobs.filter((job) => {
  const search = searchTerm.toLowerCase()
   return (
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.technologies.some((technology) =>
        technology.toLowerCase().includes(search)
      )
    )
  })

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
           <span>{filteredJobs.length} offerte disponibili</span>
          </div>

          <div className="search-container">
              <input
               type="text"
               placeholder="Cerca per ruolo, azienda, parola chiave..."
               value={searchTerm}
               onChange={(event) => setSearchTerm(event.target.value)}
             />
          </div>

          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App