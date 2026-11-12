import React from 'react';
import { Building2, Phone, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, REGIONAL_HUBS } from '../data/commercialData';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10191E] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Corporate Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#176B65] shrink-0" aria-hidden="true" />
              <span>Office Express Janitorial Services, Inc.</span>
            </div>
            
            <p className="text-xs font-mono uppercase tracking-wider text-[#C7A66A]">
              Professional Spaces. Exceptional Standards.
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Delivering specialized commercial cleaning, floor care, carpet extraction, and sanitizing solutions to corporate offices, logistics warehouses, and retail environments across Oklahoma and Arkansas for over 30 years.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#1F8B83] rounded-lg transition-colors"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Commercial Services</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Facilities We Serve</a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">Service Areas</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Hubs</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Hubs & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Regional Operations Hubs
            </h4>

            <div className="space-y-3 text-xs text-gray-300">
              {REGIONAL_HUBS.map((hub) => (
                <div key={hub.id} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">
                      {hub.city}, {hub.state}
                      {hub.isHeadquarters && ' (Corporate HQ)'}
                    </span>
                    <a
                      href={`tel:${hub.phoneRaw}`}
                      className="font-mono text-[#E0CFA7] hover:underline"
                    >
                      {hub.phone}
                    </a>
                  </div>
                  <p className="text-[11px] text-gray-400">{hub.address}</p>
                </div>
              ))}
            </div>

            <div className="pt-1 flex items-center gap-2 text-xs text-gray-400">
              <span>Central Inquiries:</span>
              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="text-[#E0CFA7] hover:underline font-mono"
              >
                {COMPANY_INFO.contactEmail}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Concept Disclosure Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Office Express Janitorial Services, Inc. All rights reserved.</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            {/* Required discreet footer disclosure */}
            <span className="text-[#C7A66A] font-medium">
              Independent website redesign concept by S.Mideros Agency.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.officeexpressjanitorial.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <span>Original Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
