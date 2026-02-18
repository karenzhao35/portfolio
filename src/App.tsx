import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Extracurriculars from "./pages/Extracurriculars";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Extracurriculars />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
