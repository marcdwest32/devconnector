import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const profileEducation = ({ education }) => {
  const { school, degree, fieldofstudy, current, to, from, description } =
    education
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='MM/DD/YYYY'>{moment.utc(from)}</Moment> -{' '}
        {current === true ? (
          ' Now'
        ) : (
          <Moment format='MM/DD/YYYY'>{moment.utc(to)}</Moment>
        )}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  )
}

profileEducation.propTypes = {
  education: PropTypes.object.isRequired,
}

export default profileEducation
