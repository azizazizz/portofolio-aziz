import { FaRegFilePdf } from 'react-icons/fa'
import SectionHeading from '../SectionHeading/SectionHeading'
import { useLanguage } from '../../hooks/useLanguage'
import './About.css'

const STACK = ['JavaScript', 'Vue.js', 'Node.js', 'Hapi.js', 'PHP', 'CodeIgniter', 'Flutter', 'SQL']

// Drop a PDF into src/assets/cv/ and the button below wires itself up.
const CV_URL = Object.values(
  import.meta.glob('../../assets/cv/*.pdf', { eager: true, import: 'default' }),
)[0]

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section about">
      <SectionHeading number="01" title={t.about.title} subtitle={t.about.subtitle} />

      <p className="about-lead">{t.about.lead}</p>

      <div className="about-grid">
        <div className="about-copy">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p className="about-stack-label">{t.about.stackLabel}</p>
          <ul className="about-stack">
            {STACK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {CV_URL && (
            <a href={CV_URL} target="_blank" rel="noreferrer" className="about-cv">
              <FaRegFilePdf className="about-cv-icon" />
              {t.about.cv}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <div className="about-figure" aria-hidden="true">
          <span>{'{ }'}</span>
        </div>
      </div>
    </section>
  )
}

export default About
