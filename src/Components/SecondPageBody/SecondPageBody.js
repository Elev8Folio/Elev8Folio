import { useState } from "react";
import "./SecondPageBody.css";

function SecondPageBody() {
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

  const clicked = () => {
    alert("Upload my friend");
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
            <span onClick={clicked}> Upload Picture </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default SecondPageBody;
