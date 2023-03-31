import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/user.png";
import "../../styles/layouts/Profile.scss";
import "../../styles/layouts/Preview.scss";

function Profile(props) {
  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
