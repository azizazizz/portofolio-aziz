import SectionHeading from '../SectionHeading/SectionHeading'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'Twitter', href: 'https://twitter.com/yourname' },
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
          {SOCIALS.map((social) => (
            <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
