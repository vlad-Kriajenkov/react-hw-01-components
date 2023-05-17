import { Profile } from "components/Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { Friend } from "./FriendList/Friend";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"; 

import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from '../transactions.json'
import css from "./App.module.css";


export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friend items={friends} />
     <TransactionHistory items={transactions}/>
    </div>
  );
};
