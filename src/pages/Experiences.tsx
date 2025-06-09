import Experience from "../components/Experience";
import BlurText from "../components/BlurText";
import lyft from "../assets/lyft.svg";
import rivian from "../assets/rivian.svg";
import ubc from "../assets/ubc.svg";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Lyft",
    location: "Toronto, Ontario",
    date: "May 2025 - Present",
    icon: lyft,
    description: [
      "Implemented Lyft Cash features by defining Protocol Buffer schemas and integrating backend data models into mobile application architecture.",
      "Built user interface components for payment features, creating reusable UI elements following Lyft's design system and mobile development standards.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Rivian",
    location: "Vancouver, British Columbia",
    date: "Sept 2024 - Apr 2025",
    icon: rivian,
    description: [
      "Implemented wheel swap feature in iOS using MVVM architecture, generating Swift code with Apollo and integrating remote commands for vehicle connectivity.",
      "Developed iOS Live Activity feature tracking download progress using the Combine framework and Observer pattern, enhancing real-time user experience.",
      "Created user preference management system allowing fine-tuning of Live Activity settings by implementing GraphQL data fetching and submission flows.",
      "Automated design workflow by developing Python scripts leveraging the Figma API, reducing errors and inconsistencies in asset integration.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "UBC",
    location: "Vancouver, British Columbia",
    date: "Jan 2024 - Apr 2024",
    icon: ubc,
    description: [
      "Assisted students in developing their Python skills and understanding of systematic program design principles, emphasizing problem-solving techniques relevant to software development.",
      "Provided personalized feedback on code quality and design, helping students improve their programming skills and align their work with industry best practices.",
    ],
  },
];

export default function Experiences() {
  return (
    <div id="experiences" className="flex flex-col justify-center items-center p-6 pt-16 lg:p-24 overflow-hidden">
      <BlurText
        text="experiences"
        delay={150}
        animateBy="words"
        direction="top"
        className="rubik-header-font text-5xl md:text-6xl rubik-header-font text-center text-accent-pink p-20 pt-10"
      />
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="absolute left-6 w-2 h-full bg-main-pink rounded-full z-0"
        ></motion.div>
        <div className="flex flex-col w-full z-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-row items-start mb-6 last:mb-0">
              {/* Icon */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="flex flex-col items-center mr-12 ml-1 relative z-10"
              >
                <img
                  src={exp.icon}
                  alt={exp.company + " icon"}
                  className="w-12 h-12"
                />
              </motion.div>
              {/* Experience block */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="flex-1"
              >
                <Experience {...exp} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
