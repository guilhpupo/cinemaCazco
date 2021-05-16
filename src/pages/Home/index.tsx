import CardSlider from 'components/CardSlider'
import Header from 'components/Header'
import Heading from 'components/Heading'
import React from 'react'
import { Wrapper, Container, Sliders } from './styles'

import top10Movies from 'mocks/Top10Movies'
import top10TvShows from 'mocks/Top10TvShows'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Sliders>
          <Heading lineBottom size="large">
            Top Rated Movies
          </Heading>
          <CardSlider items={top10Movies} />
          <Heading lineBottom size="large">
            Top Rated TV Shows
          </Heading>
          <CardSlider items={top10TvShows} />
        </Sliders>
      </Container>
    </Wrapper>
  )
}
