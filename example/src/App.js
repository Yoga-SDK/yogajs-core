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
  const [user, setUser] = useState({});

  const handleClick = () => {
    yogajs.auth().signInWithIdentityAndPassword('email@email.com', 'senha123');
  }

  const handleGetProfile = () => {
    yogajs.db('/me/posts:34').one().then(data => {
      console.log(data)
    });
  }

  const handleLogout = () => {
    yogajs.auth().logout();
  }

  return (
    <div>
      <h1>hello, { !user.name ? 'Please login' : user.name }</h1>
      <button onClick={handleClick}>Test connection</button> <br /><br />
      <button onClick={handleGetProfile}>Get profile</button> <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
