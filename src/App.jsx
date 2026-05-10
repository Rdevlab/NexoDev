import React, { useState } from "react";
import Background from "./assets/backgrounds/mainBackground.png";
import Hero from "./components/Hero/Hero";
import Slider from "./components/ImageSlider/Slider";
import About from "./components/About/About";
import Projects from "./components/Porjects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
