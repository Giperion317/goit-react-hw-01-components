import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics'
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../data/user";
import data from "../data/data";
import friends from "../data/friends";
import transactions from "../data/transactions";


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
};
