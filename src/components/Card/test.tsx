import React from 'react'

import { screen } from '@testing-library/react'

import Card, { CardProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const args: CardProps = {
  img: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  title: 'Forrest Gump',
  year: '1994',
  rating: '8.8/10'
}
describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...args} />)

    expect(screen.getByRole('img', { name: /forrest gump/i })).toHaveAttribute(
      'src',
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
    )
    expect(
      screen.getByRole('heading', { name: /forrest gump/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /8.8\/10/i
      })
    ).toBeInTheDocument()
  })
})
