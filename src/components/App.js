import React from "react";
import Profile from "./Profile/Profile";
import Statistic from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../users.json";
import statistic from "../statistical-data.json";
import friends from "../friends.json";
import transaction from "../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic stats={statistic} title="Upload stats" />
      <Statistic stats={statistic} />
      <FriendList data={friends} />
      <TransactionHistory data={transaction} />
    </>
  );
}
