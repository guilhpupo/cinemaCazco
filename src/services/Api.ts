import Axios from 'axios'

const REACT_APP_OMDB_APIKEY = process.env.REACT_APP_OMDB_APIKEY

export const Api = Axios.create({
  baseURL: `http://www.omdbapi.com/`,
  params: {
    apikey: REACT_APP_OMDB_APIKEY
  }
})
