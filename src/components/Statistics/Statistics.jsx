import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { Stats } from './Stats';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title !== '' && <h2 className={styles.title}>{title}</h2>}
      <Stats stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
