import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import 'modern-normalize/modern-normalize.css';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(({ type, amount, currency, id }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={styles.blueTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.number,
    })
  ),
};
