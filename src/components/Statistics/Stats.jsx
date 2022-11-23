import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import {randomColor} from './randomColor'

export const Stats = ({stats}) => {
  return (<ul className={styles.statList}>
          {stats.map(({id, label, percentage}) => (
        <li className={styles.item} key={id} style={{
        backgroundColor: `${randomColor()}`,
      }}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

Stats.propTypes = {
          stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
    })),

}