import { motion } from "motion/react";
import { navItemVariants } from "../../utils/navigationItems";

export default function NavItems({ children, className, href }) {
  return (
    <motion.a
      className={className}
      whileHover={navItemVariants.hover}
      href={href}
    >
      {children}
    </motion.a>
  );
}
