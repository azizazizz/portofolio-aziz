import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azizazizz', icon: FaGithub, color: null },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nur-aziz-raihan/',
    icon: FaLinkedin,
    color: '#0a66c2',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/azizraihan_/',
    icon: FaInstagram,
    color: '#e4405f',
  },
]

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <SectionHeading number="06" title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="contact-content">
        <h3 className="contact-heading">{t.contact.heading}</h3>
        <p className="contact-text">{t.contact.text}</p>
        <a href="mailto:zizraihan508@gmail.com" className="contact-email">
          zizraihan508@gmail.com
        </a>

        <div className="contact-socials">
          {SOCIALS.map((social) => {
            const Icon = social.icon
            return (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                key={social.label}
                style={{ '--social-color': social.color || 'var(--accent)' }}
              >
                <Icon className="social-icon" />
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
