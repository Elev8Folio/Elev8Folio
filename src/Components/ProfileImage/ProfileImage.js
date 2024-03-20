import React from "react";
import "./ProfileImage.css";
function ProfileImage(props) {
  let formData = props.formData;
  let imageData = props.imageData;

  return (
    <div className="Profile">
      <img src={imageData} alt={formData.firstName + "_img"} />
      <h3>{formData.firstName + " " + formData.lastName} </h3>
    </div>
  );
}

export default ProfileImage;
