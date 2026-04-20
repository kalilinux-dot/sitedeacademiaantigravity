import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Pricing', to: 'pricing' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Dumbbell className="text-neonRed" size={32} />
          <span className="text-2xl font-black uppercase tracking-tighter">Neon<span className="text-neonRed">Fit</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-neonRed text-sm font-semibold uppercase tracking-widest cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="px-6 py-2 bg-neonRed text-white font-bold uppercase text-sm rounded hover:bg-white hover:text-neonRed transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,0,60,0.5)]"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-bold uppercase tracking-widest cursor-pointer hover:text-neonRed transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
