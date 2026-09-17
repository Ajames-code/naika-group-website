import React from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import SolutionsGrid from '../components/SolutionsGrid';
import LatestInsights from '../components/LatestInsights';
import PartnersCarousel from '../components/PartnersCarousel';
import SocialFeed from '../components/SocialFeed';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <SolutionsGrid />
      <LatestInsights />
      <PartnersCarousel />
      <SocialFeed />
      <ContactSection />
    </>
  );
}
