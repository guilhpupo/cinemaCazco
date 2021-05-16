import React from 'react'

import Home from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Home />', () => {
  it('should render the Home Page', () => {
    renderWithTheme(<Home />)
  })
})
