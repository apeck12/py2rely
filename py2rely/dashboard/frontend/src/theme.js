import { createContext, useContext } from 'react'

export const themes = {
  dark: {
    bg:         '#07070f',
    surface:    '#0a0a0f',
    surface2:   '#0e0e1a',
    border:     '#1e1e2e',
    border2:    '#2d2d4e',
    text:       '#e2e8f0',
    textMuted:  '#64748b',
    accent:     '#a78bfa',
  },
  light: {
    bg:         '#f8f8fc',
    surface:    '#ffffff',
    surface2:   '#f1f1f8',
    border:     '#e2e2f0',
    border2:    '#c8c8e0',
    text:       '#1e1e2e',
    textMuted:  '#6b7280',
    accent:     '#7c3aed',
  },
}

export const TYPE_COLOR = {
  // --- Classification (High Impact / Vibrant) ---
  Extract:     '#009d9a', // Electric Indigo
  Class2D:     '#42D4F4', // Cyan
  Select:      '#F032E6', // Magenta
  Class3D:     '#ff832b', // Neon Red (High Focus)
  PostProcess: '#FA003F', // Vivid Rose Red
  Refine3D:    '#EC4899', // Pink
  CtfRefine:   '#DCBEFF', // Lavender
  
  // --- Final Steps (High Contrast / Deep) ---
  Polish:      '#9A6324', // Brown
  LocalRes:    '#FFFAC8', // Beige
  MaskCreate:  '#00F5FF', // Navy (Deep contrast to reds/pinks)
  Reconstruct: '#AAFFC3', // Mint
}

export const STATUS_COLOR = {
  running:  '#f59e0b',
  finished: '#10b981',
  failed:   '#ef4444',
  aborted:  '#f97316',
  queued:   '#475569',
}

export const ThemeContext = createContext(themes.dark)
export const useTheme = () => useContext(ThemeContext)
