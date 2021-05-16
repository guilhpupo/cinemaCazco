import React from 'react'

import { Wrapper } from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'orange'
  size?: 'large' | 'normal'
  lineBottom?: boolean
}
const Heading = ({
  children,
  color = 'white',
  size = 'normal',
  lineBottom = false
}: HeadingProps) => (
  <Wrapper color={color} size={size} lineBottom={lineBottom}>
    {children}
  </Wrapper>
)

export default Heading
