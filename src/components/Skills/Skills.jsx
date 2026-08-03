import SectionHeading from '../SectionHeading/SectionHeading'
import './Skills.css'

const GROUPS = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
  { label: 'Tools', items: ['Git', 'Docker', 'Vite', 'Linux'] },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeading number="02" title="Skills" />

      <div className="skills-grid">
        {GROUPS.map((group) => (
          <div className="skill-group" key={group.label}>
            <p className="skill-group-label">{group.label}</p>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
