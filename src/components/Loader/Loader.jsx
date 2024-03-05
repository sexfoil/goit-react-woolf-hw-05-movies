import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css['loader-container']}>
      <Grid
        height="40"
        width="40"
        radius="10"
        color="teal"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
