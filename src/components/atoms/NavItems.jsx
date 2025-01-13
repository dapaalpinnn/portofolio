import { motion } from "motion/react";
import { variants } from "../../utils/motionVariants";
import { navItemVariants } from "../../utils/navigationItems";

export default function NavItems({ children, className, href, transition }) {
  return (
    <motion.a
      initial={variants.hidden}
      animate={variants.visible}
      className={className}
      transition={transition}
      whileHover={navItemVariants.hover}
      href={href}
    >
      {children}
    </motion.a>
  );
}
