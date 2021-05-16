import React from 'react'

import { Caption, Image, Wrapper, Title, Rating } from './styles'

export type CardProps = {
  img: string
  title: string
  year: string
  rating: string
}
const Card = ({ img, rating, title, year }: CardProps) => (
  <Wrapper>
    <Image src={img} role="img" aria-label={title} />
    <Caption>
      <Title>
        {title} ({year})
      </Title>
      <Rating>{rating}</Rating>
    </Caption>
  </Wrapper>
)

export default Card
