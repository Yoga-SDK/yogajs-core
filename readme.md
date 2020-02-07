# YogaJS (Alpha)
## JS SDK for the Yoga Project

Yoga is still in Alpha and may have some bugs or miss implementing features.

# Installation

To install YogaJS into your current js project, just run:

```js
  npm i @yogajs/core
  // or
  yarn add @yogajs/core
```

# Initialize app

After installing the yogajs package, you should initialize your application. To do this, is necessary a server running with the Yoga server. You can learn how to create a [Yoga server for laravel here](https://github.com/Yoga-SDK/yogaphp-core)

For our example, a server is running on http://localhost:8000/yoga

So, in the main file of our application, we do this:

```js
import yoga from '@yogajs/core';

yoga.initializeApp({
  appUrl: 'http://localhost:8000/yoga'
})

```

That is it! Now your application is ready to use full potential of Yoga.

If you are using react, for example, open your src/index.js and add the initialization code of Yoga before your main component.

Example.:

```js
import React, { useState } from 'react';
import yogaj from '@yogajs/core';

yoga.initializeApp({
  appUrl: 'http://localhost:8000/yoga'
})

function App() {
  return (
    <div>hello from yoga</div>
  );
}

export default App;
```

Yoga is pure JS, you can use this with any JS frontend library/framework (Vue, React, Angular)

# Using Auth Module

All auth methods are in auth() namespace. The available methods are:

## Log in
### signInWithIdentityAndPassword(identity: string, password: string, provider: string)
  It will sign a user using and identity field and a password. By default, the identity field will be 'email', but you can pass any field that you want.
  ```js
    // With email as identity
    yoga.auth().signInWithIdentityAndPassword('joe@doe.com', '123456');

    // With cellphone as identity
    yoga.auth().signInWithIdentityAndPassword('5551999480446', '123456', 'cellphone');
  ```
## Log out
### logout()
  To logout, just call logout() method.
  ```js
    yoga.auth().logout()
  ```
## Auth state
### onAuthStateChanged(callback: (user) => )
  Everytime the auth state of your application changes, it will call the callback function. If there is a user logged in, this user will be passed as param. If there is no user logged in, the param will be null.

  ```js
  yoga.auth().onAuthStateChanged( user => {
    if (user) {
      console.log('user data', data);
    } else {
      console.log('no user logged');
    }
  })
  ```
### getCurrentUser()
  To get the current logged user, you can call this method.
  ```js
  yoga.auth().getCurrentUser().then( user => console.log('current logged user', user));
  ```

## Create User
### createUser()
  It will create a new user and then will login this new user.
  To create a new user, you can call the method below.
  ```js
  yogajs.auth().createUser({
    name: 'name',
    email: 'email@email.com',
    password: '123456'
  });
  ```

  ## Update User
  ### updateProfile()
  It will update the curent use profile.
  To update the current user, you can call the method below.
  ```js
  yogajs.auth().updateProfile({
    name: 'name',
    email: 'email@email.com',
    password: '123456'
  });
  ```

# Using Database Module
  To use all database features, use db() namespace in your @yogajs/core instance.
  When you call this method, you need to pass the reference of the resource you want to access. In the example bellow, we will fetch all posts from our database.

  ```js
  yoga.db('/posts').all().then( posts => {
    
    // Now you can access all your posts data
    console.log(posts);
  })
  ```
## Understading reference
  The reference string, that is passed on db() method call, is a path to your resource inside your application. It will alwyas begin with an '/' and the name of the resource that you want to access.
  ```js

  // Your reference is pointing into all posts
  yoga.db('/posts')

  // Your reference is pointing into the post with id 33
  yoga.db('/posts:33');
  ```

### Relationships
  To access relationships between resources, you have to separate then by using '/'.
  Example:
  ```js
  // This will get all comments from post with id 33
  yoga.db('/posts:33/comments').all();
  ```

## Fetching data
  You can use three methods to fetch data from the server. They are **one()**, **all()** or **paginate(page: string, limit: string)**. All this three methods should end an chainning call.

#### one()
  Is used when you need to get only one resource from your server. 
  ```js
  yoga.db('/posts:1').then( singlePost => {
    
    // This will get only the post with id 1
    console.log(singlePost)
  })
  ```
#### all()
  Is used when you want to get all the resources from your server, within an array.
  ```js
  yoga.db('/posts').all().then( allPosts => {
    
    // Get all posts from the server
    console.log(allPosts);
  })
  ```
#### paginate(page: number, limit: number)
  Is used when you want more then one item, but no all of then. The results will be paginated with the numbers of limit.
  ```js
  yoga.db('/posts').paginate(1, 20).then( paginatedPosts => {
    
    // This contains only the first 20 records of your server
    console.log(paginatedPosts);
  })
  ```
## Adding and change data

### Adding data
  To create a new resource, just set the reference to the resource you want to add, and then use the method **create()** to create a new resource.
  ```js
  yoga.db('/posts').create({
    title: 'my new post',
    body: 'my post body content'
  }).then(() => {
    console.log('Your data was created successfuly');
  })
  ```
### Updating data
  To update a resource, just set the reference to the resource you want to update, and then use the method **update()** to update a resource.
  ```js
  yoga.db('/posts:33').update({
    title: 'my new post',
    body: 'my post body content'
  }).then(() => {
    console.log('Your data was updated successfuly');
  })
  ```
### Removing data
  To remove a new resource, just set the reference to the resource you want to remove, and then use the method **destroy()** to remove a resource.
  ```js
  yoga.db('/posts:33').destroy().then(() => {
    console.log('Your data was removed successfuly');
  })
  ```

## Another selection methods

### where
  ```js
  yoga.db('/posts').where([['published_at', '=', '2019-11-11']]).all()
  ```
### with
  ```js
  yoga.db('/posts').with(['author']).all();
  ```
### order
  ```js
  yoga.db('/posts').order('last_published', 'desc').all();
  ```
### call
  To call any another Yoga server methods
  ```js
  yoga.db('/posts').call('orWhere', [[['status', '<>', 'active']]]).all();
  ```
