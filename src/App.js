import React from "react";
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
