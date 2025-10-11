import React, { useState } from 'react';
import { Menu, X, Sparkles, User, Plus, Bell, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AdSphere Kenya
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Browse</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Categories</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Premium</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Help</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-cyan-400 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Post Ad
            </button>
            <button className="text-gray-300 hover:text-cyan-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Browse</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Categories</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Premium</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Help</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold w-fit flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Post Ad
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;