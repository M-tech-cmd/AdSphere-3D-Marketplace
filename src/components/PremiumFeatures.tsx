import React from 'react';
import { Zap, Eye, TrendingUp, Shield, Sparkles, Crown } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '3D Showroom',
    description: 'Upload interactive 3D models of your products for immersive viewing',
    price: 'KSh 2,500/month',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Crown,
    title: 'Premium Listing',
    description: 'Get highlighted with golden glow and priority placement',
    price: 'KSh 1,000/listing',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Boost Visibility',
    description: 'Appear at the top of search results for 7 days',
    price: 'KSh 500/week',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Eye,
    title: 'Analytics Pro',
    description: 'Detailed insights on views, clicks, and engagement',
    price: 'KSh 1,500/month',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Verified Badge',
    description: 'Build trust with verified seller status and badge',
    price: 'KSh 3,000/year',
    color: 'from-indigo-400 to-purple-500'
  },
  {
    icon: Sparkles,
    title: 'AI Enhancement',
    description: 'Auto-optimize your listings with AI-powered descriptions',
    price: 'KSh 800/month',
    color: 'from-pink-400 to-rose-500'
  }
];

const PremiumFeatures: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold mb-4">
            <Crown className="w-5 h-5" />
            Premium Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Supercharge Your Listings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock advanced features to make your ads stand out with 3D experiences and premium visibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.price}
                    </span>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${feature.color} text-white py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg`}>
                    Upgrade Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-md border border-yellow-400/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Ready to Go Premium?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of successful sellers using AdSphere Kenya's premium features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;