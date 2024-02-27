import React from "react";

function ProfileImage(props) {
  let profileInfo = props.profileInfo;

  return (
    <div className="Profile">
      <img src={profileInfo.src} alt={profileInfo.fname} />
      <h3>{profileInfo.fname + " " + profileInfo.lname} </h3>
    </div>
  );
}

export default ProfileImage;
