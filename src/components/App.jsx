import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

import {Profile} from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={data}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
    </>
  );
};
