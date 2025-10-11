import React from 'react';
import { Search, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Nairobi Skyline Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270433727_77566309.webp)'
        }}
      />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="mb-8 animate-fade-in-up">
          <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-spin-slow" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-text-shimmer">
            AdSphere Kenya
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            Experience the future of classified ads with immersive 3D browsing and interactive listings
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
            <Search className="w-6 h-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search cars, electronics, houses, jobs..."
              className="flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-3 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Search
            </button>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            Explore 3D Marketplace
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
            Post Your Ad
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;