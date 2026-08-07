import { useEffect, useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import { useLanguage } from '../../hooks/useLanguage'
import './Nav.css'

const LINKS = [
  { id: 'about', num: '01', key: 'about' },
  { id: 'skills', num: '02', key: 'skills' },
  { id: 'projects', num: '03', key: 'work' },
  { id: 'experience', num: '04', key: 'experience' },
  { id: 'certificates', num: '05', key: 'certificates' },
  { id: 'contact', num: '06', key: 'contact' },
]

function Nav() {
  const { t } = useLanguage()
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => (event) => {
    event.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={handleClick('top')} aria-label={t.nav.home}>
          <span className="logo-word">AZIZ</span>
          <span className="logo-dot" aria-hidden="true">.</span>
        </a>

        <div className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className={`nav-link${active === link.id ? ' active' : ''}`}
            >
              <span className="num">{link.num}.</span>
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#contact" onClick={handleClick('contact')} className="nav-cta">
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
