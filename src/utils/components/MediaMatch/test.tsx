import React from 'react'

import { render, screen } from '@testing-library/react'

import MediaMatch from '.'

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element

  beforeEach(() => {
    render(
      <>
        <MediaMatch showOnDesktop>
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch showOnMobo>
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )

    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'flex', {
      media: '(min-width: 769px)'
    })
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'flex', {
      media: '(max-width: 768px)'
    })
  })
})
