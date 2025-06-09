import { useState, useEffect } from "react";
import cartoon from "../../public/icon.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { AnimatePresence, motion } from "framer-motion";
import navbar from "../assets/navbar.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("bg-light", theme === "light");
    document.body.classList.toggle("bg-black", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.01);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[100px] z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-main-pink/30 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left logo */}
        <motion.img
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          src={cartoon}
          alt="cartoon logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer h-12 w-auto block"
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center text-accent-pink text-xl poppins-bold">
          {["about", "experiences", "extracurriculars", "projects", "contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ color: "#fff", scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="transition-colors duration-200 px-12"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.img
                  key="sun"
                  src={sun}
                  alt="sun"
                  className="w-8 h-8"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  whileTap={{ rotate: 360 }}
                  whileHover={{ filter: "brightness(2)" }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.img
                  key="moon"
                  src={moon}
                  alt="moon"
                  className="w-6 h-6"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  whileHover={{ filter: "brightness(2)" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile nav toggle */}
        <div className="flex lg:hidden items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.img
                  key="sun"
                  src={sun}
                  alt="sun"
                  className="w-8 h-8"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  whileTap={{ rotate: 360 }}
                  whileHover={{ filter: "brightness(2)" }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.img
                  key="moon"
                  src={moon}
                  alt="moon"
                  className="w-6 h-6"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  whileHover={{ filter: "brightness(2)" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            onClick={() => setMenuOpen((open) => !open)}
            className="p-2"
            aria-label="Open navigation menu"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              src={navbar}
              alt="navbar"
              whileHover={{ filter: "brightness(2)" }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 bg-main-pink/30 backdrop-blur-md shadow w-full lg:hidden z-50">
          <ul className="flex flex-col items-center py-6 text-lg text-accent-pink poppins-bold">
            <li className="p-1">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                about
              </a>
            </li>
            <li className="p-1">
              <a href="#experiences" onClick={() => setMenuOpen(false)}>
                experiences
              </a>
            </li>
            <li className="p-1">
              <a href="#extracurriculars" onClick={() => setMenuOpen(false)}>
                extracurriculars
              </a>
            </li>
            <li className="p-1">
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                projects
              </a>
            </li>
            <li className="p-1">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
