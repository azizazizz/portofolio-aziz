import { useTypewriter } from '../../hooks/useTypewriter'
import { useLanguage } from '../../hooks/useLanguage'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles)

  return (
    <section id="home" className="hero section">
      <p className="hero-status">
        <span className="status-dot" />
        {t.hero.status}
      </p>

      <h1 className="hero-name">Nur Aziz Raihan</h1>

      <p className="hero-role">
        <span>{typed}</span>
        <span className="cursor" />
      </p>

      <p className="hero-bio">{t.hero.bio}</p>

      <dl className="hero-stats">
        {t.hero.stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <dt className="hero-stat-value">{stat.value}</dt>
            <dd className="hero-stat-label">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">
          {t.hero.ctaWork}
        </a>
        <a href="#contact" className="btn btn-ghost">
          {t.hero.ctaContact} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
