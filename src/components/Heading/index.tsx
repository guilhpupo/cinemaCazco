import React from 'react'

import { Wrapper } from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'orange'
  size?: 'large' | 'normal'
}
const Heading = ({
  children,
  color = 'white',
  size = 'normal'
}: HeadingProps) => (
  <Wrapper color={color} size={size}>
    {children}
  </Wrapper>
)

export default Heading
