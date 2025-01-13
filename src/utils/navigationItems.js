export const navItems = [
  {
    id: 1,
    label: "Home",
    link: "#",
    transition: "short",
  },
  {
    id: 2,
    label: "About",
    link: "#",
    transition: "medium",
  },
  {
    id: 3,
    label: "Services",
    link: "#",
    transition: "long",
  },
  {
    id: 4,
    label: "Contact",
    link: "#",
    transition: "long",
  },
];

export const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    color: "#FFD700",
    transition: { duration: 0.3 },
  },
};
