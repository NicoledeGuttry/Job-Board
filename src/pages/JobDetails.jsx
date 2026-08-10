import { useParams } from 'react-router-dom'
import jobs from '../data/jobs'
import JobHeader from '../components/JobHeader'
import JobSummary from '../components/JobSummary'
import JobContent from '../components/JobContent'
import Navbar from '../components/Navbar'
import {
  Briefcase,
  Building2,
  GraduationCap,
  Wallet,
} from 'lucide-react'

function JobDetails() {
  const { id } = useParams()
  const job = jobs.find((job) => job.id === Number(id))

  if (!job) {
    return <div>Offerta non trovata</div>
  }

  const {
    title,
    company,
    location,
    salary,
    contract,
    experience,
    workMode,
    technologies,
    description,
    requirements,
    responsibilities,
    benefits,
  } = job

  return (
    <>
      <main className="container">
        <section className="job-details">

          <JobHeader
            title={title}
            company={company}
            location={location}
          />

          <div className="job-details-grid">
            <JobSummary
              contract={contract}
              workMode={workMode}
              experience={experience}
              salary={salary}
              technologies={technologies}
              benefits={benefits}
            />
            <JobContent
              description={description}
              responsibilities={responsibilities}
              requirements={requirements}
            />
          </div>

        </section>
      </main>
    </>
  )
}

export default JobDetails

