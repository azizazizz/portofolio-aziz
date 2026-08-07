import { useCallback, useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import CertificateModal from './CertificateModal'
import { CERTIFICATES, fallbackTitle } from './certificateData'
import { useLanguage } from '../../hooks/useLanguage'
import './Certificates.css'

function Certificates() {
  const { t } = useLanguage()
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null)
  const [edges, setEdges] = useState({ start: true, end: true })

  // Resolve copy at render time so an open lightbox follows a language switch.
  const certificates = CERTIFICATES.map((cert) => ({
    ...cert,
    title: t.certificates.items[cert.slug]?.title || fallbackTitle(cert.slug),
    issuer: t.certificates.items[cert.slug]?.issuer || '',
  }))

  const syncEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft >= max - 2 })
  }, [])

  useEffect(() => {
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [syncEdges])

  // Turn a vertical wheel over the track into horizontal scrolling.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onWheel = (event) => {
      // leave real horizontal gestures (trackpad swipe) to the browser
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return

      const max = track.scrollWidth - track.clientWidth
      if (max <= 0) return

      // Firefox reports line units; normalise to something pixel-ish.
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY

      // Hand the gesture back to the page at either end, so the carousel
      // never traps the user mid-scroll.
      const atStart = track.scrollLeft <= 0
      const atEnd = track.scrollLeft >= max - 1
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return

      event.preventDefault()
      track.scrollLeft += delta
    }

    track.addEventListener('wheel', onWheel, { passive: false })
    return () => track.removeEventListener('wheel', onWheel)
  }, [])

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.cert-card')
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section id="certificates" className="section certificates">
      <SectionHeading
        number="05"
        title={t.certificates.title}
        subtitle={t.certificates.subtitle}
      />

      {certificates.length === 0 ? (
        <p className="cert-empty">{t.certificates.empty}</p>
      ) : (
        <>
          <div className="cert-toolbar">
            <p className="cert-hint">
              {t.certificates.hint} <span aria-hidden="true">→</span>
            </p>
            <div className="cert-arrows">
              <button
                type="button"
                className="cert-arrow"
                onClick={() => scrollByCard(-1)}
                disabled={edges.start}
                aria-label={t.certificates.prev}
              >
                ‹
              </button>
              <button
                type="button"
                className="cert-arrow"
                onClick={() => scrollByCard(1)}
                disabled={edges.end}
                aria-label={t.certificates.next}
              >
                ›
              </button>
            </div>
          </div>

          <div className="cert-track" ref={trackRef} onScroll={syncEdges}>
            {certificates.map((cert, i) => (
              <button
                type="button"
                className="cert-card"
                key={cert.slug}
                onClick={() => setActiveIndex(i)}
              >
                <div className="cert-thumb">
                  {cert.preview ? (
                    <img src={cert.preview} alt={cert.title} loading="lazy" />
                  ) : (
                    <span className="cert-thumb-fallback" aria-hidden="true">
                      PDF
                    </span>
                  )}
                  <span className="cert-thumb-overlay">
                    <span>
                      {t.certificates.preview} <span aria-hidden="true">↗</span>
                    </span>
                  </span>
                </div>
                <div className="cert-meta">
                  <p className="cert-title">{cert.title}</p>
                  {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {activeIndex !== null && (
        <CertificateModal
          certificates={certificates}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  )
}

export default Certificates
