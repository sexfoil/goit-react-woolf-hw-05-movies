import axios from 'axios';
import { TheMovieDB, fakeMovie } from './ApiData';

const { BASE_URL, API_KEY, path } = TheMovieDB;

axios.defaults.baseURL = BASE_URL;

export const getParams = () => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  return new URLSearchParams(params);
  // return BASE_URL + path.SEARCH + path.MOVIE + '?api_key=' + API_KEY;
};

export const getMovie = () => {
  return fakeMovie;
};

export const getTrendingMovies = async () => {
  const url = `${path.TRENDING}${path.MOVIE}/day?${getParams()}`;
  // console.log('url>> ', url);
  const { data } = await axios.get(url);
  console.log('data>> ', data.results);
  return data.results;
};
