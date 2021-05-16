import React from 'react'

import { Wrapper, Radio } from './styles'

export type RadioButtonColors = 'orange' | 'white'
export type RadioValues = 'movie' | 'series'

export type RadioButtonProps = {
  children: React.ReactNode
  color?: RadioButtonColors
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}
const RadioButton = ({
  children,
  color = 'orange',
  onChange,
  checked = false
}: RadioButtonProps) => (
  <Wrapper color={color}>
    <Radio
      onChange={onChange}
      checked={checked}
      color="red"
      className="checkmark"
    />
    <span>{children}</span>
  </Wrapper>
)

export default RadioButton
