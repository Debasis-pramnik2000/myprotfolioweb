import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeMessage from "./components/HomeMessage";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <Contact />
      <HomeMessage />
    </>
  );
}

export default App;
