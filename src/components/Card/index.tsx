import React from 'react'
import { useHistory } from 'react-router-dom'

import { Caption, Image, Wrapper, Title as TitleStyled, Rating } from './styles'

export type CardProps = {
  Poster: string
  Title: string
  Year: string
  imdbRating?: string
  className?: string
}
const Card = ({ Poster, imdbRating, Title, Year, className }: CardProps) => {
  const history = useHistory()

  return (
    <Wrapper
      className={className}
      onClick={() => {
        history.push(`title/${Title}`)
      }}
    >
      {Poster == 'N/A' ? (
        <Image
          src="https://www.movienewz.com/img/films/poster-holder.jpg"
          role="img"
          aria-label={Title}
        />
      ) : (
        <Image src={Poster} role="img" aria-label={Title} />
      )}
      <Caption>
        <TitleStyled>
          {Title}
          <br />({Year})
        </TitleStyled>
        {!!imdbRating && <Rating>{imdbRating}</Rating>}
      </Caption>
    </Wrapper>
  )
}

export default Card
