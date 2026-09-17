import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutBento from '../components/about/AboutBento';
import AboutValues from '../components/about/AboutValues';
import AboutBanner from '../components/about/AboutBanner';
import ContactSection from '../components/ContactSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutBento />
      <AboutValues />
      <AboutBanner />
      <ContactSection />
    </>
  );
}
