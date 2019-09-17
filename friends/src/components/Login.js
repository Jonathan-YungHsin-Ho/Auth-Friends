import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = e =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/friendspage');
      })
      .catch(err => console.log(err));
  };

  if (localStorage.getItem('token')) return <Redirect to='/friendspage' />;

  return (
    <div>
      <form onSubmit={login}>
        <input
          type='text'
          name='username'
          placeholder='...username'
          autoComplete='off'
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='...password'
          autoComplete='off'
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
