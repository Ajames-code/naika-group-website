import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import Metrics from '../components/Metrics';
import IndustriesSection from '../components/services/IndustriesSection';
import ServicesCTA from '../components/services/ServicesCTA';
import PartnersCarousel from '../components/PartnersCarousel';
import ContactSection from '../components/ContactSection';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Metrics />
      <IndustriesSection />
      <PartnersCarousel />
      <ServicesCTA />
      <ContactSection />
    </>
  );
}
