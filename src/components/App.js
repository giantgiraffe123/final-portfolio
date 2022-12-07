import "../styles/App.css";
import About from "./About";
import MyNav from "./MyNav";
import AllWork from "./Work/AllWork";
import Dev from "./Work/Projects/Dev";
import ItDesign from "./Work/Projects/ItDesign";
import Personas from "./Work/Projects/Personas";
import Resp from "./Work/Projects/Resp";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNav />
      <About />
      <AllWork />
      <Dev />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllWork />} />
          <Route path="/development" element={<Dev />} />
          <Route path="/iterative-design" element={<ItDesign />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/responsive-redesign" element={<Resp />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
