import CardSlider from 'components/CardSlider'
import Header from 'components/Header'
import Heading from 'components/Heading'
import React from 'react'
import { Wrapper, Container } from './styles'

import Cards from 'components/CardSlider/mock'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Heading lineBottom size="large">
          Top rated
        </Heading>
        <CardSlider items={Cards} />
      </Container>
    </Wrapper>
  )
}
