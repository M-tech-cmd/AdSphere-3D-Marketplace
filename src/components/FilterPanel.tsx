import React, { useState } from 'react';
import { Filter, MapPin, DollarSign, Tag, X } from 'lucide-react';

const FilterPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [location, setLocation] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'cars', name: 'Cars & Vehicles' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'realestate', name: 'Real Estate' },
    { id: 'jobs', name: 'Jobs & Services' }
  ];

  const locations = [
    'Nairobi CBD', 'Westlands', 'Kileleshwa', 'Karen', 'Kilimani',
    'Eastleigh', 'Kasarani', 'Thika Road', 'Runda', 'Lavington'
  ];

  return (
    <>
      {/* Filter Toggle Button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
        >
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-white/10 z-40 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Filters
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-cyan-400" />
              <label className="text-white font-semibold">Category</label>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 text-cyan-400'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <label className="text-white font-semibold">Location</label>
            </div>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-slate-800">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              <label className="text-white font-semibold">Price Range</label>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm">Min Price (KSh)</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors mt-1"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="text-gray-300 text-sm">Max Price (KSh)</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000000])}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors mt-1"
                  placeholder="50,000,000"
                />
              </div>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            Apply Filters
          </button>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedCategory('all');
              setPriceRange([0, 50000000]);
              setLocation('');
            }}
            className="w-full mt-4 border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FilterPanel;