import { useState, useEffect } from "react";
import { close, parthmittal, menu } from "../assets";
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles sm:px-16 px-6"
    >
      {/* Logo */}
      <a href="#home">
        <img
          src={parthmittal}
          alt="Nurin Ilyana"
          className="w-[80px] h-[80px]"
        />
      </a>

      {/* List of links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 p-4">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} text-white transition-all duration-300 relative group`}
            onClick={() => scrollToSection(nav.id)}
          >
            <span className="group-hover:text-[#f2994a] group-hover:scale-105 group-hover:drop-shadow-lg transition-all duration-300">
              {nav.title}
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-[#f2994a] via-[#eb5757] to-[#6d214f] rounded-full group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      {/* only for mobile devices, created separately */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* shows toggle icon based on its state */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // correct way to change state using the prev
          // version of the same state using a callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} text-white transition-all duration-300 group`}
              >
                <a href={`#${nav.id}`} className="group-hover:text-[#f2994a] group-hover:scale-105 group-hover:drop-shadow-lg transition-all duration-300 relative">
                  {nav.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-[#f2994a] via-[#eb5757] to-[#6d214f] rounded-full group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
