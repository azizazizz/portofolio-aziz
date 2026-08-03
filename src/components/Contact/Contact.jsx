import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azizazizz', icon: FaGithub, color: null },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nur-aziz-raihan/',
    icon: FaLinkedin,
    color: '#0a66c2',
  },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading number="05" title="Contact" />

      <div className="contact-content">
        <h3 className="contact-heading">Let's build something together.</h3>
        <p className="contact-text">
          Placeholder — I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>
        <a href="mailto:you@example.com" className="contact-email">
          you@example.com
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
