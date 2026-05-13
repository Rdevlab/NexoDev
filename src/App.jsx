import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Slider from "./components/ImageSlider/Slider";
import About from "./components/About/About";
import Projects from "./components/Porjects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-fixed bg-center bg-gradient-to-b from-[var(--primary)] via-[var(--background)] to-[var(--primary)]">
      <main>
        <Login />
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
