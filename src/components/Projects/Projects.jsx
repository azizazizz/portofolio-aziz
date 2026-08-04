import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectModal from './ProjectModal'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Sapu Jagat',
    description:
      'Full-stack web app built as the capstone project for Coding Camp 2025 powered by DBS Foundation — dynamic client-side, an efficient server-side, and an integrated Machine Learning API.',
    tags: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Hapi.js'],
    images: [],
  },
  {
    name: 'UKM Inventory Manager',
    description:
      'Mobile app for small-business (UKM) store management built from scratch, with real-time inventory tracking and sales transaction recording.',
    tags: ['Flutter'],
    images: [],
  },
  {
    name: 'School Records Archive System',
    description:
      'Undergraduate thesis project — a web-based student records archive system built for an elementary school.',
    tags: ['PHP', 'CodeIgniter', 'SQL'],
    images: [],
  },
  {
    name: 'IoT Balance Management System',
    description:
      'IoT architecture built from scratch with RFID and Arduino integration, implementing balance management logic in C.',
    tags: ['Arduino', 'RFID', 'C'],
    images: [],
  },
]

function ProjectMedia({ project, index }) {
  if (project.images.length > 0) {
    return <img src={project.images[0]} alt={project.name} loading="lazy" />
  }
  return (
    <div className="media-placeholder" aria-hidden="true">
      <span className="media-index">{String(index + 1).padStart(2, '0')}</span>
    </div>
  )
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section projects">
      <SectionHeading number="03" title="Selected Work" />

      <div className="project-list">
        {PROJECTS.map((project, i) => (
          <button
            type="button"
            className="project-card"
            key={project.name}
            onClick={() => setActiveProject(project)}
          >
            <div className="project-media">
              <ProjectMedia project={project} index={i} />
              <div className="media-overlay">
                <span>
                  View Project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>

            <div className="project-content">
              <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tags">{project.tags.join('  ·  ')}</p>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}

export default Projects
