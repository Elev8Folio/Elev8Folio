function Step1() {
  const clicked = () => {
    alert("Upload my friend");
  };

  return (
    <div className="HomePageBody">
      <div className="Name">
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="LastName" />
      </div>

      <div className="StepOne">
        <p>
          STEP 1: <span onClick={clicked}> Upload Resume </span>
        </p>
      </div>
    </div>
  );
}

export default Step1;
