import React, { useEffect, useState } from "react";
import {
  FiMail, // e-mail
  FiGithub, // GitHub
  FiPhoneCall, // phone
  FiMenu, // hamburger
  FiX, // close icon
} from "react-icons/fi";
import { SiLinkedin, SiResearchgate } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../constant";

const Navbar: React.FC<{ page: string }> = ({ page }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-md
                    bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/30
                    dark:border-gray-700/30"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* ---------- LEFT - social icons ---------- */}
        <div className="flex items-center gap-3 text-xl text-gray-600 dark:text-gray-300">
          <a href="mailto:ak6253160@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a href="tel:+923172954877" aria-label="Phone">
            <FiPhoneCall />
          </a>
          <a href="https://www.researchgate.net" aria-label="ResearchGate">
            <SiResearchgate />
          </a>
          <a href="https://github.com/m-areeb-2001" aria-label="GitHub">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-areeb-1844a5192/"
            aria-label="LinkedIn"
          >
            <SiLinkedin />
          </a>
        </div>

        {/* ---------- CENTER - nav links ---------- */}
        <ul
          className="hidden md:flex items-center gap-6 text-sm font-medium
                       text-gray-700 dark:text-gray-200"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  page.trim() === href.trim()
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          {/* theme toggle sits with the links */}
          <li className="pl-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* ---------- RIGHT - mobile hamburger + toggle ---------- */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-700 dark:text-gray-200"
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ---------- MOBILE drawer ---------- */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out
                    ${
                      open
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 pt-2 text-gray-700 dark:text-gray-200">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`block w-full py-1 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  page === href ? "text-indigo-600 dark:text-indigo-400" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
