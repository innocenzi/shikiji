import type { ThemeRegisterationRaw } from '../types'

type DynamicThemeReg = () => Promise<{ default: ThemeRegisterationRaw }>

export const bundledThemes = {
  "css-variables": (() => import('shiki/themes/css-variables.json')) as unknown as DynamicThemeReg,
  "dark-plus": (() => import('shiki/themes/dark-plus.json')) as unknown as DynamicThemeReg,
  "dracula": (() => import('shiki/themes/dracula.json')) as unknown as DynamicThemeReg,
  "dracula-soft": (() => import('shiki/themes/dracula-soft.json')) as unknown as DynamicThemeReg,
  "github-dark": (() => import('shiki/themes/github-dark.json')) as unknown as DynamicThemeReg,
  "github-dark-dimmed": (() => import('shiki/themes/github-dark-dimmed.json')) as unknown as DynamicThemeReg,
  "github-light": (() => import('shiki/themes/github-light.json')) as unknown as DynamicThemeReg,
  "hc_light": (() => import('shiki/themes/hc_light.json')) as unknown as DynamicThemeReg,
  "light-plus": (() => import('shiki/themes/light-plus.json')) as unknown as DynamicThemeReg,
  "material-theme": (() => import('shiki/themes/material-theme.json')) as unknown as DynamicThemeReg,
  "material-theme-darker": (() => import('shiki/themes/material-theme-darker.json')) as unknown as DynamicThemeReg,
  "material-theme-lighter": (() => import('shiki/themes/material-theme-lighter.json')) as unknown as DynamicThemeReg,
  "material-theme-ocean": (() => import('shiki/themes/material-theme-ocean.json')) as unknown as DynamicThemeReg,
  "material-theme-palenight": (() => import('shiki/themes/material-theme-palenight.json')) as unknown as DynamicThemeReg,
  "min-dark": (() => import('shiki/themes/min-dark.json')) as unknown as DynamicThemeReg,
  "min-light": (() => import('shiki/themes/min-light.json')) as unknown as DynamicThemeReg,
  "monokai": (() => import('shiki/themes/monokai.json')) as unknown as DynamicThemeReg,
  "nord": (() => import('shiki/themes/nord.json')) as unknown as DynamicThemeReg,
  "one-dark-pro": (() => import('shiki/themes/one-dark-pro.json')) as unknown as DynamicThemeReg,
  "poimandres": (() => import('shiki/themes/poimandres.json')) as unknown as DynamicThemeReg,
  "rose-pine": (() => import('shiki/themes/rose-pine.json')) as unknown as DynamicThemeReg,
  "rose-pine-dawn": (() => import('shiki/themes/rose-pine-dawn.json')) as unknown as DynamicThemeReg,
  "rose-pine-moon": (() => import('shiki/themes/rose-pine-moon.json')) as unknown as DynamicThemeReg,
  "slack-dark": (() => import('shiki/themes/slack-dark.json')) as unknown as DynamicThemeReg,
  "slack-ochin": (() => import('shiki/themes/slack-ochin.json')) as unknown as DynamicThemeReg,
  "solarized-dark": (() => import('shiki/themes/solarized-dark.json')) as unknown as DynamicThemeReg,
  "solarized-light": (() => import('shiki/themes/solarized-light.json')) as unknown as DynamicThemeReg,
  "vitesse-dark": (() => import('shiki/themes/vitesse-dark.json')) as unknown as DynamicThemeReg,
  "vitesse-light": (() => import('shiki/themes/vitesse-light.json')) as unknown as DynamicThemeReg
}