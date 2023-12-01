import FolioImg from "../Images/FolioImg1.png";

function Homepage() {
  return (
    <div className="HomePageHolder">
      <div className="HomePageHeader animate__animated animate__pulse ">
        <img alt="FolioIcon" src={FolioImg} className="FolioBg"></img>
      </div>
    </div>
  );
}

export default Homepage;
