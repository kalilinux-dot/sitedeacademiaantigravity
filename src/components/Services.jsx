import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Activity, HeartPulse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell size={40} className="text-neonRed mb-4" />,
      title: 'Free Weights',
      desc: 'Extensive free weight area with premium barbells, dumbbells, and racks.',
    },
    {
      icon: <Users size={40} className="text-neonRed mb-4" />,
      title: 'Group Classes',
      desc: 'High-energy group classes including HIIT, spin, and functional fitness.',
    },
    {
      icon: <Activity size={40} className="text-neonRed mb-4" />,
      title: 'Personal Training',
      desc: '1-on-1 coaching customized to your goals, body type, and schedule.',
    },
    {
      icon: <HeartPulse size={40} className="text-neonRed mb-4" />,
      title: 'Cardio Zone',
      desc: 'State-of-the-art treadmills, rowers, and bikes to boost your endurance.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-neonRed font-bold uppercase tracking-widest text-sm mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">What We Offer</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-darkCard p-8 rounded-lg border border-white/5 hover:border-neonRed/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,0,60,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-neonRed/5 rounded-full blur-2xl group-hover:bg-neonRed/10 transition-colors" />
              <div className="relative z-10">
                {service.icon}
                <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h4>
                <p className="text-gray-400 font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
