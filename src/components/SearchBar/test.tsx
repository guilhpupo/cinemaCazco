import React from 'react'

import { screen } from '@testing-library/react'

import SearchBar from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SearchBar />', () => {
  it('should render the search bar', () => {
    renderWithTheme(<SearchBar />)

    expect(
      screen.getByPlaceholderText(/search movies, tv shows.../i)
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })
})
