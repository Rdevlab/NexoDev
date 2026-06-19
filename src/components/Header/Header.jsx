import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Faq from "./FAQ/Faq";
import Contact from "./Contact/Contact";

const Header = ({ setDashboard }) => {
  return (
    <>
      <div className="w-full h-screen bg-center bg-cover text-white flex justify-center items-center">
        <Navbar setDashboard={setDashboard} />
        <Hero />
      </div>
      <About />
      <Services />
      <Faq />
      <Contact />
    </>
  );
};

export default Header;
