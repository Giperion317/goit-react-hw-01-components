import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const Transactions = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
      ))}
    </tbody>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};