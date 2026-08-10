
import InfoCard from './InfoCard'

function JobContent({
  description,
  responsibilities,
  requirements,
}) {
  return (
    <>
      <InfoCard title="Descrizione">
        <p>{description}</p>
      </InfoCard>

      <InfoCard title="Responsabilità">
        <ul>
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard title="Requisiti tecnici">
        <ul>
          {requirements.technical.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard title="Soft Skills">
        <ul>
          {requirements.soft.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </InfoCard>
    </>
  )
}

export default JobContent
