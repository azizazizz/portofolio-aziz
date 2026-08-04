import { useTypewriter } from '../../hooks/useTypewriter'
import './Hero.css'

const ROLES = ['Full-Stack Web Developer.']

function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="hero section">
      <p className="hero-status">
        <span className="status-dot" />
        Open to new opportunities
      </p>

      <h1 className="hero-name">Nur Aziz Raihan</h1>

      <p className="hero-role">
        <span>{typed}</span>
        <span className="cursor" />
      </p>

      <p className="hero-bio">
        Informatics graduate focused on full-stack web development and UI/UX design —
        combining backend logic with user-friendly interfaces to build practical software
        solutions.
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
