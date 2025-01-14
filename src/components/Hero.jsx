import { motion } from "motion/react";
import { imgTransitions, transitions, variants } from "../utils/motionVariants";
import AnimatedText from "./atoms/AnimatedText";
import stormImage from "../assets/hand.webp";

function Hero() {
  return (
    <>
      <div className="max-w-md mx-auto mt-10 text-center">
        <div className="gradient-effect"></div>
        <div className="flex flex-col space-y-6">
          <motion.div className="flex gap-2 items-center mx-auto">
            <motion.img
              src={stormImage}
              alt="storm"
              className="w-6 origin-bottom mb-1 -z-10"
              animate={imgTransitions.animate}
              transition={imgTransitions.waved}
            />
            <AnimatedText
              className="w-full text-sm text-green-400 text-left sm:text-lg"
              transition={transitions.short}
            >
              Hi Everyone!
            </AnimatedText>
          </motion.div>
          <motion.h1
            initial={variants.hidden}
            animate={variants.visible}
            transition={transitions.medium}
            className="text-5xl tracking-tight sm:text-8xl bg-gradient-to-r from-slate-100 to-slate-500 text-transparent bg-clip-text"
          >
            I&#39;m Dafa Alvin, Crafting Experiences with Frontend and UI/UX
            Design.
          </motion.h1>
          <AnimatedText
            transition={transitions.long}
            className=" text-base font-light tracking-tight text-slate-400 sm:text-lg"
          >
            Passionate about turning ideas into stunning, user-friendly web
            applications. Expertise in frontend development and UI/UX design.
          </AnimatedText>
        </div>
      </div>
    </>
  );
}

export default Hero;
