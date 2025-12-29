"use client"

import React from 'react'
import { useTheme } from '@/hooks/use-theme'
import { useAtom } from 'jotai'
import {
  brandColorsAtom,
  selectedThemeAtom,
  selectedMyThemeAtom,
  selectedRadiusAtom,
  importedThemeAtom
} from '@/store/theme-store'
import { baseColors } from '@/config/theme-customizer-constants'
import { colorThemes, myThemes } from '@/config/theme-data'
import type { ThemePreset, ImportedTheme } from '@/types/theme-customizer'

export function useThemeManager() {
  const { theme, setTheme } = useTheme()
  const [brandColorsValues, setBrandColorsValues] = useAtom(brandColorsAtom)
  const [selectedTheme] = useAtom(selectedThemeAtom)
  const [selectedMyTheme] = useAtom(selectedMyThemeAtom)
  const [selectedRadius] = useAtom(selectedRadiusAtom)
  const [importedTheme] = useAtom(importedThemeAtom)

  // Simple, reliable theme detection - just follow the theme provider
  const isDarkMode = React.useMemo(() => {
    if (theme === "dark") return true
    if (theme === "light") return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }, [theme])

  const resetTheme = React.useCallback(() => {
    // Comprehensive reset of ALL possible CSS variables that could be set by themes
    const root = document.documentElement
    const allPossibleVars = [
      // Standard shadcn/ui variables
      'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
      'primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
      'accent', 'accent-foreground', 'destructive', 'destructive-foreground', 'border', 'input',
      'ring', 'radius',

      // Chart variables
      'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5',

      // Sidebar variables
      'sidebar', 'sidebar-background', 'sidebar-foreground', 'sidebar-primary', 'sidebar-primary-foreground',
      'sidebar-accent', 'sidebar-accent-foreground', 'sidebar-border', 'sidebar-ring',

      // Font variables that might be in imported themes
      'font-sans', 'font-serif', 'font-mono',

      // Shadow variables from imported themes
      'shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl',

      // Spacing variables
      'spacing', 'tracking-normal',

      // Additional variables that might be set by advanced themes
      'card-header', 'card-content', 'card-footer', 'muted-background', 'accent-background',
      'destructive-background', 'warning', 'warning-foreground', 'success', 'success-foreground',
      'info', 'info-foreground'
    ]

    // Remove all possible CSS variables
    allPossibleVars.forEach(varName => {
      root.style.removeProperty(`--${varName}`)
    })

    // Also remove any inline styles that might have been set (comprehensive cleanup)
    const inlineStyles = root.style
    for (let i = inlineStyles.length - 1; i >= 0; i--) {
      const property = inlineStyles[i]
      if (property.startsWith('--')) {
        root.style.removeProperty(property)
      }
    }
  }, [])

  const updateBrandColorsFromTheme = React.useCallback((styles: Record<string, string>) => {
    const newValues: Record<string, string> = {}
    baseColors.forEach(color => {
      const cssVar = color.cssVar.replace('--', '')
      if (styles[cssVar]) {
        newValues[color.cssVar] = styles[cssVar]
      }
    })
    setBrandColorsValues(newValues)
  }, [])

  const applyRadius = (radius: string) => {
    document.documentElement.style.setProperty('--radius', radius)
  }

  const handleColorChange = (cssVar: string, value: string) => {
    document.documentElement.style.setProperty(cssVar, value)
    setBrandColorsValues(prev => ({ ...prev, [cssVar]: value }))
  }

  const applyStyles = React.useCallback((activeStyles: Record<string, string>) => {
    const root = document.documentElement

    // 1. Reset first to be safe
    resetTheme()

    // 2. Apply active styles
    Object.entries(activeStyles).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value)
    })

    // 2.5 Ensure sidebar variables are set (fallback to theme defaults if missing)
    const sidebarFallbacks: Record<string, string> = {
      'sidebar': activeStyles['sidebar'] || activeStyles['background'] || 'var(--background)',
      'sidebar-foreground': activeStyles['sidebar-foreground'] || activeStyles['foreground'] || 'var(--foreground)',
      'sidebar-primary': activeStyles['sidebar-primary'] || activeStyles['primary'] || 'var(--primary)',
      'sidebar-primary-foreground': activeStyles['sidebar-primary-foreground'] || activeStyles['primary-foreground'] || 'var(--primary-foreground)',
      'sidebar-accent': activeStyles['sidebar-accent'] || activeStyles['accent'] || 'var(--accent)',
      'sidebar-accent-foreground': activeStyles['sidebar-accent-foreground'] || activeStyles['accent-foreground'] || 'var(--accent-foreground)',
      'sidebar-border': activeStyles['sidebar-border'] || activeStyles['border'] || 'var(--border)',
      'sidebar-ring': activeStyles['sidebar-ring'] || activeStyles['ring'] || 'var(--ring)',
    }

    Object.entries(sidebarFallbacks).forEach(([key, value]) => {
      // Only set if not already explicitly set in activeStyles
      if (!activeStyles[key]) {
        root.style.setProperty(`--${key}`, value)
      }
    })
  }, [resetTheme])

  const applyTheme = React.useCallback((themeValue: string, darkMode: boolean) => {
    const theme = colorThemes.find(t => t.value === themeValue)
    if (!theme) return

    const styles = darkMode ? theme.preset.styles.dark : theme.preset.styles.light
    applyStyles(styles)
    updateBrandColorsFromTheme(styles)
  }, [applyStyles, updateBrandColorsFromTheme])

  const applyMyTheme = React.useCallback((themePreset: ThemePreset, darkMode: boolean) => {
    const styles = darkMode ? themePreset.styles.dark : themePreset.styles.light
    applyStyles(styles)
    updateBrandColorsFromTheme(styles)
  }, [applyStyles, updateBrandColorsFromTheme])

  const applyImportedTheme = React.useCallback((themeData: ImportedTheme, darkMode: boolean) => {
    const styles = darkMode ? themeData.dark : themeData.light
    applyStyles(styles)
    updateBrandColorsFromTheme(styles)
  }, [applyStyles, updateBrandColorsFromTheme])

  // Effect to apply ALL persisted settings on load and when key atoms change
  React.useEffect(() => {
    const root = document.documentElement
    let activeStyles: Record<string, string> = {}

    if (importedTheme) {
      activeStyles = isDarkMode ? importedTheme.dark : importedTheme.light
    } else if (selectedTheme && selectedTheme !== "default") {
      const themeData = colorThemes.find(t => t.value === selectedTheme)
      if (themeData) {
        activeStyles = isDarkMode ? themeData.preset.styles.dark : themeData.preset.styles.light
      }
    } else if (selectedMyTheme) {
      const myTheme = myThemes.find(t => t.value === selectedMyTheme)
      if (myTheme) {
        activeStyles = isDarkMode ? myTheme.preset.styles.dark : myTheme.preset.styles.light
      }
    }

    // A. Apply theme and core sidebar logic
    applyStyles(activeStyles)

    // B. Apply custom color overrides (on top of theme)
    Object.entries(brandColorsValues).forEach(([cssVar, value]) => {
      root.style.setProperty(cssVar, value)
    })

    // C. Apply radius
    root.style.setProperty('--radius', selectedRadius)

  }, [isDarkMode, selectedTheme, selectedMyTheme, selectedRadius, importedTheme, brandColorsValues, applyStyles])

  return {
    theme,
    setTheme,
    isDarkMode,
    brandColorsValues,
    setBrandColorsValues,
    resetTheme,
    applyTheme,
    applyMyTheme,
    applyImportedTheme,
    applyRadius,
    handleColorChange,
    updateBrandColorsFromTheme
  }
}
