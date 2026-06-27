import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Workshops from "./components/Workshops";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Workshops />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
