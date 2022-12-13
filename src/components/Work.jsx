import "../styles/App.css";
import "../styles/Work.css";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <div className="mywork" id="work">
      {/* <h2>My Work</h2> */}
      <div className="allwork">
        <ProjectCard
          link="/development"
          preview_img_path="images/bluenos_bagels.png"
          proj_name="Development"
          display_txt="How can we develop an ordering website with user experinece in mind?"
        />
        <ProjectCard
          link="/iterative-design"
          preview_img_path="images/iterative_design.png"
          proj_name="Iterative Design"
          display_txt="How can we prototype an app from conception to finish, incorporating user feedback?"
        />
        <ProjectCard
          link="/responsive-redesign"
          preview_img_path="images/responsive_redesign.png"
          proj_name="Responsive Redesign"
          display_txt="How can we make a website accessible across all devices?"
        />
        <ProjectCard
          link="/community-wealth-dashboard"
          preview_img_path="images/personas_and_storyboarding.png"
          proj_name="Community Wealth Dashboard"
          display_txt="How can we visualize community wealth across Rhode Island?"
        />
      </div>
    </div>
  );
}
