import { motion } from "motion/react";
import { transitions, variants } from "../utils/motionVariants";
import CardProject from "./CardProject";
import Button from "./atoms/Button";
import GreetingMessage from "./molecules/GreetingMessage";
import projectImage from "../assets/project.webp";

function Hero() {
  return (
    <>
      <div className="gradient-effect"></div>
      <motion.div
        className="max-w-sm p-4 mx-auto mt-10 text-center sm:max-w-xl"
        animate={variants.visible}
        initial={variants.hidden}
        transition={transitions.long}
      >
        <div className="flex flex-col space-y-6">
          <GreetingMessage />
          <h1 className="text-5xl tracking-tight sm:text-6xl bg-gradient-to-r from-slate-100 to-slate-500 text-transparent bg-clip-text">
            I&#39;m Dafa Alvin <span className="text-slate-400">&rarr;</span>{" "}
            Crafting Experiences with Frontend and UI/UX Design.
          </h1>
          <p className="font-light tracking-tight text-slate-400">
            Passionate about turning ideas into stunning, user-friendly web
            applications. Expertise in frontend development and UI/UX design💻.
          </p>
        </div>
        <div className="flex gap-4 justify-center mx-auto mt-6 sm:mt-8">
          <Button
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            color="bg-green-500"
          >
            Get in touch
          </Button>
          <Button
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Projects
          </Button>
        </div>
      </motion.div>
      <div>
        <img
          src={projectImage}
          alt="cat"
          className="w-full mt-32 sm:h-3/5 object-cover"
        />
      </div>
      <div className="max-w-sm p-4 mt-8 mx-auto sm:max-w-xl relative">
        <div>
          <h1 className="text-slate-300 text-4xl mt-4 font-medium tracking-tight">
            Recent <span className="text-green-500">Projects</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm tracking-tight leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            assumenda.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:max-w-xl">
          <CardProject />
          <CardProject />
        </div>
      </div>
    </>
  );
}

export default Hero;
