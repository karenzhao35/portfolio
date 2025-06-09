import Project from "../components/Project";
import flashdash from "../assets/flashdash.svg";
import arktrek from "../assets/arctrek.svg";
import fitness from "../assets/fitness.svg";
import set from "../assets/set.svg";
import clearspeak from "../assets/clearspeak.svg";
import lumo from "../assets/lumo.svg";
import BlurText from "../components/BlurText";

const projects = [
  {
    title: "ark'trek",
    description:
      "Mobile application made with Python and Swift for Arc'teryx that encourages users to hike and suggests clothing based on the current weather.",
    link: "https://github.com/karenzhao35/arc-trek",
    image: arktrek,
  },
  {
    title: "flashdash",
    description:
      "Application that generates flashcards from a given PDF with the help of OpenAI API.",
    link: "https://github.com/karenzhao35/flashDash",
    image: flashdash,
  },
  {
    title: "set",
    description: "Single player set game implemented using Swift for iOS.",
    link: "https://github.com/karenzhao35/set",
    image: set,
  },
  {
    title: "clearspeak",
    description:
      "Web application that summarizes PDFs to be more comprehensive for people with accessability concerns.",
    link: "https://github.com/karenzhao35/clearspeak",
    image: clearspeak,
  },
  {
    title: "your fitness buddy",
    description:
      "Java desktop application with JSON data persistence and end-to-end JUnit tests for tracking workouts and meals.",
    link: "https://github.com/karenzhao35/Your-Fitness-Buddy",
    image: fitness,
  },
  {
    title: "lumo",
    description: "A mobile application that helps users store memories to brighten up their day.",
    link: "https://github.com/karenzhao35/nwHacks2025",
    image: lumo,
  }
];
export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 pt-16 lg:p-24 overflow-hidden pb-28"
      id="projects"
    >
      <BlurText
        text="projects"
        delay={150}
        animateBy="words"
        direction="top"
        className="rubik-header-font text-6xl rubik-header-font text-center text-accent-pink p-20 pt-10"
      />
      <div className="inline-flex mx-auto flex-row flex-wrap justify-center items-stretch px-6 lg:mx-42 gap-4">
        {projects.map((project, index) => (
          <div className="min-w-[280px] max-w-xs flex">
            <Project key={index} {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
