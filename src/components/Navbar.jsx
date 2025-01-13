import logoImage from "../assets/holding-hand.svg";
import NavItems from "./atoms/NavItems";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../utils/navigationItems";
import { transitions } from "../utils/motionVariants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center absolute top-0 w-full text-md font-medium p-6 justify-between text-slate-300 sm:text-lg sm:p-10">
      <img src={logoImage} alt="Logo" className="w-10 sm:w-12" />
      <div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-300 text-4xl focus:outline-none sm:pr-6"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        style={{ height: "calc(100vh - 64px)" }}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 z-10 left-0 py-8 w-screen h-screen bg-opacity-60 bg-transparent backdrop-blur-xl sm:mt-6 sm:h-screen`}
      >
        <div className="flex flex-col gap-6 p-4">
          {navItems.map((item) => (
            <NavItems
              key={item.id}
              href={item.link}
              transition={transitions.medium}
              className="text-2xl tracking-tight font-medium pl-8"
            >
              {item.label}
            </NavItems>
          ))}
        </div>
      </div>
    </nav>
  );
}
