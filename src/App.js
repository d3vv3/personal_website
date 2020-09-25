// External libraries
import React from "react";

// Theme imports

// Local imports
import Introduction from "./components/Introduction";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// Data imports
// import { myData } from "./data/data.js";

function App() {
  return (
    <div>
      <Introduction />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
