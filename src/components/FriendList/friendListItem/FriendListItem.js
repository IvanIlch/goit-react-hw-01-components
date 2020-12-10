import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList.module.scss";

function FriendListItem({ data }) {
  return (
    <>
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
    </>
  );
}
FriendListItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendListItem;
