import SectionHeading from '../SectionHeading/SectionHeading'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Project One',
    description: 'Placeholder description of what this project does and the problem it solves.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Project Two',
    description: 'Placeholder description — mention the stack, your role, and the outcome.',
    tags: ['Python', 'Automation', 'CLI'],
  },
  {
    name: 'Project Three',
    description: 'Placeholder description of a side project, tool, or open-source contribution.',
    tags: ['JavaScript', 'Node.js', 'Library'],
  },
  {
    name: 'Project Four',
    description: 'Placeholder description highlighting a specific technical challenge you solved.',
    tags: ['CSS', 'Design System'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <SectionHeading number="03" title="Selected Work" />

      <div className="project-list">
        {PROJECTS.map((project, i) => (
          <a href="#" className="project-row" key={project.name}>
            <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="project-body">
              <span className="project-title">
                {project.name}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
              <span className="project-desc">{project.description}</span>
              <span className="project-tags">{project.tags.join('  ·  ')}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
