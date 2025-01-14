export const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const transitions = {
  short: { duration: 0.5, ease: "easeOut" },
  medium: { duration: 1, ease: "easeOut" },
  long: { duration: 1.5, ease: "easeOut" },
};

export const imgTransitions = {
  animate: {
    rotate: [-20, 0, -20, 0, -20, 0, -20],
  },
  waved: {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 2,
    ease: "easeInOut",
  },
};
