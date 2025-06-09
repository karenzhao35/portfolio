import rectangle from "../assets/light-rect.svg";
import me from "../assets/photo-me.svg";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";

export default function About() {
  return (
    <div
      id="about"
      className="relative h-screen min-h-[1000px] flex items-center justify-center text-center text-white"
    >
      {/* background square */}
      <img
        src={rectangle}
        alt="rectangle squiggly"
        className="absolute h-full overflow-hidden object-cover"
      />
      {/* content */}
      <div className="flex flex-row flex-wrap justify-center items-start z-10 gap-10">
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
          alt="my profile picture"
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
            className="poppins-regular text-lg text-left pt-4 space-y-4"
          >
            <p>
              Hello! I'm Karen, happy you're here :)
            </p>
            <p>
              I am a 3rd year Computer Science student at the University of British Columbia. While I am currently interning at Lyft as a Software Engineering Intern, I spend most of my time exploring the world of tech, excited by its immense potential for impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
