import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/about', label: 'About' },
    { to: '/missing-persons', label: 'Missing Persons' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-navy-900">Sparko</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`${
                  isActive(to)
                    ? 'text-navy-900 font-semibold'
                    : 'text-navy-600 hover:text-navy-900'
                } transition-colors`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/login"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-navy-600 text-white px-4 py-2 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-600 hover:text-navy-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-3 py-2 ${
                  isActive(to)
                    ? 'text-navy-900 font-semibold'
                    : 'text-navy-600 hover:text-navy-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 text-navy-600 hover:text-navy-900"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center px-3 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;