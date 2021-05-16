import React from 'react'

import CardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import items from '../../mocks/Top10TvShows'

describe('<CardSlider />', () => {
  it('should render with 5 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(5)
  })
})
