import React from 'react'

import CardSlider from '.'
import { renderWithTheme } from 'utils/tests/helpers'

import mock from 'mocks/Top10TvShows'

describe('<CardSlider />', () => {
  it('should render 10 items', () => {
    const { container } = renderWithTheme(<CardSlider items={mock} />)
    expect(container.querySelectorAll('.keen-slider__slide')).toHaveLength(10)
  })
})
