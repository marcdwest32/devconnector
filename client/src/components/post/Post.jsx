import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import { getPost } from '../../actions/post'

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams()
  useEffect(() => {
    getPost(id)
  }, [getPost])

  return loading || post === null ? (
    <Spinner />
  ) : (
    <div className='container'>
      <Link to='/posts' className='btn'>
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />
    </div>
  )
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  post: state.post,
})

export default connect(mapStateToProps, { getPost })(Post)
