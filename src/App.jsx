import { useState } from 'react'
import './App.css'
import jobs from './data/jobs'
import JobCard from './components/JobCard'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTechnology, setSelectedTechnology] = useState('All')
  const technologies = [
  'All',
  ...new Set(jobs.flatMap((job) => job.technologies)),
]
  const filteredJobs = jobs.filter((job) => {
  const search = searchTerm.toLowerCase()
  const matchesSearch =
    job.title.toLowerCase().includes(search) ||
    job.company.toLowerCase().includes(search) ||
    job.technologies.some((technology) =>
      technology.toLowerCase().includes(search)
    )
  const matchesTechnology =
    selectedTechnology === 'All' ||
    job.technologies.includes(selectedTechnology)

  return matchesSearch && matchesTechnology
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

          <div className="filter-container">
              <label htmlFor="technology-filter">
               Filtra per tecnologia
             </label>

                <select
                  id="technology-filter"
                  value={selectedTechnology}
                  onChange={(event) => setSelectedTechnology(event.target.value)}
                >
                  {technologies.map((technology) => (
                  <option key={technology} value={technology}>
                   {technology === 'All'
                   ? 'Tutte le tecnologie'
                   : technology}
                 </option>
                ))}
                </select>
           </div>

          <div className="jobs-grid">
             {filteredJobs.length > 0 ? (
             filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
            ) : (
            <p className="no-results">
             Nessuna offerta trovata
            </p>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App