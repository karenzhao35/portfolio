import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experiences from "./pages/Experiences";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
    </>
  );
}
