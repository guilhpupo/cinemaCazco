import Header from 'components/Header'
import Heading from 'components/Heading'
import React from 'react'
import { Wrapper, Container } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Heading lineBottom size="large">
          Top rated
        </Heading>
      </Container>
    </Wrapper>
  )
}
