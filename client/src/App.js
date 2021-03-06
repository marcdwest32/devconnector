import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Alert from './components/layout/Alert'
import CreateProfile from './components/profile-form/CreateProfile'
import Dashboard from './components/dashboard/Dashboard'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'

// Redux
import { Provider } from 'react-redux'
import store from './store'

import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
