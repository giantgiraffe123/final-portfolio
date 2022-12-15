import "../../styles/App.css";
import GoToTop from "../GoToTop";
import MyNav from "../MyNav";

export default function Dashboard() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Community Wealth Dashboard</h1>
          <h2>How can we visualize community wealth across Rhode Island?</h2>
        </div>
      </div>

      <div className="section">
        <h3>Background</h3>
        <p>For this project, I ....</p>
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
        <p>show some gifs of interacting with the interface</p>
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
