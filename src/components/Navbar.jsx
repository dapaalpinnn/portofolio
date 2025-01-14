import NavItems from "./atoms/NavItems";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../utils/navigationItems";
import { transitions } from "../utils/motionVariants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isMenuOpen) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <nav className="flex items-center justify-between relative w-full text-md font-medium p-6 text-slate-300 sm:text-lg sm:p-4">
      <a href="#" className="font-semibold">
        Portofolio
      </a>
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-300 text-2xl sm:pr-4"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 py-8 w-full h-screen bg-opacity-60 backdrop-blur-xl sm:mt-6 sm:h-screen`}
      >
        <div className="flex w-full flex-col gap-6 pt-8">
          {navItems.map((item) => (
            <NavItems
              key={item.id}
              href={item.link}
              transition={transitions.medium}
              className="text-3xl tracking-tight w-full font-medium pl-4"
            >
              {item.label}
            </NavItems>
          ))}
        </div>
      </div>
    </nav>
  );
}
