import React from 'react'

import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

describe('<Heading />', () => {
  it('should render a normal size heading by default', () => {
    renderWithTheme(<Heading>Test</Heading>)

    expect(screen.getByText(/test/i)).toHaveStyle({
      fontSize: theme.font.sizes.xlarge,
      fontWeight: theme.font.normal
    })
  })
  it('should render a large size heading when passed', () => {
    renderWithTheme(<Heading size="large">Test</Heading>)

    expect(screen.getByText(/test/i)).toHaveStyle({
      fontSize: theme.font.sizes.xxlarge,
      fontWeight: theme.font.bold
    })
  })
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Test</Heading>)

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
  it('should render an orange heading when passed', () => {
    renderWithTheme(<Heading color="orange">Test</Heading>)

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.orange
    })
  })
})
