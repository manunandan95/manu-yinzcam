import React from 'react'
import PropTypes from 'prop-types';
import FollowerItem from './FollowerItem';

const Followers = ({ followers }) => {
  return followers.map(follower => <FollowerItem follower={follower} key={follower.id} />)
}

Followers.propTypes = {
  followers: PropTypes.array.isRequired
}
export default Followers