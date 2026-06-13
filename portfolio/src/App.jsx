import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workshops from "./components/Workshops";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 60,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Workshops />
      <Contact/>
      <Footer />
    </>
  )
}

export default App;