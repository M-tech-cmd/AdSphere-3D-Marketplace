import React from 'react';
import AdCard from './AdCard';

const listings = [
  {
    id: '1',
    title: 'Toyota Probox 2018 - Excellent Condition',
    price: 'KSh 1,200,000',
    location: 'Nairobi, CBD',
    timeAgo: '2 hours ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270439091_4c086c71.webp',
    category: 'Cars',
    isPremium: true,
    rating: 4.8,
    seller: 'AutoDealer Pro'
  },
  {
    id: '2',
    title: 'iPhone 14 Pro Max - 256GB Space Black',
    price: 'KSh 145,000',
    location: 'Westlands',
    timeAgo: '4 hours ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270449505_be7045af.webp',
    category: 'Electronics',
    isPremium: false,
    rating: 4.6,
    seller: 'TechHub Kenya'
  },
  {
    id: '3',
    title: 'Modern 3BR House - Kileleshwa',
    price: 'KSh 25,000,000',
    location: 'Kileleshwa',
    timeAgo: '1 day ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270457134_72b7bb87.webp',
    category: 'Real Estate',
    isPremium: true,
    rating: 4.9,
    seller: 'Prime Properties'
  },
  {
    id: '4',
    title: 'MacBook Pro M2 - 16" 512GB',
    price: 'KSh 280,000',
    location: 'Karen',
    timeAgo: '6 hours ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270464997_7e98fb73.webp',
    category: 'Electronics',
    isPremium: false,
    rating: 4.7,
    seller: 'MacStore Kenya'
  },
  {
    id: '5',
    title: 'Toyota Vitz 2016 - Low Mileage',
    price: 'KSh 950,000',
    location: 'Thika Road',
    timeAgo: '8 hours ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270441031_de6636f5.webp',
    category: 'Cars',
    isPremium: false,
    rating: 4.4,
    seller: 'CarMart Kenya'
  },
  {
    id: '6',
    title: 'Samsung Galaxy S23 Ultra',
    price: 'KSh 125,000',
    location: 'Eastleigh',
    timeAgo: '12 hours ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270451207_7253401a.webp',
    category: 'Electronics',
    isPremium: true,
    rating: 4.5,
    seller: 'Galaxy Store'
  },
  {
    id: '7',
    title: 'Luxury Villa - Runda Estate',
    price: 'KSh 45,000,000',
    location: 'Runda',
    timeAgo: '2 days ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270458880_a3b5215a.webp',
    category: 'Real Estate',
    isPremium: true,
    rating: 5.0,
    seller: 'Luxury Homes KE'
  },
  {
    id: '8',
    title: 'Honda Fit 2014 - Great Fuel Economy',
    price: 'KSh 780,000',
    location: 'Kasarani',
    timeAgo: '1 day ago',
    image: 'data:image/webp;base64,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',
    category: 'Cars',
    isPremium: false,
    rating: 4.3,
    seller: 'Honda Dealers'
  },
  {
    id: '9',
    title: 'Modern Apartment - Kilimani',
    price: 'KSh 12,500,000',
    location: 'Kilimani',
    timeAgo: '3 days ago',
    image: 'https://d64gsuwffb70l.cloudfront.net/68cd13beed0907a641067409_1758270460673_215d732b.webp',
    category: 'Real Estate',
    isPremium: false,
    rating: 4.2,
    seller: 'Urban Living'
  }
];

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Listings
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover premium ads with immersive 3D previews and interactive experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AdCard {...listing} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;