import { motion } from "motion/react";
import { transitions, variants } from "../utils/motionVariants";
import AnimatedText from "./atoms/AnimatedText";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div  className="gradient-effect"></motion.div>

      <div className="text-slate-300 flex flex-col w-10/12">
        <AnimatedText
          transition={transitions.short}
          className="w-full text-sm text-green-400 text-left sm:text-lg"
        >
          *Powered by nature.
        </AnimatedText>
        <motion.h1
          initial={variants.hidden}
          animate={variants.visible}
          transition={transitions.medium}
          className="text-7xl font-light tracking-tight mt-2 sm:text-8xl bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text"
        >
          Special Place for Special Moments
        </motion.h1>
        <AnimatedText
          transition={transitions.long}
          className="w-full mt-2 text-md text-slate-400 text-left sm:text-lg"
        >
          Nature&#39;s beauty is a gift that keeps on giving🍀.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Hero;
