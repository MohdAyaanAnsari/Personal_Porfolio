import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Softsllskill from './components/SoftSkills'
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Intro/>
      <Softsllskill/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
