import git from "../assets/git.svg";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function Project({
  title,
  description,
  link,
  image,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="flex flex-col bg-main-pink text-white rounded-xl p-2 max-w-[300px]"
    >
      <img src={image} alt={`${title} screenshot`} className="" />
      <div className="flex flex-row justify-between items-center px-2 pt-2">
        <h1 className="text-xl poppins-bold">{title}</h1>
        <a href={link}>
          <img src={git} alt="GitHub icon" className="inline-block" />
        </a>
      </div>
      <p className="text-m poppins-regular px-2 py-1">{description}</p>
    </motion.div>
  );
}
