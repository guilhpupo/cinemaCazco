import React from 'react'

import { Caption, Image, Wrapper, Title, Rating } from './styles'

export type CardProps = {
  poster: string
  title: string
  year: string
  imdbRating: string
}
const Card = ({ poster, imdbRating, title, year }: CardProps) => (
  <Wrapper>
    <Image src={poster} role="img" aria-label={title} />
    <Caption>
      <Title>
        {title}
        <br />({year})
      </Title>
      <Rating>{imdbRating}</Rating>
    </Caption>
  </Wrapper>
)

export default Card
