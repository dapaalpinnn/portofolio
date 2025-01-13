import { motion } from "motion/react";
import { variants } from "../../utils/motionVariants";

export default function AnimatedText({ children, className, transition }) {
  return (
    <motion.p
      animate={variants.visible}
      initial={variants.hidden}
      className={className}
      transition={transition}
    >
      {children}
    </motion.p>
  );
}
