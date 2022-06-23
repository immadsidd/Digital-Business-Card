import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/interests.js"
import Footer from "./components/footer.js"

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
