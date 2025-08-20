import plane from '../assets/plane.gif';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Skills", "Resume", "Connect"]; // updated to match your sections

  return (
    <header className="bg-[#40b0bd] w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="relative container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="text-white font-cursive font-bold text-2xl md:text-4xl z-10 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Shubham Babhulkar
        </div>

        {/* Plane Image Centered */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img src={plane} alt="plane" className="w-16 md:w-20" />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 z-10">
          {menuItems.map((item) => (
            <span
              key={item}
              className="text-white text-lg cursor-pointer hover:underline hover:opacity-80 transition"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#40b0bd] w-full px-6 pb-6">
          <nav className="flex flex-col items-center gap-4">
            {menuItems.map((item) => (
              <span
                key={item}
                className="text-white text-lg cursor-pointer hover:underline hover:opacity-80 transition"
                onClick={() => {
                  scrollToSection(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </span>
            ))}
            <motion.img
              src={plane}
              alt="plane"
              className="w-16 mt-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
