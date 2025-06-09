import BlurText from "../components/BlurText";

export default function Contact() {
  return (
<div
  id="contact"
  className="flex items-center justify-center p-6 pt-16 overflow-hidden"
>
  <div className="flex flex-col items-center justify-center w-full max-w-5xl bg-main-pink rounded-lg px-8 sm:px-12 md:px-24 lg:px-32 py-10">
    <BlurText
      text="Contact me"
      delay={150}
      animateBy="words"
      direction="top"
      className="rubik-header-font text-4xl md:text-5xl text-center text-white"
    />
    
    <div className="w-full max-w-md flex flex-col gap-4 mt-6">
      <label>
        <p className="text-white">Name</p>
        <input className="w-full p-2 bg-white/50 rounded-xl" />
      </label>
      <label>
        <p className="text-white">Email</p>
        <input className="w-full p-2 bg-white/50 rounded-xl" />
      </label>
      <label>
        <p className="text-white">Message</p>
        <textarea className="w-full h-32 p-2 bg-white/50 rounded-xl" />
      </label>
      <button className="self-start mt-2 px-6 py-2 bg-white/50 rounded-xl">
        <p className="text-accent-pink">send</p>
      </button>
    </div>
  </div>
</div>

  );
}
