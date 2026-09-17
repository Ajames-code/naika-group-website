import React from 'react';
import PixanHero from '../components/pixan/PixanHero';
import PixanFeatures from '../components/pixan/PixanFeatures';
import PixanArchitecture from '../components/pixan/PixanArchitecture';
import PixanCTA from '../components/pixan/PixanCTA';
import ContactSection from '../components/ContactSection';

export default function PixanPage() {
  return (
    <>
      <PixanHero />
      <PixanFeatures />
      <PixanArchitecture />
      <PixanCTA />
      <ContactSection />
    </>
  );
}
