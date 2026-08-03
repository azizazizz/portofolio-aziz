import SectionHeading from '../SectionHeading/SectionHeading'
import './About.css'

const STACK = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker']

function About() {
  return (
    <section id="about" className="section about">
      <SectionHeading number="01" title="About Me" />

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Placeholder paragraph — replace with a short introduction covering who you are,
            what kind of problems you like to solve, and what drives you as a developer.
          </p>
          <p>
            Placeholder paragraph — mention your background, the kind of projects or teams
            you've worked with, and what you're currently focused on learning or building.
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
