import "../../styles/App.css";
import "../../styles/pages/Dev.css";

export default function Dev() {
  return (
    <div className="devbody" id="dev">
      <h1>Development</h1>

      <h4>
        <b>Big Idea:</b> Working with react to design a webapp that displays
        data, allows users to filter, sort, and aggregate items in some way.
      </h4>

      <img
        src="images/bluenos_bagels.png"
        alt="blueno's bagels site screenshot"
      />

      <p>
        For this project, I designed a website for Blueno's Bagel Shop. On this
        website users can view all the options Blueno's Bagels has to offer,
        with the ability to filter by drinks, bagels, or other categories. Users
        can also add/remove items from their cart as well as add items to their
        favorites.
      </p>

      <p>
        Play around with the finished product{" "}
        <a href="https://giantgiraffe123.github.io/development/">here</a>!
      </p>
    </div>
  );
}
