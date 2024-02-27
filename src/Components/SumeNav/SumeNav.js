import "./SumeNav.css";

function SumeNav(props) {
  let sume = {
    School: "New Jersey Institute of Technology",
    Project: "Big Data",
    Experience: "Microsoft Summer Internship",
  };

  return (
    <div className="sumeNav">
      <ul>
        {Object.keys(sume).map((key) => (
          <li key={key}>
            <a href={key}>{sume[key]} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SumeNav;
