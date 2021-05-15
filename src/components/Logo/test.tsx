import React from 'react'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal size logo by default', () => {
    renderWithTheme(<Logo />)

    expect(
      screen.getByLabelText(/cinema cazco logo/i).parentElement
    ).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a small size logo when passed', () => {
    renderWithTheme(<Logo size="small" />)

    expect(
      screen.getByLabelText(/cinema cazco logo/i).parentElement
    ).toHaveStyle({
      width: '11rem'
    })
  })
})
