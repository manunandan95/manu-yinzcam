import React from "react";
import PropTypes from "prop-types";

const FollowerItem = ({ follower }) => {
  return (
    <div >
      <h3>
        <a href={follower.html_url}>{follower.login}</a>
      </h3>
    </div>
  );
};

FollowerItem.propTypes = {
  follower: PropTypes.object.isRequired
};

export default FollowerItem;