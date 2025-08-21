import plane from '../assets/plane.gif';
import { motion } from 'framer-motion';

type HeaderProps = {
  scrollToSection: (section: string) => void;
};

const Header = ({ scrollToSection }: HeaderProps) => {
  const menuItems = ["About", "Skills", "Resume", "Connect"];

  return (
    <header className="bg-[#40b0bd] w-full fixed top-0 left-0 z-[9999] shadow-md">
      <div className="relative container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        
        {/* Logo */}
        <div
          className="text-white font-cursive font-bold text-2xl md:text-4xl z-20 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Shubham Babhulkar
        </div>

        {/* Plane Image (Desktop Only) */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <img src={plane} alt="plane" className="w-14 md:w-20" />
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 z-20">
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
      </div>
    </header>
  );
};

export default Header;
