import { Api } from './Api'

import { CardProps } from 'components/Card'

export type TitleProps = {
  Title: string
  Year: string
  imdbRating: string
  Rated?: string
  Runtime?: string
  Genre?: string
  Released?: string
  Poster: string
  Director?: string
  Writer?: string
  Actors?: string
  Plot: string
  Type: string
}

export const getEmptyTitle = (): TitleProps => {
  return {
    Title: '',
    Year: '',
    Poster: '',
    imdbRating: '',
    Plot: '',
    Type: ''
  }
}
export const searchTitles = async (title: string) => {
  try {
    const { data } = await Api.get('/', {
      params: { s: `${title}` }
    })

    if (data.Response === 'False') throw new Error()

    const cards: CardProps[] = []

    data.Search.forEach((item: CardProps) => {
      const card: CardProps = {
        Title: item.Title,
        Poster: item.Poster,
        Year: item.Year
      }
      cards.push(card)
    })
    return cards
  } catch (error) {
    throw new Error()
  }
}

export const findTitle = async (title: string) => {
  try {
    const response = await Api.get('/', {
      params: { plot: 'full', t: title }
    })

    if (response.data.Response === 'False') throw new Error()

    const data: TitleProps = response.data
    const dataTitle: TitleProps = {
      Title: data.Title,
      Year: data.Year,
      imdbRating: data.imdbRating,

      Rated: data.Rated,
      Runtime: data.Runtime,
      Genre: data.Genre,
      Released: data.Released,
      Poster: data.Poster,
      Director: data.Director,
      Writer: data.Writer,
      Actors: data.Actors,
      Plot: data.Plot,
      Type: data.Type[0].toUpperCase() + data.Type.slice(1)
    }
    return dataTitle
  } catch (error) {
    throw new Error()
  }
}
