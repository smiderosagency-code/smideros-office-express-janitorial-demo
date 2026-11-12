import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Building2, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/commercialData';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Background architectural ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9F6] via-[#E8F1ED]/30 to-[#F8F9F6] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Subtle editorial kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#176B65] mb-4">
              <span>{COMPANY_INFO.primaryRegions}</span>
              <span aria-hidden="true" className="text-[#66747A]">·</span>
              <span>Commercial Cleaning Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18252C] leading-[1.1] mb-6 [text-wrap:balance]">
              A Higher Standard for Every Workspace.
            </h1>

            {/* Supporting Prose */}
            <p className="text-lg sm:text-xl text-[#66747A] leading-relaxed mb-6 max-w-xl">
              Professional commercial cleaning tailored to your facility, your schedule, and your business needs.
            </p>

            {/* Supporting Commercial Statement */}
            <div className="flex items-center gap-2.5 text-sm font-medium text-[#18252C]/80 mb-8 bg-[#E8F1ED]/60 border border-[#E8F1ED] p-3 rounded-lg max-w-lg">
              <CheckCircle2 className="w-4 h-4 text-[#176B65] shrink-0" />
              <span>Commercial cleaning solutions for businesses across our service regions.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B65]"
              >
                <span>Request Your Cleaning Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold tracking-wide text-[#18252C] hover:text-[#176B65] bg-white hover:bg-[#F8F9F6] border border-[#D4E3DC] rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#176B65]"
              >
                <span>Explore Our Services</span>
                <ChevronDown className="w-4 h-4 text-[#66747A]" />
              </button>
            </div>

            {/* Verified Business Credibility Metadata (No Pills) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-[#66747A] pt-4 border-t border-[#E8F1ED]">
              <span>Exclusively Commercial Facilities</span>
              <span aria-hidden="true" className="text-[#66747A]/50">·</span>
              <span>Over 30 Years Experience</span>
              <span aria-hidden="true" className="text-[#66747A]/50">·</span>
              <span>Oklahoma & Arkansas</span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8F1ED] group">
              <img
                src="/images/hero-commercial-office.webp"
                alt="Architectural modern commercial office workspace cleaned and maintained by Office Express Janitorial Services"
                width={1200}
                height={675}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('.jpg')) {
                    target.src = '/images/hero-commercial-office.jpg';
                  }
                }}
                className="w-full h-[400px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Refined gradient scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18252C]/75 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Architectural Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#E8F1ED] font-semibold mb-1">
                    Corporate & Commercial Environments
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white leading-snug">
                    Offices · Warehouses · Retail Showrooms
                  </p>
                </div>
                <div className="shrink-0 text-right sm:text-left">
                  <span className="inline-block text-xs font-mono font-medium text-[#E0CFA7] bg-[#18252C]/80 backdrop-blur-xs px-3 py-1 rounded border border-[#C7A66A]/40">
                    Est. 1995 · Tulsa, OK
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural backdrop frame */}
            <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-[#176B65]/20 pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* Full-Width Metric & Proof Strip below hero split */}
        <div className="mt-14 pt-10 border-t border-[#E8F1ED]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock className="w-4 h-4 text-[#176B65]" />
                <span className="text-2xl sm:text-3xl font-extrabold text-[#18252C] font-mono tabular-nums">
                  30+ Years
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#18252C]">
                Commercial Experience
              </p>
              <p className="text-xs text-[#66747A] mt-0.5">
                Serving commercial facilities since 1995
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <Building2 className="w-4 h-4 text-[#176B65]" />
                <span className="text-2xl sm:text-3xl font-extrabold text-[#18252C] font-mono tabular-nums">
                  100%
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#18252C]">
                Commercial Focus
              </p>
              <p className="text-xs text-[#66747A] mt-0.5">
                Dedicated strictly to business properties
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <MapPin className="w-4 h-4 text-[#176B65]" />
                <span className="text-2xl sm:text-3xl font-extrabold text-[#18252C] font-mono tabular-nums">
                  3 Hubs
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#18252C]">
                Regional Coverage
              </p>
              <p className="text-xs text-[#66747A] mt-0.5">
                Tulsa HQ, Oklahoma City & Bentonville
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#176B65]" />
                <span className="text-2xl sm:text-3xl font-extrabold text-[#18252C] font-mono tabular-nums">
                  Tailored
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#18252C]">
                Custom Cleaning Plans
              </p>
              <p className="text-xs text-[#66747A] mt-0.5">
                Daily, weekly & specialized frequency
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
