import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile }) => {
  const {
    bio,
    skills,
    user: { name },
  } = profile
  return (
    <div className='profile-about bg-light p-2'>
      {bio && (
        <div className='container'>
          <h2 className='text-primary'>{name}'s Bio</h2>
          <p>{bio}</p>
          <div className='line'></div>
        </div>
      )}
      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div className='p-1' key={index}>
            <i className='fas fa-check'>{skill}</i>
          </div>
        ))}
      </div>
    </div>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileAbout
