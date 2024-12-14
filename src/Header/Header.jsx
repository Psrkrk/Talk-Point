import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Prevent scrolling on body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold animate-pulse">
          <Link to="/">Videos Conference</Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Help", path: "/help" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              } transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle Visibility with Overlay */}
      <div
        className={`${
          isMobileMenuOpen ? "block opacity-100" : "hidden opacity-0"
        } md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300`}
        onClick={toggleMenu} // Clicking on overlay also closes the menu
      >
        <div
          className="w-3/4 sm:w-2/3 md:w-1/2 bg-gray-800 p-6 text-white"
          onClick={(e) => e.stopPropagation()} // Prevents the menu from closing when clicking inside it
        >
          <div className="flex justify-between items-center mb-6">
            <div className="text-2xl font-bold">Videos Conference</div>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Navigation Links (Vertical) */}
          <nav className="space-y-6 flex flex-col">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "Help", path: "/help" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                } block text-xl transition-colors duration-300`}
                onClick={toggleMenu} // Closes the menu when a link is clicked
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
