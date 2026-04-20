import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: ['Access to gym equipment', 'Locker room access', 'Free WiFi', '1 Group class / month'],
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '59',
      features: ['Unlimited gym access', 'All group classes', '1 PT session / month', 'Sauna & Spa access', 'Nutrition guide'],
      isPopular: true,
    },
    {
      name: 'Elite',
      price: '99',
      features: ['Everything in Pro', '4 PT sessions / month', 'Private locker', 'Priority booking', 'Supplement pack'],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-darkBg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neonRed/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neonRed font-bold uppercase tracking-widest text-sm mb-2">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Choose Your Tier</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-darkCard p-8 rounded-2xl border ${plan.isPopular ? 'border-neonRed shadow-[0_0_30px_rgba(255,0,60,0.15)] md:-translate-y-4' : 'border-white/10'} flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neonRed text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h4 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 font-light">
                    <div className="w-5 h-5 rounded-full bg-neonRed/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-neonRed" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded font-bold uppercase tracking-widest transition-all duration-300 ${plan.isPopular ? 'bg-neonRed text-white hover:bg-white hover:text-neonRed' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
