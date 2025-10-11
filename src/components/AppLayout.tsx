import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Navigation from './Navigation';
import Hero from './Hero';
import CategorySelector from './CategorySelector';
import FeaturedListings from './FeaturedListings';
import FilterPanel from './FilterPanel';
import PremiumFeatures from './PremiumFeatures';
import Footer from './Footer';
import '../styles/animations.css';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Category Selector */}
      <CategorySelector />
      
      {/* Featured Listings */}
      <FeaturedListings />
      
      {/* Premium Features */}
      <PremiumFeatures />
      
      {/* Footer */}
      <Footer />
      
      {/* Filter Panel */}
      <FilterPanel />
    </div>
  );
};

export default AppLayout;
