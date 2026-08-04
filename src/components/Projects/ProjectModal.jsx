import { useEffect, useState } from 'react'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  const images = project.images && project.images.length > 0 ? project.images : null
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (images) {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  })

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-media">
          {images ? (
            <>
              <img src={images[index]} alt={`${project.name} screenshot ${index + 1}`} />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="modal-nav prev"
                    onClick={prev}
                    aria-label="Previous screenshot"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="modal-nav next"
                    onClick={next}
                    aria-label="Next screenshot"
                  >
                    ›
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="modal-placeholder">
              <span>Screenshots coming soon</span>
            </div>
          )}
        </div>

        <div className="modal-info">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p className="modal-tags">{project.tags.join('  ·  ')}</p>

          {images && images.length > 1 && (
            <div className="modal-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot${i === index ? ' active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
