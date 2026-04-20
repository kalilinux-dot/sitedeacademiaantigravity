import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Athlete",
      text: "Joining NeonFit completely changed my perspective on training. The atmosphere is electric, and the equipment is top-notch. I've never felt stronger.",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
    },
    {
      name: "Sarah Miller",
      role: "Fitness Enthusiast",
      text: "The group classes here are incredible. The trainers push you to your absolute limits while making sure your form is perfect. Highly recommend!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      name: "David Chen",
      role: "Beginner",
      text: "As someone who was intimidated by the gym, the community here is incredibly welcoming. The personal training program helped me build a solid foundation.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-darkBg border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <Quote size={80} className="text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 z-0" />
          
          <div className="relative z-10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-3xl font-light text-gray-300 italic mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <img 
                  src={testimonials[current].img} 
                  alt={testimonials[current].name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-neonRed mb-4"
                />
                <h5 className="text-white font-bold uppercase tracking-wider">{testimonials[current].name}</h5>
                <p className="text-neonRed text-sm uppercase tracking-widest mt-1">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neonRed hover:text-neonRed transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neonRed hover:text-neonRed transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
