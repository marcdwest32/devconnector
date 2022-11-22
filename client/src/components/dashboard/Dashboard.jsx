import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile }) => {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  return (
    <div className='container'>
      <h1 className='large text-primary'>Dashboard</h1>{' '}
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}{' '}
      </p>{' '}
    </div>
  )
  //   return loading && profile === null ? (
  //     <Spinner />
  //   ) : (
  //     <div className='container'>
  //       <h1 className='large text-primary'>Dashboard</h1>
  //       <p className='lead'>
  //         <i className='fas fa-user'></i> Welcome {user && user.name}
  //       </p>
  //     </div>
  //   )
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
