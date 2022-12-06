import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileAbout from './ProfileAbout'
import ProfileTop from './ProfileTop'

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams()

  useEffect(() => {
    getProfileById(id)
  }, [getProfileById, id])

  return (
    <div className='container'>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to='/profiles' className='btn btn-light'>
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
          </div>
          <div className='profile-grid my-1'>
            <ProfileAbout profile={profile} />
          </div>
        </div>
      )}
    </div>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile)
