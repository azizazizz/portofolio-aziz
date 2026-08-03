import { useTypewriter } from '../../hooks/useTypewriter'
import './Hero.css'

const ROLES = ['Full-Stack Developer.', 'Open Source Contributor.', 'Problem Solver.']

function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="hero section">
      <p className="hero-status">
        <span className="status-dot" />
        Available for new opportunities
      </p>

      <h1 className="hero-name">Your Name</h1>

      <p className="hero-role">
        <span>{typed}</span>
        <span className="cursor" />
      </p>

      <p className="hero-bio">
        Placeholder bio — replace with a short introduction covering what you build, the kind
        of problems you like to solve, and what you're currently focused on.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          View my work
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
