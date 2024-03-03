import axios from 'axios';
import { TheMovieDB } from './ApiData';

const { BASE_URL, API_KEY, path } = TheMovieDB;
const INITIAL_PARAMS = {
  api_key: API_KEY,
  language: 'en-US',
};
axios.defaults.baseURL = BASE_URL;

export const getParams = params => {
  return new URLSearchParams(params);
};

export const getTrendingMovies = async () => {
  const url = `${path.TRENDING}${path.MOVIE}/day?${getParams(INITIAL_PARAMS)}`;
  // console.log('url>> ', url);
  const { data } = await axios.get(url);
  console.log('trending results>> ', data.results);
  return data.results;
};

export const searchMovies = async searchQuery => {
  const params = { query: searchQuery, include_adult: true };
  const paramsString = `?${getParams(INITIAL_PARAMS)}&${getParams(params)}`;
  const url = `${path.SEARCH}${path.MOVIE}${paramsString}`;
  // console.log('search url>> ', url);
  const { data } = await axios.get(url);
  console.log('search results>> ', data.results);
  return data.results;
};
