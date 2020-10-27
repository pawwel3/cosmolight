import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import AboutUs from "./Components/AboutUs";
import B2b from "./Components/B2b";
import Example from "./Components/Example";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs />
      <B2b />
      <Example />
    </div>
  );
}

export default App;
