import "./SumeNav.css";

function SumeNav(props) {
  console.log(props.formData);
  let sume = {
    School: props.formData.university,
    Title: props.formData.title,
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
