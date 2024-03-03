export const TheMovieDB = {
  BASE_URL: 'https://api.themoviedb.org/3/',
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
  },
};

export const fakeMovie = {
  adult: false,
  backdrop_path: '/gzlprPDmKCS4bUT4BxQZmJfpMX9.jpg',
  id: 636706,
  title: 'Spaceman',
  original_language: 'en',
  original_title: 'Spaceman',
  overview:
    'During a research mission, an astronaut discovers that his marriage is in trouble. Luckily, he has the help of a mysterious creature hidden in his ship.',
  poster_path: '/5hnFFOWEchErNVr0wMLWFEob3q1.jpg',
  media_type: 'movie',
  genre_ids: [878, 18],
  popularity: 77.58,
  release_date: '2024-02-23',
  video: false,
  vote_average: 6.036,
  vote_count: 28,
};
