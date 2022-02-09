import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PaletteColor
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }

  interface PaletteColor {
    darker?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }
}
