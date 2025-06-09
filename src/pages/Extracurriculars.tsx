import Extracurricular from "../components/Extracurricular";
import BlurText from "../components/BlurText";
const extracurriculars = [
  {
    title: "Motion UBC - Tech Lead",
    description: [
      "Led the development of a cross-platform recycling pickup management system for United We Can, a nonprofit with 600+ customers, using React Native, React, and a Firebase backend.",
      "Designed and implemented RESTful APIs and optimized database schema with Firebase to efficiently manage dynamic pickup requests, driver routes, and real-time notifications.",
      "Built a scalable CI/CD pipeline and architecture with GitHub Actions, enabling automated deployments and seamless real-time updates for drivers and customers.",
    ],
    date: "NOV 2024 - PRESENT",
  },
  {
    title: "UBC AccessCS - Website Developer",
    description: [
      "Designed and developed a user-centric website for AccessCS using Vue.js, Tailwind CSS, GraphQL, and Craft CMS to streamline event management and enhance accessibility features.",
      "Deployed the PHP backend using a custom Docker image, optimizing deployment workflows and ensuring seamless integration with AWS S3 and CloudFront for enhanced content delivery speed and security.",
    ],
    date: "FEB 2024 - AUG 2024",
  },
  {
    title: "UBC CSSS - Student Developer",
    description: [
      "Built a volunteer registration and management system for a blood donation non-profit in a team, serving over 1,000 volunteers with Next.js, Golang and PostgreSQL.",
      "Designed accessible wireframes to ensure usability, and implemented them using a component-based architecture, enabling a modular and scalable front-end.",
    ],
    date: "OCT 2023 - MAY 2024",
  },
];

export default function Extracurriculars() {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 pt-16 overflow-hidden"
      id="extracurriculars"
    >
      <BlurText
        text="extracurriculars"
        delay={150}
        animateBy="words"
        direction="top"
        className="rubik-header-font text-5xl pt-16 py-4 text-accent-pink"
      />
      {extracurriculars.map((ec, index) => (
        <Extracurricular key={index} {...ec} />
      ))}
    </div>
  );
}
