import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Credibility } from './components/Credibility';
import { ServicesShowcase } from './components/ServicesShowcase';
import { FacilitiesSection } from './components/FacilitiesSection';
import { ApproachSection } from './components/ApproachSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceType, FacilityType } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceType | undefined>();
  const [modalFacility, setModalFacility] = useState<FacilityType | undefined>();
  const [modalLocation, setModalLocation] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState('home');

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'facilities', 'approach', 'about', 'service-areas', 'quote', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openQuoteModal = (options?: { service?: ServiceType; facility?: FacilityType; location?: string }) => {
    setModalService(options?.service);
    setModalFacility(options?.facility);
    setModalLocation(options?.location);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] text-[#18252C] flex flex-col font-sans selection:bg-[#176B65] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        onRequestQuote={() => openQuoteModal()}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onRequestQuote={() => openQuoteModal()}
          onExploreServices={scrollToServices}
        />

        {/* Experience & Credibility (30+ Years Commercial Stability) */}
        <Credibility />

        {/* Commercial Services Showcase */}
        <ServicesShowcase
          onSelectServiceForQuote={(serviceId) => openQuoteModal({ service: serviceId })}
        />

        {/* Facilities We Serve (Offices, Warehouses, Retail) */}
        <FacilitiesSection
          onSelectFacilityForQuote={(facilityId) => openQuoteModal({ facility: facilityId })}
        />

        {/* Tailored Cleaning Approach (01 Understand, 02 Define, 03 Maintain Communication) */}
        <ApproachSection
          onRequestQuote={() => openQuoteModal()}
        />

        {/* About Office Express */}
        <AboutSection />

        {/* Authentic Customer Testimonials */}
        <TestimonialsSection />

        {/* Service Areas (Tulsa, OKC, Bentonville & Interactive Checker) */}
        <ServiceAreasSection
          onQuoteWithLocation={(location) => openQuoteModal({ location })}
        />

        {/* Unified Quotation Experience (On-Page Form) */}
        <QuoteSection />

        {/* Verified Contact Page / Communications Hub */}
        <ContactSection
          onRequestQuote={() => openQuoteModal()}
        />

        {/* Closing CTA */}
        <ClosingCta
          onRequestQuote={() => openQuoteModal()}
          onContactClick={scrollToContact}
        />
      </main>

      {/* Footer with S.Mideros Agency Disclosure */}
      <Footer
        onRequestQuote={() => openQuoteModal()}
      />

      {/* Interactive Quotation Modal for instant CTAs */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        initialService={modalService}
        initialFacility={modalFacility}
        initialLocation={modalLocation}
      />
    </div>
  );
}
