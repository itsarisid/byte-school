import { shadcnThemePresets } from '@/utils/shadcn-ui-theme-presets'
import { myPresets } from '@/utils/my-theme-presets'
import type { ColorTheme } from '@/types/theme-customizer'

// Tweakcn theme presets for the dropdown - convert from tweakcnPresets
export const myThemes: ColorTheme[] = Object.entries(myPresets).map(([key, preset]) => ({
  name: preset.label || key,
  value: key,
  preset: preset
}))

// Shadcn theme presets for the dropdown - convert from shadcnThemePresets  
export const colorThemes: ColorTheme[] = Object.entries(shadcnThemePresets).map(([key, preset]) => ({
  name: preset.label || key,
  value: key,
  preset: preset
}))
