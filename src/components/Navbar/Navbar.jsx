import AmazonLogo from "../../assets/Logos/amazon-logo.png";
import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav className="h-auto w-screen bg-transparent px-20 flex flex-col box-border">
      <div className="h-[70px] w-[100%] py-2 bg-transparent flex justify-between">
        <img src={AmazonLogo} alt="Logo" className="h-[100%] w-[15%] bolck" />
        <ul className="w-[auto] bg-transparent flex gap-x-4 items-center web-menu">
          <li className="bg-transparent p-2">
            <a href="">Home</a>
          </li>
          <li className="bg-transparent p-2">
            <a href="">About Us</a>
          </li>
          <li className="bg-transparent p-2">
            <a href="">Contact Us</a>
          </li>
          <li className="bg-amber-600 p-2">
            <a href="">Register Now</a>
          </li>
        </ul>
        <button
          id="menuBtn"
          class="text-2xl font-bold p-2 menu-icon"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <span id="menuIcon">☰</span>
          ) : (
            <span id="closeIcon" className="closeIcon">
              ✖
            </span>
          )}
        </button>
      </div>
      <div
        className={` mobile-menu ${
          !menuOpen ? "mobile-menu-block" : "mobile-menu-none"
        } h-auto w-full bg-transparent`}
      >
        <ul className="w-[auto] bg-transparent flex flex-col gap-x-4 items-center">
          <li className="bg-transparent p-2">
            <a href="">Home</a>
          </li>
          <li className="bg-transparent p-2">
            <a href="">About Us</a>
          </li>
          <li className="bg-transparent p-2">
            <a href="">Contact Us</a>
          </li>
          <li className="bg-amber-600 p-2">
            <a href="">Register Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
