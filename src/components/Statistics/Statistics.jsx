import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import 'modern-normalize/modern-normalize.css';

export const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statsItems}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
