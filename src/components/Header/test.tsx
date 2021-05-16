import React from 'react'

import { fireEvent, screen } from '@testing-library/react'

import Header from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Header />', () => {
  it('should render the open/close mobile fullscreen search', () => {
    renderWithTheme(<Header />)

    const fullScreenElement = screen.getByRole('search', { hidden: true })
    expect(fullScreenElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullScreenElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open search/i))
    expect(fullScreenElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullScreenElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close search/i))
    expect(fullScreenElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullScreenElement).toHaveStyle({ opacity: 0 })
  })
})
