import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '11c1003addf330f596b73185052fcd00',
    language: 'es-ES'
  }
})

export default tmdb;