import SectionHeading from '../SectionHeading/SectionHeading'
import './Experience.css'

const ROLES = [
  {
    title: 'Senior Developer',
    company: 'Company One',
    date: '2023 — Present',
    highlights: [
      'Placeholder: led development of a core product feature',
      'Placeholder: improved performance or reliability by some metric',
    ],
  },
  {
    title: 'Developer',
    company: 'Company Two',
    date: '2021 — 2023',
    highlights: [
      'Placeholder: shipped features across the stack',
      'Placeholder: collaborated with design and product on a key launch',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Company Three',
    date: '2019 — 2021',
    highlights: ['Placeholder: first professional role, learned the fundamentals'],
  },
  {
    title: 'B.Sc. Computer Science',
    company: 'University Name',
    date: '2015 — 2019',
    highlights: ['Placeholder: relevant coursework, thesis, or activities'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeading number="04" title="Experience" />

      <div className="timeline">
        {ROLES.map((role, i) => (
          <div className="timeline-entry" key={role.title + role.company}>
            <div className="timeline-rail">
              <span className="timeline-dot" />
              {i !== ROLES.length - 1 && <span className="timeline-line" />}
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
        ))}
      </div>
    </section>
  )
}

export default Experience
