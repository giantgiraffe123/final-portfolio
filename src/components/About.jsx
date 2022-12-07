import "../styles/About.css";

export default function About() {
  return (
    <div id="home">
      <div className="about" id="about">
        <img src="images/giraffe_white_outline.png" alt="giraffe profile pic" />
        <div className="info">
          <h2>Giant Giraffe</h2>
          <p>
            Hi! My name is Giant Giraffe and I am a junior studying Computer
            Science at Brown University. I am located in Providence, RI and love
            (redacted). Please enjoy my portfolio showcasing some of my projects
            from my UI/UX class.
          </p>
          <div className="contact">
            <h4>Contact me!</h4>
            <p>giant_giraffe@brown.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
