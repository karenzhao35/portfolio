import rectangle from "../assets/rect-cut.svg";
import me from "../assets/me-2.svg";
import me2 from "../assets/photo-me.svg";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";

export default function About() {
  return (
    <>
      <style>{`
        .mobile-image {
          display: block;
          align-self: center;
        }
        .desktop-image {
          display: none;
          align-self: flex-end;
        }

        @media (min-width: 1300px) {
          .mobile-image {
            display: none;
          }
          .desktop-image {
            display: block;
            width: 384px; /* equivalent to lg:w-96 */
          }
        }

        @media (min-width: 1150px) {
          .mobile-image {
            display: none;
          }
          .desktop-image {
            display: block;
          }
        }
        
      `}</style>

      <div
        id="about"
        className="relative h-screen min-h-[1000px] flex items-center justify-center text-center text-white bg-main-green border-t-3 border-light"
      >
        {/* background square */}
        <img
          src={rectangle}
          alt="rectangle squiggly"
          className="absolute -top-1 left-0 w-full h-auto object-cover"
        />
        {/* content */}
        <div className="flex flex-row flex-wrap justify-center items-start z-10 gap-8 h-full">
          <div className="flex flex-col items-start justify-center max-w-3xl px-4 self-center pt-10">
            {/* Mobile image - shows when text wraps */}
            <motion.img
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              src={me2}
              alt="my profile picture"
              className="mobile-image p-1 pb-10"
            />
            <BlurText
              text="about me"
              delay={150}
              animateBy="words"
              direction="top"
              className="rubik-header-font text-6xl pt-4 text-light"
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
              className="poppins-regular text-lg text-left pt-4 space-y-4 text-light"
            >
              <p>Hello, I'm Karen, happy you're here!!</p>
              <p>
                I am currently enjoying Vancouver studying computer science at
                the University of British Columbia. I have been interning for
                the last year at Lyft and Rivian in mobile development, and
                through those experiences I was able to gain a lot of insight on
                the complexities of tech in general. I realize technology is
                able to continually inspire me through constantly working to
                uncover abstraction, and so I am currently exploring new areas
                such as backend development and system design in general.{" "}
                <br></br> Always happy to connect with new people and gain new
                perspectives, so feel free to reach out anytime!
              </p>
            </motion.div>
          </div>

          {/* Desktop image - shows when side by side */}
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
            className="desktop-image self-end"
          />
        </div>
      </div>
    </>
  );
}
