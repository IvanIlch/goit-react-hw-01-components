import React from "react";
// import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

function TransactionHistory({ data }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.list}>
        {data.map((el) => {
          return (
            <tr className={styles.items} key={el.id}>
              <td>{toUp(el.type)}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
TransactionHistory.defaultProps = {
  type: "?",
  amount: "?",
  currency: "?",
};
// TransactionHistory.propTypes = {
//   // id: PropTypes.number.isRequired,
// };

function toUp(elem) {
  return elem[0].toUpperCase() + elem.slice(1);
}

export default TransactionHistory;
