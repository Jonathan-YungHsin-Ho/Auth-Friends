import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';

export default function FriendsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Friends List</h2>
      {data.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
