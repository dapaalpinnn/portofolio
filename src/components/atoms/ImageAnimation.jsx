import { motion } from "motion/react";
import { imgTransitions } from "../../utils/motionVariants";

export default function ImageAnimation({ src, className, ...props }) {
  return (
    <motion.img
      src={src}
      {...props}
      className={className}
      animate={imgTransitions.animate}
      transition={imgTransitions.waved}
    />
  );
}
