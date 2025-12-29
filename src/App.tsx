import { BrowserRouter as Router } from 'react-router-dom'
import { useAtom } from 'jotai'
import { ThemeProvider } from '@/components/elements/theme-provider'
import { SidebarConfigProvider } from '@/contexts/sidebar-context'
import { AppRouter } from '@/router/app-router'
import { useEffect } from 'react'
import { initGTM } from '@/utils/analytics'
import { appConfigAtom } from '@/store/theme-store'

// Get basename from environment (for deployment) or use empty string for development
const basename = import.meta.env.VITE_BASENAME || ''

function App() {
  const [appConfig] = useAtom(appConfigAtom)

  // Initialize GTM on app load
  useEffect(() => {
    initGTM();
  }, []);

  const getFontFamily = () => {
    switch (appConfig.fontFamily) {
      case 'serif':
        return 'var(--font-serif)'
      case 'mono':
        return 'var(--font-mono)'
      default:
        return 'var(--font-sans)'
    }
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
