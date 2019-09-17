import React from 'react';

export default function FriendCard(props) {
  console.log(props.friend);
  return (
    <div className='friend-card'>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
}
