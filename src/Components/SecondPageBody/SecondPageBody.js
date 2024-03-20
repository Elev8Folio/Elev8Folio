import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SecondPageBody.css";

function SecondPageBody() {
  const [imageData, setImageData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    university: "",
    title: "",
  });
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleCreatePortfolio = () => {
    // Here you can send the formData to the server or do anything else with it
    // Then navigate to the Sume component passing the formData and imageData as state
    navigate("/sume", { state: { formData, imageData } });
  };

  return (
    <div className="SecondPageBody">
      <div className="inputInfo">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="First Name"
          id="firstName"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Last Name"
          id="lastName"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="University"
          id="university"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Title"
          id="title"
        />
      </div>
      <div className="StepOne">
        <p>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button onClick={handleCreatePortfolio}>Create Portfolio</button>
        </p>
      </div>
    </div>
  );
}

export default SecondPageBody;
