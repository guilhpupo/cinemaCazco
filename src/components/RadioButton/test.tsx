import React from 'react'

import RadioButton, { RadioButtonProps } from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import { screen } from '@testing-library/react'

const args: RadioButtonProps = {
  children: 'Test',
  checked: false,
  onChange: (value) => !value
}

describe('<RadioButton />', () => {
  it('should render the orange radio button by default', () => {
    renderWithTheme(<RadioButton {...args} />)

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.orange
    })
  })
  it('should render the white radio button when passed', () => {
    renderWithTheme(<RadioButton {...args} color="white" />)

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
