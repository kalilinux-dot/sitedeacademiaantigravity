import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-darkBg relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-neonRed/20 blur-xl z-0 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Gym Equipment" 
              className="relative z-10 w-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-neonRed font-bold uppercase tracking-widest text-sm">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Not Just A Gym, <br /> It's A Lifestyle
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              We provide a high-energy environment equipped with top-tier machines, free weights, and functional training zones. Whether you're a beginner or an elite athlete, our expert coaches and premium facilities will help you crush your goals.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-6 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-4xl font-black text-white">50+</h4>
                <p className="text-gray-500 uppercase tracking-wider text-sm mt-1">Expert Trainers</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white">24/7</h4>
                <p className="text-gray-500 uppercase tracking-wider text-sm mt-1">Access Hours</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
