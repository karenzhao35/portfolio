import rectangle from "../assets/light-rect.svg";
import me from "../assets/photo-me.svg";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";

export default function About() {
  return (
    <div
      id="about"
      className="relative h-screen min-h-[1000px] flex items-center justify-center text-center"
    >
      {/* background square */}
      <img
        src={rectangle}
        alt="rectangle squiggly"
        className="absolute h-full overflow-hidden object-cover"
      />
      {/* content */}
      <div className="flex flex-row flex-wrap justify-center items-start z-10 gap-10 text-white">
        <motion.img
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          src={me}
          alt="rectangle squiggly"
        />
        <div className="flex flex-col items-start justify-center max-w-2xl px-2">
          <BlurText
            text="about me"
            delay={150}
            animateBy="words"
            direction="top"
            className="rubik-header-font text-6xl pt-4"
          />
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="poppins-medium text-lg text-left pt-4 space-y-4"
          >
            <p>
              Hi! I'm Karen, a software developer based in the Bay Area. I love
              building things that make life easier and more fun. When I'm not
              coding, you can find me playing piano or biking around the city.
            </p>
            <p>
              Currently, I'm an intern at Lyft, where I work on backend systems
              to improve user experience. Previously, I interned at Rivian,
              focusing on frontend development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
