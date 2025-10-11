import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AdSphere Kenya
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The future of classified ads in Kenya. Experience immersive 3D browsing and interactive listings like never before.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Categories Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3">
              {['Cars & Vehicles', 'Electronics', 'Real Estate', 'Jobs & Services', 'Fashion & Beauty', 'Home & Garden'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Safety Tips', 'Contact Us', 'Report Ad', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>hello@adsphere.co.ke</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-r-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 AdSphere Kenya. All rights reserved. Built with ❤️ in Nairobi.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;