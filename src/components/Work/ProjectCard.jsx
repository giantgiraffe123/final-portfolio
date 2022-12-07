import "../../styles/Work.css";
// import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    // <button className="projectbutton">
    // <Link>
    <div className="projectcard">
      <img src={props.preview_img_path} alt={props.proj_name} />
      <div className="projectinfo">
        <h3>{props.proj_name}</h3>
        <p>{props.display_txt}</p>
      </div>
    </div>
    // </Link>
    // </button>
  );
}

{
  /* <div>
<div className="projectcard">
  <img src={props.preview_img_path} alt={props.proj_name} />
  <div className="projectinfo">
    <h3>{props.proj_name}</h3>
    <p>{props.display_txt}</p>
  </div>
</div>
<a href={props.id}>
  <h3>{props.proj_name}</h3>
</a>
</div> */
}
