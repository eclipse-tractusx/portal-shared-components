import React, { type ReactElement } from 'react'
import { SharedThemeProvider } from '../components'
import { render as rtlRender, type RenderOptions } from '@testing-library/react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <SharedThemeProvider>{children}</SharedThemeProvider>
}

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options })
