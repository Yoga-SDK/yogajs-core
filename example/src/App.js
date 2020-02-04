import React, { useState } from 'react';
import yogajs from '@yogajs/core';

yogajs.initializeApp({
  appUrl: 'http://localhost:8000/yoga'
})

yogajs.auth().onAuthStateChanged( user => {
  if (user) {
    console.log('logado', user);
  } else {
     console.log('não logado', user);
  }
});

function App() {
  const [user] = useState({});

  const handleClick = () => {
    yogajs.auth().signInWithIdentityAndPassword('leo@leo.com', '123456');
  }

  const handleGetProfile = () => {
    yogajs.auth().getCurrentUser().then( user => console.log('current logged user', user));
  }

  const handleCreateUser = () => {
    yogajs.auth().createUser({
      name: 'fulano',
      email: 'fulano@fulano.com',
      password: '123456'
    })
  }

  const handleLogout = () => {
    yogajs.auth().logout();
  }

  return (
    <div>
      <h1>hello, { !user.name ? 'Please login' : user.name }</h1>
      <button onClick={handleClick}>Test connection</button> <br /><br />
      <button onClick={handleGetProfile}>Get profile</button> <br /><br />
      <button onClick={handleCreateUser}>Create Profile</button> <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
