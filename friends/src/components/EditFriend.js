import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putData, getData } from '../store/actions';

export default function EditFriend() {
  const [friendToUpdate, setFriendToUpdate] = useState({});
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const data = useSelector(state => state.data);
  const isPutting = useSelector(state => state.isPutting);

  const handleSelect = e => {
    const targetFriend = JSON.parse(e.target.value);
    setFriendToUpdate({
      ...friendToUpdate,
      name: targetFriend.name,
      age: targetFriend.age,
      email: targetFriend.email,
    });
    setId(targetFriend.id);
  };

  const handleChange = e => {
    setFriendToUpdate({ ...friendToUpdate, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putData(id, friendToUpdate));
  };

  useEffect(() => dispatch(getData()), [isPutting]);

  return (
    <div>
      <h2>Edit a Friend</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={handleSelect}>
          <option>Select a friend...</option>
          {data.map(friend => (
            <option key={friend.id} value={JSON.stringify(friend)}>
              {friend.name}
            </option>
          ))}
        </select>
        <input
          type='text'
          name='name'
          value={friendToUpdate.name}
          placeholder='...name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='age'
          value={friendToUpdate.age}
          placeholder='...age'
          onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          value={friendToUpdate.email}
          placeholder='...email'
          onChange={handleChange}
        />
        <button>Edit Friend</button>
      </form>
    </div>
  );
}
