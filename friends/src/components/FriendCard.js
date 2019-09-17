import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteData, getData } from '../store/actions';

export default function FriendCard(props) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(state => state.isDeleting);

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteData(props.friend.id));
  };

  useEffect(() => dispatch(getData()), [isDeleting]);

  return (
    <div className='friend-card'>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <button onClick={handleDelete}>Byeeee</button>
    </div>
  );
}
