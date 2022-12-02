import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import DashboardActions from './DashboardActions'
import { getCurrentProfile } from '../../actions/profile'

// const Dashboard = ({
//   getCurrentProfile,
//   auth: { user },
//   profile: { profile, loading },
// }) => {
const Dashboard = (state) => {
  console.log(state)
  const {
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
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
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
