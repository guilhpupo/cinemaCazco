import React from 'react'

import { Wrapper } from './styles'

export type ButtonProps = {
  type?: 'button' | 'submit'
  color?: 'white' | 'darkBlue'
  size?: 'normal' | 'small'
  icon?: JSX.Element
}
const Button = ({
  color = 'darkBlue',
  size = 'normal',
  type = 'button',
  icon
}: ButtonProps) => (
  <Wrapper type={type} color={color} size={size}>
    {icon}
  </Wrapper>
)

export default Button
