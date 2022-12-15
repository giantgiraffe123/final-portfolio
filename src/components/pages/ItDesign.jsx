import "../../styles/App.css";
import "../../styles/pages/ItDesign.css";
import "../../styles/pages/Page.css";
import GoToTop from "../GoToTop";

export default function ItDesign() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Iterative Design</h1>
          <h2>
            How can we prototype an app from conception to finish, incorporating
            user feedback?
          </h2>
        </div>
      </div>

      <div className="section">
        <h3>Background</h3>
        <p>For this project, ....</p>
      </div>

      <div className="section">
        <h3>Tools</h3>
        <p>....</p>
      </div>

      <div className="section">
        <h3>Process</h3>
        <p>....</p>
      </div>

      <div className="section">
        <h3>Final Product</h3>
        <p>Explore our final figmas!</p>
        <div className="it-figma">
          <iframe
            title="it-figmas"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1);",
            }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrMDKfJ6h2rF3s6s31KWtwR%2FKiwi-Wireframes-and-Mockups%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="section">
        <h3>What I Learned</h3>
        <p>... </p>
      </div>

      <GoToTop />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
