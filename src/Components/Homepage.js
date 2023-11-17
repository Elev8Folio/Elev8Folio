function Homepage() {
  const clicked = () => {
    alert("Upload my friend");
  };

  return (
    <div className="HomePageHolder">
      <div className="HomePageHeader">
        <h2 className="HomePageTitle">Elev8Folio</h2>
        <div className="PHolder">
          <p className="HPP1">
            {" "}
            Made <span>for</span> Students
          </p>
          <span className="whiteCircle"></span>
          <p className="HPP2">
            {" "}
            From <span>two</span> Students
          </p>
        </div>
      </div>
      <div className="HomePageBody">
        <div className="StepOne">
          <p>
            STEP 1: <span onClick={clicked}> Upload Resume </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
