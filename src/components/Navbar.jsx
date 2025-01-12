import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoImage from "../assets/holding-hand.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center absolute top-0 w-full text-md font-medium p-6 justify-between text-slate-300 sm:text-lg sm:p-8">
      <img src={logoImage} alt="Logo" className="w-10" />
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-300 text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-slate-900 bg-blur-3xl sm:bg-transparent sm:static sm:flex sm:gap-8 sm:items-center sm:justify-end`}
      >
        <div className="flex flex-col gap-6 p-4 sm:flex-row sm:p-0 sm:gap-8">
          <a href="#" className="hover:text-white">
            Manfaat
          </a>
          <a href="#" className="hover:text-white">
            Solusi
          </a>
        </div>
        <a
          href="#"
          className="block px-4 py-2 mt-2 text-center rounded-full border border-slate-300 sm:mt-0 sm:text-base sm:border-none sm:bg-transparent sm:hover:text-white"
        >
          Tentang Kami
        </a>
      </div>
    </nav>
  );
}
