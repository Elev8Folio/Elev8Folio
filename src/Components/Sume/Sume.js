import { useLocation } from "react-router-dom";
import "./Sume.css";
import SumeNav from "../SumeNav/SumeNav";
import ProfileImage from "../ProfileImage/ProfileImage";

function Sume() {
  // Accessing location state
  const location = useLocation();
  const formData = location.state.formData;
  const imageData = location.state.imageData;

  // Rendering the data
  return (
    <>
      <ProfileImage formData={formData} imageData={imageData}></ProfileImage>
      <SumeNav formData={formData}></SumeNav>
    </>
  );
}

export default Sume;
