import React from 'react';
import { Route, Switch } from 'react-router-dom'
import UserHome from './components/UserHome'
import FetchPosts from './components/FetchPosts'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import Welcome from './components/Welcome'

const App = () => (
  <div>
    <NavBar />
    <FetchUser >
      <Switch>
        <Route exact path='/' component={Welcome} />
        <ProtectedRoute path='/posts' component={FetchPosts} />
        <ProtectedRoute exact path='/userhome' component={UserHome} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </FetchUser>
  </div>
)

export default App;



