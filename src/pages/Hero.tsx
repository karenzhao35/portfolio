// import { m, LazyMotion, domAnimation } from "framer-motion";
// import HeroText from "../Components/HeroText";
// import HeroParticles from "../Components/Particles/HeroParticles";
// import HeroScroller from "../Components/elements/HeroScroller";
// import { motion } from "motion/react";
import AnimatedLetters from "../components/AnimatedLetters";
import TypeWriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import ellipse from "../assets/ellipse.svg";

export default function Hero() {
  const stringSplitter = (string: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <img src={ellipse} alt="pink ellipse" className="absolute min-w-4xl overflow-hidden" />
      <div className="flex flex-col items-center z-10 space-y-[-10px] text-white">
        <AnimatedLetters text="karen" />
        <AnimatedLetters text="zhao" />
        <div className="poppins-bold text-2xl pt-4">
          <TypeWriter
            options={{
              strings: [
                "aspiring software dev!",
                "swe intern @ lyft",
                "previously @ rivian",
                "plays piano sometimes :)",
                "likes to bike!",
              ],
              autoStart: true,
              loop: true,
              stringSplitter: stringSplitter,
            }}
          />
        </div>
      </div>
    </div>
  );
}
