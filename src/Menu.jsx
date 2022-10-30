import React from "react";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import anarchy from "./assets/anarchy.svg";

export default function Menu({ menuActive, toggleMenu }) {
  return (
    <header className="h-10 mb-4">
      <button className="absolute top-4 left-4 z-[100]" onClick={toggleMenu}>
        {menuActive ? (
          <GiCrossMark className="fill-accent" size={32} />
        ) : (
          <GiHamburgerMenu className="fill-accent" size={32} />
        )}
      </button>
      <img
        src={anarchy}
        alt=""
        className="h-8 top-4 right-4 absolute z-[1000] bg-accent"
      />
        <div
          id="menu"
          isVisible={menuActive}
          className={`h-screen z-[1000] flex items-center ${menuActive ? "animate__animated animate__fadeIn": "animate__animated animate__fadeOut"} bg-primary opacity-70 backdrop-blur-xl`}
        >
          <div
            id="menu-items"
            className="group text-primary-content font-prata"
            style={{
              fontSize: "clamp(2rem, 8vw, 8rem)",
              marginLeft: "clamp(4rem, 20vw, 48rem)",
            }}
          >
            <a
              href="#about"
              className="menu-item block group-hover:opacity-30 group-hover:hover:opacity-100"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="menu-item block group-hover:opacity-30 group-hover:hover:opacity-100"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="menu-item block group-hover:opacity-30 group-hover:hover:opacity-100"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="menu-item block group-hover:opacity-30 group-hover:hover:opacity-100"
              style={{ padding: "clamp(0.25rem, 0.5vw, 1rem) 0" }}
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
          <div id="menu-background-pattern"></div>
        </div>
    </header>
  );
}
