import { useState, useEffect } from "react";
import cartoon from "../assets/cartoon.svg";
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
        scrolled ? "bg-main-pink/30 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-baseline text-accent-pink text-xl poppins-bold">
        <motion.img
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 10, opacity: 1 }}
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
          className="cursor-pointer"
        />
        {/* Desktop Nav */}
        <div className="hidden lg:flow-root px-8">
          <motion.ul
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex space-x-12 items-center"
          >
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#experiences">experiences</a>
            </li>
            <li>
              <a href="#extracurriculars">extracurriculars</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.img
                    key="sun"
                    src={sun}
                    alt="sun"
                    className="w-6 h-6"
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    whileTap={{ rotate: 360 }}
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
                    transition={{ duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </button>
          </motion.ul>
        </div>

        <div className="flex flex-row items-baseline space-x-4 lg:hidden">
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.img
                  key="sun"
                  src={sun}
                  alt="sun"
                  className="w-6 h-6"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  whileTap={{ rotate: 360 }}
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
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </button>
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
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
            />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-[100px] left-0 bg-main-pink/30 backdrop-blur-md shadow w-full lg:hidden z-50">
            <ul className="flex flex-col items-center py-6 text-lg">
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
      </div>
    </nav>
  );
}
