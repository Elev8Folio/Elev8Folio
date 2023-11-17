function Icon(props) {
  return (
    <div className="Icon">
      <a href={props.href} target="_blank">
        <img src={props.src} alt={props} />
      </a>
    </div>
  );
}

export default Icon;
