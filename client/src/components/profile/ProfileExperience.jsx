import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const profileExperience = ({ experience }) => {
  const { company, title, location, current, to, from, description } =
    experience
  return (
    <div>
      <h3 className='text-dark'>{company}</h3>
      {location && <small>{location}</small>}
      <p>
        <Moment format='MM/DD/YYYY'>{moment.utc(from)}</Moment> -{' '}
        {current === true ? (
          ' Now'
        ) : (
          <Moment format='MM/DD/YYYY'>{moment.utc(to)}</Moment>
        )}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  )
}

profileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
}

export default profileExperience
