import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Shield, Droplets, Brush } from 'lucide-react';
import { COMMERCIAL_SERVICES } from '../data/commercialData';
import { ServiceType } from '../types';

interface ServicesShowcaseProps {
  onSelectServiceForQuote: (serviceId: ServiceType) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceType>('general_commercial');

  const activeService = COMMERCIAL_SERVICES.find(s => s.id === selectedServiceId) || COMMERCIAL_SERVICES[0];

  const getServiceIcon = (id: ServiceType) => {
    switch (id) {
      case 'general_commercial':
        return <Brush className="w-5 h-5" />;
      case 'floor_scrubbing_waxing':
        return <Sparkles className="w-5 h-5" />;
      case 'carpet_cleaning':
        return <Droplets className="w-5 h-5" />;
      case 'sanitizing':
        return <Shield className="w-5 h-5" />;
      default:
        return <Brush className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8F9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
              Confirmed Commercial Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight [text-wrap:balance]">
              Commercial Cleaning Services.
            </h2>
            <p className="text-base sm:text-lg text-[#66747A] mt-4 leading-relaxed">
              Tailored janitorial solutions based on verified business offerings. Built to protect commercial assets, maintain pristine hygiene, and impress visiting clients.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onSelectServiceForQuote('multiple_services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B65] hover:text-[#104F4A] hover:underline"
            >
              <span>Need multiple services combined?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Service Selector Bar (Functional Filter Buttons / Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {COMMERCIAL_SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-white border-[#176B65] shadow-md ring-1 ring-[#176B65]/20'
                    : 'bg-white/60 hover:bg-white border-[#E8F1ED] text-[#66747A]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#176B65] text-white'
                        : 'bg-[#E8F1ED] text-[#176B65]'
                    }`}
                  >
                    {getServiceIcon(service.id)}
                  </div>
                  {isSelected && (
                    <span className="text-[11px] font-mono font-semibold text-[#176B65] uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-[#18252C]' : 'text-[#66747A]'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Deep-Dive Service Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E8F1ED] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Detailed Service Narrative */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#66747A] mb-3">
                  <span className="text-[#176B65] uppercase tracking-wider font-semibold">Service Focus</span>
                  <span aria-hidden="true">·</span>
                  <span>Commercial Facility Standards</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#18252C] mb-3">
                  {activeService.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[#176B65] font-medium mb-5">
                  {activeService.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#66747A] leading-relaxed mb-6">
                  {activeService.fullDesc}
                </p>

                {/* Scope Inclusions */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18252C] mb-3">
                    What This Service Covers:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#18252C]">
                        <Check className="w-4 h-4 text-[#176B65] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Facility Applications (Unboxed Clean Typography) */}
                <div className="pt-5 border-t border-[#E8F1ED] mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#66747A] mr-2">
                    Ideal Commercial Facilities:
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#18252C]">
                    {activeService.facilityApplications.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Direct Quote CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(activeService.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#176B65]"
                >
                  <span>Request Quote for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#66747A]">
                  Pre-fills this service option in our unified quotation form.
                </p>
              </div>
            </div>

            {/* Right: High-Fidelity Service Photography */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-[#18252C]">
              <img
                src={activeService.image}
                alt={`${activeService.title} - commercial janitorial standard by Office Express`}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('.webp')) {
                    target.src = target.src.replace(/\.webp$/, '.jpg');
                  }
                }}
                className="w-full h-full object-cover min-h-[320px] lg:min-h-[500px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18252C]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-mono font-medium text-[#E0CFA7] uppercase tracking-wider mb-1">
                  Commercial Standard
                </p>
                <p className="text-sm font-semibold text-white/95 leading-snug">
                  {activeService.shortDesc}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
