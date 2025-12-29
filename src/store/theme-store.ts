import { atomWithStorage } from 'jotai/utils'
import type { SidebarConfig } from '@/contexts/sidebar-context'
import type { ImportedTheme } from '@/types/theme-customizer'

// Layout configuration atom
export const sidebarConfigAtom = atomWithStorage<SidebarConfig>('sidebar-config', {
    variant: "inset",
    collapsible: "offcanvas",
    side: "left",
    isHeaderSticky: true
})

// Theme selection atoms
export const selectedThemeAtom = atomWithStorage<string>('selected-theme', 'default')
export const selectedMyThemeAtom = atomWithStorage<string>('selected-my-theme', '')
export const selectedRadiusAtom = atomWithStorage<string>('selected-radius', '0.5rem')

// Custom colors atom
export const brandColorsAtom = atomWithStorage<Record<string, string>>('brand-colors', {})

// Imported theme data atom
export const importedThemeAtom = atomWithStorage<ImportedTheme | null>('imported-theme', null)
