/**
 * Certificates are loaded straight from `src/assets/certificates/`.
 *
 * Only the compressed `.jpg` first-page previews are read here — the source
 * PDFs are gitignored and never shipped, so nothing links to them.
 * Titles and issuers live in `i18n/translations.js` under `certificates.items`,
 * keyed by the file name; anything missing falls back to the name itself.
 */

const previews = import.meta.glob('../../assets/certificates/*.jpg', {
  eager: true,
  import: 'default',
})

export function fallbackTitle(slug) {
  return slug
    .replace(/^\d+[-_]/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export const CERTIFICATES = Object.entries(previews)
  .map(([path, url]) => ({
    slug: path.split('/').pop().replace(/\.jpg$/i, ''),
    preview: url,
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug))
