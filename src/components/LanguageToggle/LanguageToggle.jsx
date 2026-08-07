import { useLanguage } from '../../hooks/useLanguage'
import { LANGUAGES } from '../../i18n/translations'
import './LanguageToggle.css'

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={t.language.switch}>
      {LANGUAGES.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`lang-option${lang === option.code ? ' active' : ''}`}
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          title={option.name}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
