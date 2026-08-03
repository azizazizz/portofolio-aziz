import { FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa'
import {
  SiArduino,
  SiBootstrap,
  SiCodeigniter,
  SiFlutter,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Skills.css'

const GROUPS = [
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4fc08d' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'PHP', icon: SiPhp, color: '#777bb4' },
      { name: 'CodeIgniter', icon: SiCodeigniter, color: '#ef4223' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Hapi.js', icon: null },
      { name: 'SQL', icon: FaDatabase, color: '#4479a1' },
    ],
  },
  {
    label: 'Mobile',
    items: [{ name: 'Flutter', icon: SiFlutter, color: '#02569b' }],
  },
  {
    label: 'Tools & Other',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: null },
      { name: 'Arduino / IoT', icon: SiArduino, color: '#00979d' },
      { name: 'Cybersecurity Fundamentals', icon: null },
    ],
  },
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
              {group.items.map((item) => {
                const Icon = item.icon
                return (
                  <span
                    className="chip"
                    key={item.name}
                    style={{ '--chip-color': item.color || 'var(--accent)' }}
                  >
                    {Icon && <Icon className="chip-icon" style={{ color: item.color }} />}
                    {item.name}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
