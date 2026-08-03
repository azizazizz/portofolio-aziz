import { useEffect, useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Nav.css'

const LINKS = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'projects', num: '03', label: 'Work' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'contact', num: '05', label: 'Contact' },
]

function Nav() {
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
        <a href="#top" className="nav-logo" onClick={handleClick('top')}>
          <span className="mark">&lt;/&gt;</span>
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
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" onClick={handleClick('contact')} className="nav-cta">
            Say hi
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
