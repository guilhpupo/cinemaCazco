import React from 'react'

import SearchButton from '.'

import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SearchButton />', () => {
  it('should render a normal size button by default', () => {
    const { container } = renderWithTheme(<SearchButton />)

    expect(container.firstChild).toHaveStyle({
      width: '3.2rem',
      height: '3.2rem'
    })
  })
  it('should render a small size button when passed', () => {
    const { container } = renderWithTheme(<SearchButton size="small" />)

    expect(container.firstChild).toHaveStyle({
      width: '2.4rem',
      height: '2.4rem'
    })
  })
  it('should render a dark blue button by default', () => {
    const { container } = renderWithTheme(<SearchButton />)

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.darkBlue
    })
  })
  it('should render a white button when passed', () => {
    const { container } = renderWithTheme(<SearchButton color="white" />)

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.white
    })
  })
  it('should render a button type button by default', () => {
    const { container } = renderWithTheme(<SearchButton />)

    expect(container.firstChild).toHaveAttribute('type', 'button')
  })
  it('should render a button type submit when passed', () => {
    const { container } = renderWithTheme(<SearchButton type="submit" />)

    expect(container.firstChild).toHaveAttribute('type', 'submit')
  })
})
