import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { DEFAULT_LANGUAGE, translations } from './translations'

function readInitialLanguage() {
  const fromDom = document.documentElement.lang
  if (fromDom && translations[fromDom]) return fromDom
  return DEFAULT_LANGUAGE
}

function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const setLang = useCallback((next) => {
    if (translations[next]) setLangState(next)
  }, [])

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
