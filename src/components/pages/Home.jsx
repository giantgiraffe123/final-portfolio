import "../../styles/App.css";
import "../../styles/pages/Home.css";
import Work from "../Work";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="home">
        <img src="images/profile_pic.png" alt="profile pic" />
        <div className="greeting">
          <h1>
            Hi! I'm Giant Giraffe and I'm a junior at Brown University
            passionate about all things related to design, data, and psychology.
          </h1>
          <Link to="/about">
            <div className="to-about">
              <p>Read more about me</p> <EastRoundedIcon className="arrow" />
            </div>
          </Link>
        </div>
      </div>
      <Work id="work" />
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}
