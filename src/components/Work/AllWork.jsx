import "../../styles/Work.css";
import ProjectCard from "./ProjectCard";
// import { Routes, Route, useNavigate } from "react-router-dom";
import Dev from "./Projects/Dev";
import ItDesign from "./Projects/ItDesign";
import Personas from "./Projects/Personas";
import Resp from "./Projects/Resp";

export default function AllWork() {
  return (
    <div className="worksection" id="work">
      {/* <h2>My Projects</h2> */}
      <div className="allwork" id="work">
        <ProjectCard
          id="#dev"
          preview_img_path="images/bluenos_bagels.png"
          proj_name="Development"
          display_txt="Designed a bakery website in react where users can sort and filter items and add items to cart"
        />
        <ProjectCard
          preview_img_path="images/iterative_design.png"
          proj_name="Iterative Design"
          display_txt="Made figmas for a startup named Kiwi - an app to allow users to send music to friends' homescreens"
        />
        <ProjectCard
          preview_img_path="images/personas_and_storyboarding.png"
          proj_name="Personas and Storyboarding"
          display_txt="Created user stories and personas for the soda machine interface"
        />
        <ProjectCard
          preview_img_path="images/responsive_redesign.png"
          proj_name="Responsive Redesign"
          display_txt="Redesigned craigslist to make it responsive on different devices"
        />

        {/* <Routes>
          <Route path="/" element={<AllWork />} />
          <Route path="/development" element={<Dev />} />
          <Route path="/iterative-design" element={<ItDesign />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/responsive-redesign" element={<Resp />} />
        </Routes> */}
        {/* </div> */}
      </div>
    </div>
  );
}
