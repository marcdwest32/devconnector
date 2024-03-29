import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'
import { deleteAccount, getCurrentProfile } from '../../actions/profile'

// const Dashboard = ({
//   getCurrentProfile,
//   auth: { user },
//   profile: { profile, loading },
// }) => {
const Dashboard = (state) => {
  const {
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
    deleteAccount,
  } = state
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <div className='constainer'>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'>Delete My Account</i>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>You have not yet setup a profile. Please add your info.</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </div>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard,
)
