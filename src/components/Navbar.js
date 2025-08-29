import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Component */}
      <nav className="fixed z-50 w-full backdrop-blur-md bg-white">
        {/* Top Accent Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet-800 via-indigo-800 to-violet-800"></div>

        {/* Main Navbar */}
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-violet-800/20 to-indigo-800/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Link to="/" className="relative flex items-center">
                <img src="assets/telth.png" alt="telth" className="w-6 h-6 mr-2" />
                <span className="text-2xl font-bold text-violet-900">
                  Telth.care
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              <Link to="/about-us"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About Us
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              <Link to="/ngos"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  NGOs
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              <a href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Care Providers
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
              <Link to="/blog"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Blog
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>
              <Link to="/contact-us"
                className="px-4 py-2 rounded-lg text-sm font-medium text-violet-700 hover:text-indigo-800 hover:bg-gray-100 transition-all relative group">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-800/10 to-indigo-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </Link>

              {/* Menu Button */}
              <button 
                type="button" 
                onClick={toggleMenu}
                className="relative group ml-4"
              >
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-violet-800 to-indigo-800 blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <span className="relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-800 to-indigo-800 text-white text-sm font-medium flex items-center gap-2 group-hover:from-violet-700 group-hover:to-indigo-700 transition-all duration-300">
                  <span>Menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              type="button" 
              onClick={toggleMenu}
              className="md:hidden relative group"
            >
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-violet-800 to-indigo-800 blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <span className="relative p-2 rounded-lg text-violet-700 hover:text-violet-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="h-20 fixed z-20 w-full bg-gradient-to-b from-gray-100 to-transparent"></div>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl"></div>

          {/* Menu Content */}
          <div className="relative min-h-screen">
            <div className="container mx-auto px-6 py-12">
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <a href="/" className="text-3xl font-bold bg-gradient-to-r from-violet-900 to-indigo-900 bg-clip-text text-transparent flex items-center">
                  <img src="assets/telth.png" alt="telth" className="w-10 h-10 mb-2 mr-2" />
                  Telth.care
                </a>
                <button 
                  type="button" 
                  onClick={closeMenu}
                  className="group p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-800 group-hover:text-violet-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Grid - Bento Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Solutions Section */}
                <div className="space-y-8">
                  <div className="p-6 bg-gray-100 rounded-2xl backdrop-blur-sm border border-gray-100 hover:bg-violet-100 transition-colors group">
                    <h3 className="text-lg font-semibold text-violet-900 mb-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Solutions
                    </h3>
                    <div className="space-y-4 flex flex-col">
                      <a href="/corporates" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Corporates</span>
                      </a>
                      <a href="/government-sector" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Government</span>
                      </a>
                      <a href="/care-provider" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Care Providers</span>
                      </a>
                      <a href="/clinics-hospitals" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Clinics/Hospitals</span>
                      </a>
                      <Link to="/ngos" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>NGOs</span>
                      </Link>
                      <a href="/patients" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Patients</span>
                      </a>
                      <a href="/insurance-providers" className="flex items-center gap-3 text-violet-700 hover:text-violet-900 hover:underline group-hover:translate-x-2 transition-all duration-300">
                        <span className="w-2 h-0.5 bg-violet-800 group-hover:w-3 transition-all duration-300"></span>
                        <span>Insurance Providers</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;