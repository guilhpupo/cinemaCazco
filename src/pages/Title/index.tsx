import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { findTitle, getEmptyTitle } from 'services/TitlesService'

import Header from 'components/Header'
import { MdStar as StarIcon } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'

import Container from 'utils/components/Container'

import {
  TopSection,
  Wrapper,
  Title as TitleStyled,
  Year as YearStyled,
  Rating,
  Text,
  Span,
  TopLine,
  Image,
  SmallRating,
  BottomSection,
  Info,
  LoadingSpinner
} from './styles'

import { TitleProps } from 'services/TitlesService'

const Title = () => {
  const [loading, setLoading] = useState(false)
  const [titleData, setTitleData] = useState<TitleProps>(getEmptyTitle())
  const [error, setError] = useState('')

  const { title } = useParams<{ title: string }>()

  useEffect(() => {
    async function handleTitleData() {
      try {
        setLoading(true)
        const data = await findTitle(title)
        setTitleData({ ...data })
      } catch (e) {
        setError('Movie/TV Show not found!')
      } finally {
        setLoading(false)
      }
    }
    handleTitleData()

    return () => setTitleData(getEmptyTitle())
  }, [title])

  return (
    <Wrapper>
      <Helmet title={`${title} - Cinema Cazco`} />
      <Container>
        <Header />
        {loading ? (
          <LoadingSpinner>
            <ClipLoader color="#FAFAFA" />
          </LoadingSpinner>
        ) : (
          <Container size="small">
            <TopSection>
              <TopLine>
                <Span>
                  {!!error && <TitleStyled>{error}</TitleStyled>}
                  <TitleStyled>{titleData.Title}</TitleStyled>
                </Span>
                {!!titleData.imdbRating && (
                  <Span>
                    <Rating>
                      <StarIcon />
                      {titleData.imdbRating}
                      <SmallRating>/10</SmallRating>
                    </Rating>
                  </Span>
                )}
              </TopLine>
              {!!titleData.Year && (
                <YearStyled>
                  {!!titleData.Type && <>{titleData.Type}</>} ({titleData.Year})
                </YearStyled>
              )}

              <Text>
                {!!titleData.Rated && <>{titleData.Rated} | </>}
                {!!titleData.Runtime && <>{titleData.Runtime}</>}
                <br />
                {!!titleData.Genre && <>{titleData.Genre} | </>}
                {!!titleData.Released && <>{titleData.Released}</>}
              </Text>
            </TopSection>
            <BottomSection>
              {!!titleData.Poster &&
                (titleData.Poster === 'N/A' ? (
                  <Image
                    src="https://www.movienewz.com/img/films/poster-holder.jpg"
                    aria-label={titleData.Title}
                  />
                ) : (
                  <Image src={titleData.Poster} aria-label={titleData.Title} />
                ))}
              <Info>
                {!!titleData.Plot && <Text>{titleData.Plot}</Text>}
                {!!titleData.Director && (
                  <Text>Director: {titleData.Director}</Text>
                )}
                {!!titleData.Writer && <Text>Writers: {titleData.Writer}</Text>}
                {!!titleData.Actors && <Text>Actors: {titleData.Actors}</Text>}
              </Info>
            </BottomSection>
          </Container>
        )}
      </Container>
    </Wrapper>
  )
}

export default Title
