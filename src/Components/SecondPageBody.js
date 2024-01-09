function SecondPageBody() {
  const clicked = () => {
    alert("Upload my friend");
  };

  return (
    <div className="SecondPageBody">
      <div className="Name">
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="LastName" />
      </div>
      <div className="Title">
        <input type="text" placeholder="Title" />
      </div>

      <div className="StepOne">
        <p>
          STEP 1: <span onClick={clicked}> Upload Resume </span>
        </p>
      </div>
    </div>
  );
}

export default SecondPageBody;
