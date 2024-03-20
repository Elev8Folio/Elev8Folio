import { useState } from "react";
import "./SecondPageBody.css";

function SecondPageBody(props) {
  const [imageData, setImageData] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // After the file is loaded, set the imageData state to the base64 representation of the image
        setImageData(reader.result);
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };
  const clicked = () => {
    alert("Upload my friend");
  };
  const [Progression, setProgression] = useState(0);
  let InputList = [
    <input
      onChange={(e) => handleChange(e)}
      type="text"
      placeholder="First Name"
      id="Fname"
    />,
    <input
      onChange={(e) => handleChange(e)}
      type="text"
      placeholder="Last Name"
      id="Lname"
    />,
    <input
      onChange={(e) => handleChange(e)}
      type="text"
      placeholder="University"
      id="university"
    />,
    <input
      onChange={(e) => handleChange(e)}
      type="text"
      placeholder="Title"
      id="title"
    />,
  ];
  const handleChange = (e) => {
    if (e.target.id === "Fname" && e.target.value !== "" && Progression === 0)
      setProgression(1);
    else if (
      e.target.id === "Lname" &&
      e.target.value !== "" &&
      Progression === 1
    )
      setProgression(2);
    else if (
      e.target.id === "university" &&
      e.target.value !== "" &&
      Progression === 2
    )
      setProgression(3);
    else if (
      e.target.id === "title" &&
      e.target.value !== "" &&
      Progression === 3
    )
      setProgression(4);
  };

  return (
    <div className="SecondPageBody">
      <div className="inputInfo">
        {InputList[0]}
        {Progression > 0 && InputList[1]}
      </div>

      <div className="inputInfo">{Progression > 1 && InputList[2]}</div>
      <div className="inputInfo">{Progression > 2 && InputList[3]}</div>

      {Progression > 3 && (
        <div className="StepOne">
          <p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={() => props.Continue(false)}>
              Create PortFolio
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default SecondPageBody;
