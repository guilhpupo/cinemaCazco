import React from 'react'

import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import mock from 'mocks/Top10Movies'

import Card from '.'

describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...mock[0]} />)

    expect(
      screen.getByRole('img', { name: /the shawshank redemption/i })
    ).toHaveAttribute(
      'src',
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
    )
    expect(
      screen.getByRole('heading', { name: /the shawshank redemption/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /9.3/i
      })
    ).toBeInTheDocument()
  })
})
