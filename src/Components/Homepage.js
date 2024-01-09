import FolioImg from "../Images/FolioImg1.png";

function Homepage() {
  return (
    <div className="HomePageHolder">
      <div className="HomePageHeader animate__animated animate__pulse ">
        <img alt="FolioIcon" src={FolioImg} className="FolioBg"></img>
        <div className="MakerName">
          <p>
            Made<span>&lt;for&gt;</span>students
          </p>
          <p>
            From<span>&lt;two&gt;</span>students
          </p>
        </div>
        <div className="MakerName2">
          <p>
            <span>&lt;Tsewang&gt;</span>
          </p>
          <p>
            <span>&lt;Norsang&gt;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
