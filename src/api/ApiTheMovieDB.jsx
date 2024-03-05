import axios from 'axios';
import { TheMovieDB } from '../constants/ApiData';

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
  const { data } = await axios.get(url);
  return data.results;
};

export const searchMovies = async searchQuery => {
  const params = { query: searchQuery, include_adult: true };
  const paramsString = `?${getParams(INITIAL_PARAMS)}&${getParams(params)}`;
  const url = `${path.SEARCH}${path.MOVIE}${paramsString}`;
  const { data } = await axios.get(url);
  return data.results;
};

export const getMovieById = async id => {
  const paramsString = `?${getParams(INITIAL_PARAMS)}`;
  const url = `${path.MOVIE}/${id}${paramsString}`;
  const { data } = await axios.get(url);
  console.log('data results>> ', data);
  return data;
};
