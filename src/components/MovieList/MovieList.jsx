import MovieListItem from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieListItem key={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};

export default MovieList;
