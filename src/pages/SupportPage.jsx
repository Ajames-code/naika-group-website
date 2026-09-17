import React from 'react';
import SupportHero from '../components/support/SupportHero';
import TicketPortalSection from '../components/support/TicketPortalSection';
import SupportChannels from '../components/support/SupportChannels';
import SupportStats from '../components/support/SupportStats';
import ContactSection from '../components/ContactSection';

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <TicketPortalSection />
      <SupportChannels />
      <SupportStats />
      <ContactSection />
    </>
  );
}
