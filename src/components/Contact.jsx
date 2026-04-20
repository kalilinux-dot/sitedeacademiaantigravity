import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message Sent! We will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-darkBg relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neonRed/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neonRed font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Start Your Journey</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-gray-400 font-light text-lg">
              Ready to transform your life? Drop us a message, give us a call, or visit our facility. Our team is ready to help you reach your maximum potential.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-darkCard border border-white/5 group-hover:border-neonRed rounded flex items-center justify-center transition-colors">
                  <MapPin className="text-neonRed" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wider">Location</h5>
                  <p className="text-gray-400 font-light">123 Neon Avenue, Cyber City 9920</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-darkCard border border-white/5 group-hover:border-neonRed rounded flex items-center justify-center transition-colors">
                  <Phone className="text-neonRed" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wider">Phone</h5>
                  <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-darkCard border border-white/5 group-hover:border-neonRed rounded flex items-center justify-center transition-colors">
                  <Mail className="text-neonRed" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-wider">Email</h5>
                  <p className="text-gray-400 font-light">join@neonfit.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-darkCard p-8 rounded-lg border border-white/5 flex flex-col gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-neonRed transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-neonRed transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 rounded focus:outline-none focus:border-neonRed transition-colors resize-none placeholder-gray-600"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-neonRed text-white font-bold uppercase tracking-widest rounded hover:bg-white hover:text-neonRed transition-colors shadow-[0_0_15px_rgba(255,0,60,0.3)]"
              >
                Send Message
              </button>
              {status && <p className="text-green-500 text-sm mt-2 text-center">{status}</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
