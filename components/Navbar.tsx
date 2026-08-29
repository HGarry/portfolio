import React from "react";
import { liquidStyles } from "./styles/styles";

function Navbar() {
  return (
    <nav
      className={`${liquidStyles.nav} ${liquidStyles.glowTextWhite} fixed inset-x-4 top-4 z-10 m-0 flex w-auto flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl p-4 sm:inset-x-5 sm:top-5 sm:p-6`}
    >
      <h2 className={`text-2xl font-extrabold`}>Harry&apos;s Portfolio</h2>
      <ul className="flex flex-wrap justify-end gap-x-5 gap-y-1 ">
        <li className="hover:text-orange-500/70">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-orange-500/70">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-orange-500/70">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-orange-500/70">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
