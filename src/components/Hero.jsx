import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-darkBg to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight"
        >
          Push Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonRed to-red-500">Limits</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-light"
        >
          Experience high-performance training in a state-of-the-art facility. Build strength, endurance, and power.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link 
            to="pricing" 
            smooth={true} 
            duration={500}
            className="px-8 py-4 bg-neonRed text-white font-bold uppercase tracking-widest cursor-pointer hover:bg-white hover:text-neonRed transition-all duration-300 shadow-[0_0_20px_rgba(255,0,60,0.6)] rounded"
          >
            Start Free Trial
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded backdrop-blur-sm"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
