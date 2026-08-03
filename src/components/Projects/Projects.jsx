import SectionHeading from '../SectionHeading/SectionHeading'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Sapu Jagat',
    description:
      'Full-stack web app built as the capstone project for Coding Camp 2025 powered by DBS Foundation — dynamic client-side, an efficient server-side, and an integrated Machine Learning API.',
    tags: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Hapi.js'],
  },
  {
    name: 'UKM Inventory Manager',
    description:
      'Mobile app for small-business (UKM) store management built from scratch, with real-time inventory tracking and sales transaction recording.',
    tags: ['Flutter'],
  },
  {
    name: 'School Records Archive System',
    description:
      'Undergraduate thesis project — a web-based student records archive system built for an elementary school.',
    tags: ['PHP', 'CodeIgniter', 'SQL'],
  },
  {
    name: 'IoT Balance Management System',
    description:
      'IoT architecture built from scratch with RFID and Arduino integration, implementing balance management logic in C.',
    tags: ['Arduino', 'RFID', 'C'],
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
