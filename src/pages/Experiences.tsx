import Experience from "../components/Experience";
import BlurText from "../components/BlurText";
import lyft from "../assets/lyft-green.svg";
import rivian from "../assets/rivian-green.svg";
import rv from "../assets/rv-green.svg";
import ubc from "../assets/ubc-green.svg";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Lyft",
    location: "Toronto, Ontario",
    date: "May 2025 - Aug 2025",
    icon: lyft,
    description: [
      "Extended distributed payment infrastructure by expanding Python microservices and exposing paginated endpoints via Envoy, successfully navigating legacy codebase constraints to reduce server payload overhead.",
      "Architected cross-platform data contracts using Protocol Buffers to implement expirable reward logic, exposing backend states to enable critical adoption of Lyft's Business Travel Program.",
      "Accelerated engineering velocity by enhancing the Python-based internal AI agent with automated snapshot test verification, creating UI-aware unit test suggestions and reducing manual development effort by 30%.",
      "Wrote detailed technical specs and collaborated cross-functionally to navigate architectural constraints, resolve data model challenges, and ensure scalable integration with existing systems.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Rivian & Volkswagen Group Technology Solutions",
    location: "Vancouver, British Columbia",
    date: "Jan 2025 – Apr 2025",
    icon: rv,
    description: [
      "Sped up developer workflow by ~40% by scripting Figma API integration to auto-import assets and text styles into the codebase.",
      "Drove design system revamp by tokenizing all Figma-defined assets, enabling seamless, scalable styling updates across the app.",
      "Improved Apollo schema generation to support real-time GraphQL subscriptions for vehicle command interactions.",
      "Maintained high code reliability by writing thorough end-to-end tests for feature patches and backend-client sync points.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Rivian",
    location: "Vancouver, British Columbia",
    date: "Sept 2024 – Dec 2024",
    icon: rivian,
    description: [
      "Shipped new vehicle connectivity error states and Live Activity features in the Rivian iOS app, used by 156K+ monthly active users.",
      "Reduced service center load by ~18% by implementing a tire rotation scheduling and reminder system directly in-app via remote commands.",
      "Built and connected a new notification preferences view to GraphQL APIs, enabling real-time control over Live Activity alerts.",
      "Wrote robust end-to-end tests to ensure consistency across vehicle connectivity, notifications, and UI flows.",
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
    <div
      id="experience"
      className="flex flex-col justify-center items-center p-6 pt-16 lg:p-24 overflow-hidden"
    >
      <BlurText
        text="experience"
        delay={150}
        animateBy="words"
        direction="top"
        className="rubik-header-font text-4xl m:text-5xl md:text-6xl text-center text-main-green dark:text-light p-20 pt-10"
      />
      <div className="relative flex flex-col items-center w-full">
        {/* Timeline bar - hidden on small screens */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="absolute left-6 w-2 h-full dark:bg-light bg-main-green rounded-full z-0 hidden [@media(min-width:400px)]:block"
        ></motion.div>
        <div className="flex flex-col w-full z-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-row items-start mb-6 last:mb-0">
              {/* Icon - hidden on small screens */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="flex flex-col items-center mr-12 ml-1 relative z-10 hidden [@media(min-width:400px)]:flex"
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
