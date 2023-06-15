import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button>Hello world!</Button>)
  })
})
