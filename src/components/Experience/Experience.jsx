import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './Experience.css'

const ORDER = ['coding-camp', 'ukm-project', 'infradigital', 'iot-project', 'degree']

function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="section experience">
      <SectionHeading number="04" title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="timeline">
        {ORDER.map((id, i) => {
          const role = t.experience.items[id]
          return (
            <div className="timeline-entry" key={id}>
              <div className="timeline-rail">
                <span className="timeline-dot" />
                {i !== ORDER.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <p className="timeline-date">{role.date}</p>
                <p className="timeline-title">
                  {role.title} <span className="at">@ {role.company}</span>
                </p>
                <ul className="timeline-highlights">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
