import SectionHeading from '../SectionHeading/SectionHeading'
import './Experience.css'

const ROLES = [
  {
    title: 'Front-End & Back-End Developer',
    company: 'Coding Camp 2025 powered by DBS Foundation',
    date: 'Feb — Jul 2025',
    highlights: [
      'Learned end-to-end web development, from HTML/CSS/JavaScript fundamentals to more advanced concepts',
      'Built "Sapu Jagat," a full-stack web app using Vue.js, Tailwind CSS, Node.js, and Hapi.js, integrating a Machine Learning API',
      'Distinction Graduate — top 10% of the learning path',
    ],
  },
  {
    title: 'Final Course Project',
    company: 'Universitas Bhayangkara Jakarta Raya',
    date: 'Oct — Dec 2024',
    highlights: [
      'Built a store inventory management mobile app for small businesses (UKM) from scratch using Flutter',
      'Implemented core features including real-time inventory management and sales transaction recording',
    ],
  },
  {
    title: 'Ready4AI & Security Training',
    company: 'InfraDigital Foundation',
    date: 'Feb — Aug 2024',
    highlights: [
      'Completed comprehensive cybersecurity training delivered by Microsoft via InfraDigital Foundation',
      'Studied cybersecurity fundamentals, threat landscapes, and mitigation techniques',
    ],
  },
  {
    title: 'Final Course Project',
    company: 'Universitas Bhayangkara Jakarta Raya',
    date: 'Nov — Dec 2022',
    highlights: [
      'Implemented an IoT architecture from scratch integrating RFID and Arduino',
      'Implemented balance management functions on Arduino using C',
    ],
  },
  {
    title: 'B.Sc. in Informatics',
    company: 'Universitas Bhayangkara Jakarta Raya',
    date: '2022 — 2026',
    highlights: [
      'GPA: 3.69 — Software Development track',
      'Thesis: web-based student records archive system for elementary schools',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeading number="04" title="Experience" />

      <div className="timeline">
        {ROLES.map((role, i) => (
          <div className="timeline-entry" key={role.title + role.company + role.date}>
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
