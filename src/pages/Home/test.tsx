import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the Home Page', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
  })
})
