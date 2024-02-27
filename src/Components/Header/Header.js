import Icon from "../Icon";
import ProfileImage from "../ProfileImage";
import "./Header.css";

function Header(props) {
  let source =
    "https://media.licdn.com/dms/image/D4E03AQHd-_CHqpc2KA/profile-displayphoto-shrink_400_400/0/1664411899093?e=1702512000&v=beta&t=uSXzFHBg6iDvxqKmAbd9xFhgjwG9xVtywMyNNOGlTU4";
  let name = { fname: "Tsewang", lname: "Nyandak" };

  let profileInformation = {
    src: source,
    fname: name.fname,
    lname: name.lname,
  };

  let red = "rgb(255,0,0)";

  return (
    <div className="Header" style={{ backgroundColor: red }}>
      <ProfileImage profileInfo={profileInformation} />
      <div className="Icons">
        <Icon
          href="https://www.linkedin.com/in/norsang-nyandak-077577173/"
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
        />
        <Icon
          href="https://www.linkedin.com/in/norsang-nyandak-077577173/"
          src={
            "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
          }
        />
      </div>
    </div>
  );
}

export default Header;
