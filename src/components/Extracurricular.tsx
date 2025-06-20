import { motion } from "motion/react";

interface ExtracurricularProps {
  title: string;
  description: string[]; // Now an array of strings
  date: string;
}

export default function Extracurricular({
  title,
  description,
  date,
}: ExtracurricularProps) {
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
      className="flex flex-wrap flex-row text-accent-pink p-6 overflow-hidden rounded-xl"
    >
      <div className="text-m poppins-medium text-left min-w-max mr-16">
        {date}
      </div>
      <div className="max-w-[700px]">
        <h1 className="text-xl poppins-bold">{title}</h1>
        <p className="text-m poppins-regular">
          {description.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx !== description.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}
