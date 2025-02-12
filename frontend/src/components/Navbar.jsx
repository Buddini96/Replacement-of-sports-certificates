import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from "../assets/images/logo.png"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const MenuLinks = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "/about" },
    { id: 3, name: "REQUEST", link: "/request" },
    { id: 5, name: "CERTIFICATE", link: "/certificate" },
    { id: 6, name: "CONTACT", link: "/contact" },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full py-1">
        <img src={logo} alt="Logo" className="w-[70px] h-[70px]" />
      </div>

      <div className="mx-7 fixed w-[calc(100%-3.5rem)] z-10  bg-black text-white backdrop-blur-sm">
        <div className="container mx-auto py-4 px-4 flex justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex items-center space-x-6">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2 font-medium">
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold border-b-2 border-primary py-1"
                        : "font-semibold hover:text-primary py-1 hover:border-b-2 hover:border-primary transition-colors duration-300"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu */}
          <button
            className="sm:hidden text-2xl absolute right-4 top-4"
            onClick={() => setShowMenu(true)}
          >
            <FiMenu />
          </button>
          {/* Side Menu for Mobile size*/}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg transform ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 sm:hidden`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setShowMenu(false)}
            >
              <FiX />
            </button>

            {/* Mobile Navigation */}
            <ul className="flex flex-col items-start p-6 space-y-6 mt-10 bg-black">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2 w-full">
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold border-l-4 border-primary pl-3"
                        : "font-semibold hover:text-primary hover:border-l-4 hover:border-primary pl-3 transition-colors duration-300"
                    }
                    onClick={() => setShowMenu(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
