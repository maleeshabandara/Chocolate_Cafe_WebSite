import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import { BiChevronDown } from "react-icons/bi"; // Imported BiChevronDown
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full bg-white shadow-md z-10">
      <div className="flex flex-row justify-between items-center p-5 md:px-32">
        {/* Left Section: Logo and Title */}
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <SiCoffeescript size={32} />
          <h1 className="text-xl font-semibold">Choc-fe</h1>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-brightColor transition-all cursor-pointer">
              <span>Delicacies</span>
              <BiChevronDown size={20} />
            </div>
            <ul className="absolute hidden group-hover:block bg-white border border-gray-300 rounded-lg p-5 space-y-2">
              <li>
                <Link
                  to="spicy"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Spicy
                </Link>
              </li>
              <li>
                <Link
                  to="cakes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Cakes
                </Link>
              </li>
              <li>
                <Link
                  to="chocolates"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Chocolates
                </Link>
              </li>
              <li>
                <Link
                  to="drinks"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Drinks
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Button
            title="Login"
            onClick={() => alert("Login button clicked!")}
            className="ml-4"
          />
        </nav>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="md:hidden">
          {menu ? (
            <AiOutlineClose
              size={25}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-lg text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="delicacies"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Delicacies
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Menu
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          Reviews
        </Link>
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
