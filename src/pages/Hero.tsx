
import AnimatedLetters from "../components/AnimatedLetters";
import TypeWriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import ellipse from "../assets/green-ellipse.svg";
import bamboo from "../assets/bamboo.svg";
import { motion } from "framer-motion";

export default function Hero() {
  const stringSplitter = (string: string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <img
        src={ellipse}
        alt="pink ellipse"
        className="absolute min-w-4xl w-screen h-screen overflow-hidden"
      />
      <motion.img
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        src={bamboo}
        alt="bamboo decoratioin"
        className="absolute right-0 -bottom-10 w-auto h-[200vh] object-none object-right-bottom -z-10 pointer-events-none"
      />
      <div className="flex flex-col items-center z-10 space-y-[-10px] text-light md:text-main-green dark:text-light pb-12">
        <AnimatedLetters text="karen" />
        <AnimatedLetters text="zhao" />
        <div className="poppins-bold text-2xl pt-4">
          <TypeWriter
            options={{
              strings: [
                "software developer!",
                "previous swe intern @ lyft",
                "previous swe intern @ rivian",
                "plays piano sometimes (like 2 songs)",
                "likes to draw (only in pencil)",
                "likes to bike (trails, not mountains)",
                "likes matcha lattes (with oat milk)",
                "bakes sometimes (i love cookies)",
                "loves to eat (noodles the most)",
                "likes mechanical keyboards (linear keycaps)",
                "types for fun (monkeytype)",
                "likes philosophy (nietzsche rn)",
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
