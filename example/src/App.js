import React from 'react';
import yogajs from '@yogajs/core';

yogajs.initializeApp({
  appUrl: 'http://localhost:8000/yoga'
})

yogajs.auth().onAuthStateChanged(user => {
  if (user) {
    yogajs.auth().getCurrentUser().then( user => {
      console.log(user);
    });
  } else {
    console.log('logout');
  }
})

function App() {

  const handleClick = () => {
    yogajs.auth().signInWithIdentityAndPassword('email@email.com', 'senha123');
  }

  const handleGetProfile = () => {
    yogajs.auth().getCurrentUser().then( user => {
      console.log(user)
    }, err => console.log(err));
  }

  const handleLogout = () => {
    yogajs.auth().logout();
  }

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={handleClick}>Test connection</button> <br /><br />
      <button onClick={handleGetProfile}>Get profile</button> <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
