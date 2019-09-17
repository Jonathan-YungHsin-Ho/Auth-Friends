import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from '../store/actions';

import FriendCard from './FriendCard';

export default function FriendsList() {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getData()), []);

  return (
    <div className='friends-page'>
      <h2>Friends List</h2>
      <div className='friends-wrapper'>
        {data.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
