import React, { useState } from 'react';
import { Building, Warehouse, Store, Clock, CalendarDays, CheckCircle2 } from 'lucide-react';
import { COMMERCIAL_FACILITIES } from '../data/commercialData';
import { FacilityType } from '../types';

interface FacilitiesSectionProps {
  onSelectFacilityForQuote: (facilityType: FacilityType) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onSelectFacilityForQuote }) => {
  const [activeFacilityId, setActiveFacilityId] = useState<FacilityType>('office');

  const activeFacility = COMMERCIAL_FACILITIES.find(f => f.id === activeFacilityId) || COMMERCIAL_FACILITIES[0];

  const getFacilityIcon = (id: FacilityType) => {
    switch (id) {
      case 'office':
        return <Building className="w-5 h-5" />;
      case 'warehouse':
        return <Warehouse className="w-5 h-5" />;
      case 'retail':
        return <Store className="w-5 h-5" />;
      default:
        return <Building className="w-5 h-5" />;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-white border-y border-[#E8F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Target Commercial Environments
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Cleaning Solutions Built Around Your Facility.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            Every business environment poses unique operational realities. A corporate executive floor requires quiet, thorough night-time detailing, while a high-throughput distribution warehouse demands robust concrete floor care that aligns with freight shift cycles.
          </p>
        </div>

        {/* 3 Confirmed Facility Buttons / Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {COMMERCIAL_FACILITIES.map((facility) => {
            const isActive = activeFacilityId === facility.id;
            return (
              <button
                key={facility.id}
                type="button"
                onClick={() => setActiveFacilityId(facility.id)}
                className={`p-6 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#18252C] text-white border-[#18252C] shadow-lg ring-2 ring-[#176B65]'
                    : 'bg-[#F8F9F6] hover:bg-[#E8F1ED]/50 border-[#E8F1ED] text-[#18252C]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#176B65] text-white' : 'bg-white text-[#176B65] shadow-xs'
                    }`}
                  >
                    {getFacilityIcon(facility.id)}
                  </div>
                  {isActive && (
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#E0CFA7]">
                      Viewing Details
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1.5">{facility.title}</h3>
                  <p
                    className={`text-xs line-clamp-2 ${
                      isActive ? 'text-gray-300' : 'text-[#66747A]'
                    }`}
                  >
                    {facility.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Facility Specification Matrix */}
        <div className="bg-[#F8F9F6] rounded-2xl border border-[#E8F1ED] p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Operational Specifications */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#66747A] mb-3">
                  <span className="text-[#176B65] uppercase tracking-wider font-semibold">Facility Profile</span>
                  <span aria-hidden="true">·</span>
                  <span>Operational Logistics</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#18252C] mb-4">
                  {activeFacility.title}
                </h3>

                <p className="text-sm sm:text-base text-[#66747A] leading-relaxed mb-6">
                  {activeFacility.description}
                </p>

                {/* Cleaning Priorities */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18252C] mb-3">
                    Core Cleaning Priorities:
                  </h4>
                  <div className="space-y-2.5">
                    {activeFacility.cleaningPriorities.map((priority, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#18252C]">
                        <CheckCircle2 className="w-4 h-4 text-[#176B65] shrink-0 mt-0.5" />
                        <span>{priority}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frequency & Scheduling Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E8F1ED]">
                  <div className="bg-white p-4 rounded-xl border border-[#E8F1ED]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B65] mb-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>Recommended Frequency</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#18252C]">
                      {activeFacility.recommendedFrequencies}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#E8F1ED]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B65] mb-1">
                      <Clock className="w-4 h-4" />
                      <span>Scheduling Window</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#18252C]">
                      {activeFacility.schedulingConsiderations}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#E8F1ED] flex items-center justify-between flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onSelectFacilityForQuote(activeFacility.id)}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-xl transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-[#176B65]"
                >
                  Configure Quote for {activeFacility.title}
                </button>
                <p className="text-xs text-[#66747A]">
                  Tailors your quote draft to this commercial facility type.
                </p>
              </div>
            </div>

            {/* Right: Environmental Photography */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden shadow-md border border-[#E8F1ED] h-[340px] lg:h-[440px]">
              <img
                src={activeFacility.image}
                alt={`${activeFacility.title} commercial space maintained by Office Express Janitorial Services`}
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
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18252C]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-mono font-medium text-[#E0CFA7] uppercase tracking-wider mb-1">
                  Active Commercial Protocol
                </p>
                <p className="text-sm font-semibold text-white">
                  Customized frequency & security-compliant staffing
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
