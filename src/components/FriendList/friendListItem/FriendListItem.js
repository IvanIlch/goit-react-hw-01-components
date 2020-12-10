import React from "react";
import PropTypes from "prop-types";
import styles from "../FriendList.module.scss";

function FriendListItem({ name, id, isOnline, avatar }) {
  return (
    <>
      <li key={id} className="item">
        <span className={isOnline ? styles.online : styles.notOnline}></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
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
