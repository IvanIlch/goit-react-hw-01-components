import React from "react";
import styles from "./FriendList.module.scss";
import FriendListItem from "./friendListItem/FriendListItem";

function FriendList({ data }) {
  return (
    <ul className={styles.friendList}>
      <FriendListItem data={data} />
    </ul>
  );
}
FriendList.defaultProps = {
  avatar:
    "https://st2.depositphotos.com/4111759/12123/v/600/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg",
  name: "Unknow",
};

export default FriendList;
