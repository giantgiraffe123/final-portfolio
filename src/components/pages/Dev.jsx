import "../../styles/App.css";
import "../../styles/pages/Dev.css";
import "../../styles/pages/Page.css";
import GoToTop from "../GoToTop";

export default function Dev() {
  return (
    <div className="page">
      <div className="top-layer">
        <div className="top-text">
          <h1>Development</h1>
          <h2>
            How can we develop an ordering website with user experience in mind?
          </h2>
        </div>
      </div>

      <div className="section">
        <h3>Background</h3>
        <p>
          For this project, I designed a website for Blueno's Bagel Shop. On
          this website users can view all the options Blueno's Bagels has to
          offer, with the ability to filter by drinks, bagels, or other
          categories. Users can also add/remove items from their cart as well as
          add items to their favorites.
        </p>
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
        <p>
          <a href="https://giantgiraffe123.github.io/development/">here</a>!
        </p>
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
