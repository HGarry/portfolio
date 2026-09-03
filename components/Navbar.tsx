"use client";

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { liquidStyles } from "./styles/styles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`${liquidStyles.nav} ${liquidStyles.glowTextWhite} lg:w-[80%] m-auto fixed inset-x-4 top-4 z-50 flex flex-col md:flex-row md:items-center justify-between rounded-2xl p-4 sm:inset-x-5 sm:top-5 sm:p-6 transition-all duration-300`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h2 className="text-2xl font-extrabold">
          Harry&apos;s <span className="text-amber-300">Portfolio</span>
        </h2>

        {/* MUI Hamburger / Close Button (Visible only on Mobile) */}
        <div className="md:hidden">
          <IconButton
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="toggle menu"
            sx={{ color: "#fafafa" }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>

      {/* Navigation List */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto gap-y-4 md:gap-x-5 pt-4 md:pt-0 border-t md:border-t-0 border-white/10 mt-3 md:mt-0 items-center`}
      >
        {navLinks.map((link) => (
          <li key={link.name} className={`${liquidStyles.link}`}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
