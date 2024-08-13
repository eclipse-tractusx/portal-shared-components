/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { ReactElement } from 'react'
import { screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Info } from '@mui/icons-material'
import { Hyperlink } from '.'
import { render } from '../../../test/testUtils'
import image from '../../../assets/logo/cx-logo.svg'
import '@testing-library/jest-dom'

const theme = createTheme()

describe('Hyperlink Component', () => {
  const renderWithTheme = (component: ReactElement) => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
  }

  const href = '?path=/docs/hyperlink--docs'
  const text = 'Visit Home'
  const imgSrc = `${image}`

  test('renders the Hyperlink component', () => {
    renderWithTheme(<Hyperlink href={href} text={text} />)

    const linkElement = screen.getByText(text)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.closest('a')).toHaveAttribute('href', href)
  })

  test('renders with a leading SVG icon', () => {
    renderWithTheme(
      <Hyperlink href={href} text={text} leadingIcon={<Info />} />
    )

    const iconElement = screen.getByTestId('leading-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toContainHTML('<svg')
  })

  test('renders with a trailing SVG icon', () => {
    renderWithTheme(
      <Hyperlink href={href} text={text} trailingIcon={<Info />} />
    )

    const iconElement = screen.getByTestId('trailing-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toContainHTML('<svg')
  })

  test('renders with a leading image icon', () => {
    renderWithTheme(<Hyperlink href={href} text={text} leadingIcon={imgSrc} />)

    const iconElement = screen.getByTestId('leading-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toContainHTML('<img')
  })

  test('renders with a trailing image icon', () => {
    renderWithTheme(<Hyperlink href={href} text={text} trailingIcon={imgSrc} />)

    const iconElement = screen.getByTestId('trailing-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toContainHTML('<img')
  })

  test('applies underline style when prop is set', () => {
    renderWithTheme(<Hyperlink href={href} text={text} underline />)

    const linkElement = screen.getByText(text)
    expect(linkElement.closest('a')).toHaveStyle(
      'border-bottom: 1px solid currentColor'
    )
  })

  test('does not apply underline style when prop is not set', () => {
    renderWithTheme(<Hyperlink href={href} text={text} />)

    const linkElement = screen.getByText(text)
    expect(linkElement.closest('a')).not.toHaveStyle('border-bottom: ')
  })

  test('renders in small size variant', () => {
    renderWithTheme(<Hyperlink href={href} text={text} size="small" />)

    const linkElement = screen.getByText(text)
    expect(linkElement.closest('a')).toHaveClass('cx-hyperlink__small')
  })

  test('applies hover style correctly', () => {
    renderWithTheme(<Hyperlink href={href} text={text} underline />)

    const linkElement = screen.getByText(text)
    fireEvent.mouseOver(linkElement)

    expect(linkElement.closest('a')).toHaveStyle(
      `color: ${theme.palette.primary.dark}`
    )
  })

  test('renders with heading text variant', () => {
    renderWithTheme(<Hyperlink href={href} text={text} isHeading />)

    const linkElement = screen.getByText(text)
    expect(linkElement.closest('a')).toHaveClass('cx-hyperlink__normalHeading')
  })
})
