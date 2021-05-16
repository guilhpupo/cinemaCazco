import { OmdbApi } from './OmdbApi'

export const searchTitles = async (text: string) => {
  try {
    const { data } = await OmdbApi.get('/', {
      params: { plot: 'full', s: text }
    })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
