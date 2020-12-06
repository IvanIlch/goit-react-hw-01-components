import React from "react";
// import PropTypes from "prop-types";
import styles from "./FriendList.module.scss";

function FriendList({ data }) {
  return (
    <ul className={styles.friendList}>
      {data.map((el) => {
        return (
          <li key={el.id} className="item">
            <span
              className={el.isOnline ? styles.online : styles.notOnline}
            ></span>
            <img className={styles.avatar} src={el.avatar} alt="" width="48" />
            <p className={styles.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.defaultProps = {
  type: "?",
  amount: "?",
  currency: "?",
};
// FriendList.propTypes = {
//   data: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//   }),
// };

export default FriendList;
