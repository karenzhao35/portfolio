import rectangle from "../assets/light-rect.svg";
import me from "../assets/me.svg";
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
            className="poppins-medium text-lg text-left pt-4 space-y-4"
          >
            <p>
              hello, i'm karen, happy you're here!!
            </p>
            <p>
              i am a 3rd year computer science student at the university of british columbia. what draws me to technology the most is it's immense accessibility, and i am passionate about leveraging it to create positive change. i'm always happy to connect with new people and gain new perspectives, so feel free to reach out anytime!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
