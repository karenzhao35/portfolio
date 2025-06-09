import linkedin from "../assets/linkedin.svg";
import github from "../assets/git.svg";
import email from "../assets/mail.svg";


export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-accent-pink text-white w-full h-[350px]">
      <div className="flex flex-row items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/karen-zhao-4899a9218/"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="w-7 h-7 cursor-pointer hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="https://github.com/karenzhao35"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
        </a>
        <a
          href="mailto:karenzhaojia@gmail.com"
          rel="noopener noreferrer"
        >
          <img src={email} alt="Email" className="w-9 h-9 cursor-pointer hover:opacity-80 transition-opacity" />
        </a>
      </div>
      <p className="text-sm mt-4">© 2025 Karen Zhao. All rights reserved.</p>
      <p className="text-sm">Last updated June 8th, 2025</p>
    </div>
  )
}
