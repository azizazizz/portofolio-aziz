import SectionHeading from '../SectionHeading/SectionHeading'
import './About.css'

const STACK = ['JavaScript', 'Vue.js', 'Node.js', 'Hapi.js', 'PHP', 'CodeIgniter', 'Flutter', 'SQL']

function About() {
  return (
    <section id="about" className="section about">
      <SectionHeading number="01" title="About Me" />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Software developer with a Bachelor's degree in Informatics, focused on full-stack
            web development and UI/UX design. Experienced in designing and building
            web-based information systems and mobile applications — comfortable combining
            solid backend logic with user-friendly interfaces to deliver practical,
            effective technology solutions.
          </p>
          <p>
            Currently completing a B.Sc. in Informatics at Bhayangkara Jakarta Raya
            University (2022–2026), with a Software Development focus and a GPA of 3.69. Thesis
            project: a web-based student records archive system for elementary schools.
          </p>
          <p className="about-stack-label">Technologies I work with often:</p>
          <ul className="about-stack">
            {STACK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="about-figure" aria-hidden="true">
          <span>{'{ }'}</span>
        </div>
      </div>
    </section>
  )
}

export default About
