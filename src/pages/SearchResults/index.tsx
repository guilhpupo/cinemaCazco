import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { searchTitles } from 'services/TitlesService'

import CardSlider from 'components/CardSlider'
import Header from 'components/Header'
import Heading from 'components/Heading'
import { ClipLoader } from 'react-spinners'

import Container from 'utils/components/Container'

import { LoadingSpinner, Wrapper } from './styles'

import { CardProps } from 'components/Card'

export default function SearchResults() {
  const { title } = useParams<{ title: string }>()
  const [results, setResults] = useState<CardProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function handleResults() {
      try {
        setLoading(true)
        const resultsList = await searchTitles(title)
        setResults([...resultsList])
      } catch (error) {
        setError(`No results found for "${title}"`)
      } finally {
        setLoading(false)
      }
    }
    handleResults()
    return () => {
      setResults([])
      setError('')
    }
  }, [title])

  return (
    <Wrapper>
      <Helmet title="Search Results - Cinema Cazco" />
      <Container>
        <Header />
        {loading ? (
          <LoadingSpinner>
            <ClipLoader color="#FAFAFA" />
          </LoadingSpinner>
        ) : (
          <>
            {!error && (
              <Heading lineBottom size="large">
                Search Results for {`"${title}"`}
              </Heading>
            )}

            {!!error && <Heading size="normal">{error}</Heading>}
            <CardSlider items={results} />
          </>
        )}
      </Container>
    </Wrapper>
  )
}
