import { useEffect, useState } from 'react'

/** Classic loop: types a word, pauses, deletes it, moves to the next. */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Guard against the word list shrinking underneath us (e.g. on a language switch).
  const safeIndex = index < words.length ? index : 0

  useEffect(() => {
    const current = words[safeIndex]

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, safeIndex, words, typeSpeed, deleteSpeed, pause])

  return words[safeIndex].slice(0, subIndex)
}
