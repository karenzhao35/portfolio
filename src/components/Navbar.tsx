import { useState, useEffect } from "react";
import cartoon from "../assets/cartoon.svg";
import moon from "../assets/moon.svg";
import { motion } from "framer-motion";
import navbar from "../assets/navbar.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > (window.innerHeight * 0.01));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[100px] z-50 transition-colors duration-300 ${
        scrolled ? "bg-(--light)/80 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-baseline text-(--accent-pink) text-xl poppins-bold">
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
              <a href="#projects">experiences</a>
            </li>
            <li>
              <a href="#contact">extracurriculars</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <motion.img
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              src={moon}
              alt="moon"
              className=""
            />
          </motion.ul>
        </div>

        <div className="flex flex-row items-baseline space-x-4 lg:hidden">
          <motion.img
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            src={moon}
            alt="moon"
            className="lg:hidden"
          />
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
              className=""
            />
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-[100px] left-0 bg-(--light)/80 backdrop-blur-md shadow w-full shadow-lg lg:hidden z-50">
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg">
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  about
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  experiences
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  extracurriculars
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  projects
                </a>
              </li>
              <li>
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
