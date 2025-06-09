import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Extracurriculars from "./pages/Extracurriculars";
import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Extracurriculars />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
