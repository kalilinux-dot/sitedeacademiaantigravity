import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Dumbbell className="text-neonRed" size={28} />
          <span className="text-xl font-black uppercase tracking-tighter text-white">Neon<span className="text-neonRed">Fit</span></span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-neonRed transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-neonRed transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-neonRed transition-colors"><Facebook size={20} /></a>
        </div>

        <p className="text-gray-600 text-sm font-light uppercase tracking-wider text-center md:text-right">
          &copy; {new Date().getFullYear()} NeonFit. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
