import { motion } from "framer-motion";

const AnimatedLetters = ({ text }: { text: string }) => {
  return (
    <h1
      className="text-8xl rubik-scribble-bold flex text-light md:text-main-green dark:text-light"
      style={{ WebkitTextStroke: "2px currentColor" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedLetters;