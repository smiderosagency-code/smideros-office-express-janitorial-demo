import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { REGIONAL_HUBS } from '../data/commercialData';

interface NavbarProps {
  onRequestQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setPhoneMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8F1ED]'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#E8F1ED]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark in display face */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#18252C] hover:text-[#176B65] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-xs bg-[#176B65] shrink-0" aria-hidden="true" />
              <span>Office Express Janitorial</span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#66747A]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                      isActive
                        ? 'text-[#176B65] font-semibold border-b-2 border-[#176B65]'
                        : 'hover:text-[#18252C]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action (+ quick verified telephone popover) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                  className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide text-[#18252C] hover:text-[#176B65] bg-[#E8F1ED]/70 hover:bg-[#E8F1ED] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#176B65]"
                  aria-expanded={phoneMenuOpen}
                  aria-label="Call our regional offices"
                >
                  <Phone className="w-3.5 h-3.5 text-[#176B65]" />
                  <span>Call Our Team</span>
                </button>

                {/* Regional Phone Hub Dropdown */}
                {phoneMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E8F1ED] p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-xs font-semibold text-[#66747A] px-2 py-1 uppercase tracking-wider">
                      Verified Direct Office Lines
                    </div>
                    <div className="divide-y divide-[#E8F1ED] mt-1">
                      {REGIONAL_HUBS.map((hub) => (
                        <a
                          key={hub.id}
                          href={`tel:${hub.phoneRaw}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F8F9F6] transition-colors group"
                        >
                          <div>
                            <p className="text-xs font-bold text-[#18252C] group-hover:text-[#176B65]">
                              {hub.city}, {hub.state}
                              {hub.isHeadquarters && (
                                <span className="ml-1.5 text-[10px] font-medium text-[#C7A66A]">
                                  HQ
                                </span>
                              )}
                            </p>
                            <p className="text-xs font-medium text-[#66747A]">
                              {hub.phone}
                            </p>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#66747A] group-hover:text-[#176B65]" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={onRequestQuote}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] active:scale-[0.98] rounded-lg transition-all shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B65]"
              >
                Request a Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-[#18252C] hover:text-[#176B65] rounded-lg hover:bg-[#E8F1ED]/50 focus-visible:outline-2 focus-visible:outline-[#176B65]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E8F1ED] px-4 pt-2 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-3 text-base font-medium text-[#18252C] hover:text-[#176B65] hover:bg-[#F8F9F6] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#E8F1ED] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-lg shadow-sm transition-colors"
              >
                Request a Free Quote
              </button>

              <div className="bg-[#F8F9F6] rounded-lg p-3">
                <p className="text-xs font-semibold text-[#66747A] mb-2 uppercase tracking-wider">
                  Call Verified Local Hubs
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {REGIONAL_HUBS.map((hub) => (
                    <a
                      key={hub.id}
                      href={`tel:${hub.phoneRaw}`}
                      className="flex items-center justify-between text-xs font-medium text-[#18252C] hover:text-[#176B65] p-1.5"
                    >
                      <span>
                        {hub.city}, {hub.state}
                        {hub.isHeadquarters && ' (HQ)'}
                      </span>
                      <span className="font-mono text-[#176B65] font-semibold">{hub.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
