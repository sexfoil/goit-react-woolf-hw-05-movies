export const TheMovieDB = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  RESOURCE_URL: 'https://image.tmdb.org/t/p/w500/',
  API_KEY: 'f1de34db471972e1237a0951bf305550',
  BEARER_TOKEN:
    'eyJhbGciOiJIUzI1NiJ9.' +
    'eyJhdWQiOiJmMWRlMzRkYjQ3MTk3MmUxMjM3YTA5NTFiZjMwNTU1MCIsInN1YiI6IjY1ZTMwMDIzZ' +
    'Tk0MmJlMDE4N2VhNmE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ' +
    '.eX18rjcH0G4tYeqYW1wlCb_TGKkgpm4XTMea_oYnc_o',
  path: {
    MOVIE: '/movie',
    TRENDING: '/trending',
    SEARCH: '/search',
    CREDITS: '/credits',
    REVIEWS: '/reviews',
  },
};

export const NO_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
