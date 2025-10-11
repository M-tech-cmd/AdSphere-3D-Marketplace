import React from 'react';
import { MapPin, Clock, Star, Zap } from 'lucide-react';

interface AdCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  timeAgo: string;
  image: string;
  category: string;
  isPremium?: boolean;
  rating?: number;
  seller: string;
}

const AdCard: React.FC<AdCardProps> = ({
  title,
  price,
  location,
  timeAgo,
  image,
  category,
  isPremium = false,
  rating = 4.5,
  seller
}) => {
  return (
    <div className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      {/* Premium Glow */}
      {isPremium && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      )}
      
      {/* Card Container */}
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500">
        {/* Premium Badge */}
        {isPremium && (
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Zap className="w-3 h-3" />
            PREMIUM
          </div>
        )}
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </div>
          
          {/* 3D Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {price}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-gray-300 text-sm">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">by {seller}</span>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
              View 3D
            </button>
          </div>
        </div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500" />
      </div>
    </div>
  );
};

export default AdCard;