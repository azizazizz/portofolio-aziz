/**
 * Certificates are loaded straight from `src/assets/certificates/`.
 *
 * Drop in a PDF (e.g. `13-something.pdf`) plus a same-named `.jpg` preview of
 * its first page and it shows up automatically, ordered by file name.
 * Titles and issuers live in `i18n/translations.js` under `certificates.items`,
 * keyed by the file name; anything missing falls back to the name itself.
 */

const previews = import.meta.glob('../../assets/certificates/*.jpg', {
  eager: true,
  import: 'default',
})

const pdfs = import.meta.glob('../../assets/certificates/*.pdf', {
  eager: true,
  import: 'default',
})

function slugOf(path) {
  const file = path.split('/').pop()
  return file.replace(/\.(jpg|pdf)$/i, '')
}

export function fallbackTitle(slug) {
  return slug
    .replace(/^\d+[-_]/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function buildCertificates() {
  const bySlug = new Map()

  for (const [path, url] of Object.entries(previews)) {
    const slug = slugOf(path)
    bySlug.set(slug, { ...bySlug.get(slug), slug, preview: url })
  }

  for (const [path, url] of Object.entries(pdfs)) {
    const slug = slugOf(path)
    bySlug.set(slug, { ...bySlug.get(slug), slug, pdf: url })
  }

  return [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug))
}

export const CERTIFICATES = buildCertificates()
