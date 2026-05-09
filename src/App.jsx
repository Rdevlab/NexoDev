import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./assets/backgrounds/mainBackground.png";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Slider from "./components/ImageSlider/Slider";
import About from "./components/About/About";
import Projects from "./components/Porjects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loginForm, setloginForm] = useState("notlogin");
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />

      <Footer />
      {loginForm === "login" ? (
        <Login loginForm={loginForm} setloginForm={setloginForm} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
