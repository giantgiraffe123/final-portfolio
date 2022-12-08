import "../styles/MyNav.css";

export default function MyNav() {
  return (
    <div className="mynav">
      <h1>
        <a href="#home">My Portfolio</a>
      </h1>
      <div className="mynavlinks">
        <h2>
          <a href="#about">About</a>
        </h2>
        <h2>
          <a href="#work">Work</a>
        </h2>
        <h2>
          <a href="#dev">Development</a>
        </h2>
      </div>
    </div>
  );
}
