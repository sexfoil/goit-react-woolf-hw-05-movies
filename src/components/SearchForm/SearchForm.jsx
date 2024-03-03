import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onMovieSearch }) => {
  const [query, setQuery] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    if (query) {
      onMovieSearch(query);
    }
  };

  const onChange = evt => {
    setQuery(evt.target.value.trim());
  };

  return (
    <form className={css.search} onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        onChange={onChange}
        autoComplete="off"
        autoFocus
        placeholder="Type movie name"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
