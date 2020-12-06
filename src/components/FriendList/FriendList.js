import React from "react";
import PropTypes from "prop-types";
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
  avatar:
    "https://st2.depositphotos.com/4111759/12123/v/600/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg",
  name: "Unknow",
};
FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;
