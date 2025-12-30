import { BrowserRouter as Router } from 'react-router-dom'
import { useAtom } from 'jotai'
import { ThemeProvider } from '@/components/elements/theme-provider'
import { SidebarConfigProvider } from '@/contexts/sidebar-context'
import { AppRouter } from '@/router/app-router'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { initGTM } from '@/utils/analytics'
import { appConfigAtom } from '@/store/theme-store'

// Get basename from environment (for deployment) or use empty string for development
const basename = import.meta.env.VITE_BASENAME || ''

function App() {
  const [appConfig] = useAtom(appConfigAtom)

  // Handle RTL/LTR based on language
  const { i18n } = useTranslation()

  useEffect(() => {
    const dir = i18n.dir(i18n.language)
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  // Initialize GTM on app load
  useEffect(() => {
    initGTM();
  }, []);

  const getFontFamily = () => {
    return `var(--font-${appConfig.fontFamily}, var(--font-inter))`
  }

  return (
    <div
      className="antialiased"
      style={{ fontFamily: getFontFamily() }}
    >
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <SidebarConfigProvider>
          <Router basename={basename}>
            <AppRouter />
          </Router>
        </SidebarConfigProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
