import React from 'react';
import { Car, Smartphone, Home, Briefcase } from 'lucide-react';

const categories = [
  {
    id: 'cars',
    name: 'Cars & Vehicles',
    icon: Car,
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270471023_75e97172.webp',
    color: 'from-blue-500 to-cyan-500',
    count: '2,847 ads'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Smartphone,
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270475709_18ee4d8b.webp',
    color: 'from-purple-500 to-pink-500',
    count: '5,231 ads'
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: Home,
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270480368_bc34fd0e.webp',
    color: 'from-yellow-500 to-orange-500',
    count: '1,892 ads'
  },
  {
    id: 'jobs',
    name: 'Jobs & Services',
    icon: Briefcase,
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270484129_ae8993d1.webp',
    color: 'from-green-500 to-emerald-500',
    count: '3,456 ads'
  }
];

const CategorySelector: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dive into immersive 3D browsing experiences across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                  {/* 3D Icon Background */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Floating Animation */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{category.count}</p>
                  
                  <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                    Explore 3D View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;