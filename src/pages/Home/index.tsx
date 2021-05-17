import React from 'react'
import { Helmet } from 'react-helmet'

import CardSlider from 'components/CardSlider'
import Header from 'components/Header'
import Heading from 'components/Heading'

import top10Movies from 'mocks/Top10Movies'
import top10TvShows from 'mocks/Top10TvShows'
import Container from 'utils/components/Container'

import { Wrapper, Sliders } from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Helmet title="Home - Cinema Cazco" />
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
