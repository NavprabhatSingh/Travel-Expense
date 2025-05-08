import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/home', icon: 'fa-house' },
    { name: 'Contact', path: '/contact', icon: 'fa-address-book' },
    { name: 'Services', path: '/', icon: 'fa-box' },
    { name: 'About', path: '/about', icon: 'fa-circle-info' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white  shadow-md z-50">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="text-xl font-bold">Travel Expense</div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-blue-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.name} className="flex items-center space-x-2">
              <i className={`fa-solid ${link.icon} text-white hover:text-blue-400 group-hover:text-blue-400`}></i>
              <Link
                to={link.path}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-lg">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-2">
                <i className={`fa-solid ${link.icon} text-white`}></i>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
