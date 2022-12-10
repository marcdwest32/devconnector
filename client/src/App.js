import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import store from './store'
// Components
import AddEducation from './components/profile-forms/AddEducation'
import AddExperience from './components/profile-forms/AddExperience'
import Alert from './components/layout/Alert'
import CreateProfile from './components/profile-forms/CreateProfile'
import Dashboard from './components/dashboard/Dashboard'
import EditProfile from './components/profile-forms/EditProfile'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar'
import NotFound from './components/layout/NotFound'
import Post from './components/post/Post'
import Posts from './components/posts/Posts'
import Profile from './components/profile/Profile'
import Profiles from './components/profiles/Profiles'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
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
        <Navbar />
        <Alert />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='profiles' element={<Profiles />} />
          <Route path='profile/:id' element={<Profile />} />
          <Route
            path='dashboard'
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route
            path='create-profile'
            element={<PrivateRoute component={CreateProfile} />}
          />
          <Route
            path='edit-profile'
            element={<PrivateRoute component={EditProfile} />}
          />
          <Route
            path='add-education'
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route
            path='add-experience'
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route path='posts' element={<PrivateRoute component={Posts} />} />
          <Route path='posts/:id' element={<PrivateRoute component={Post} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
