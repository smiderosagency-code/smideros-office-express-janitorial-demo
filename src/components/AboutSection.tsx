import React from 'react';
import { MapPin, ShieldCheck, Building, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, REGIONAL_HUBS } from '../data/commercialData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-[#E8F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-6 [text-wrap:balance]">
            Established Commercial Janitorial Experience.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            {COMPANY_INFO.name} was founded in 1995 to provide Oklahoma and Arkansas businesses with dependable, commercial-grade janitorial care. Over more than three decades, we have remained focused strictly on commercial environments.
          </p>
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#18252C]">
            <h3 className="text-2xl font-bold text-[#18252C]">
              Commercial Focus with Local Accountability
            </h3>
            
            <p className="text-sm sm:text-base text-[#66747A] leading-relaxed">
              Unlike residential cleaning companies that treat commercial contracts as secondary side work, our equipment, crew training, and scheduling systems are engineered exclusively for commercial properties. We understand the high stakes of commercial operations—from maintaining secure access and key control to delivering immaculate morning presentation before executive clients and retail shoppers arrive.
            </p>

            <p className="text-sm sm:text-base text-[#66747A] leading-relaxed">
              With operational hubs in Tulsa (headquarters), Oklahoma City, and Bentonville, Arkansas, our management remains physically present in the communities we serve. This localized presence ensures our clients receive hands-on service, periodic quality reviews, and direct communication with decision-makers who care about their business.
            </p>

            {/* Core Operational Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8F9F6] border border-[#E8F1ED]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#18252C] mb-1.5">
                  <Building className="w-4 h-4 text-[#176B65]" />
                  <span>Exclusively B2B</span>
                </div>
                <p className="text-xs text-[#66747A]">
                  Dedicated solely to commercial offices, logistics facilities, and retail spaces.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9F6] border border-[#E8F1ED]">
                <div className="flex items-center gap-2 font-bold text-sm text-[#18252C] mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#176B65]" />
                  <span>Facility Security</span>
                </div>
                <p className="text-xs text-[#66747A]">
                  Strict respect for building access codes, alarm procedures, and physical security.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Regional Footprint Matrix */}
          <div className="lg:col-span-5 bg-[#F8F9F6] rounded-2xl p-8 border border-[#E8F1ED] space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#176B65] mb-2">
                Operational Reach
              </div>
              <h4 className="text-xl font-bold text-[#18252C]">
                3 Regional Hubs Serving OK & AR
              </h4>
              <p className="text-xs text-[#66747A] mt-1">
                Each hub maintains dedicated cleaning crews, supervisors, and direct telephone response.
              </p>
            </div>

            <div className="divide-y divide-[#E8F1ED]">
              {REGIONAL_HUBS.map((hub) => (
                <div key={hub.id} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#18252C] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#176B65]" />
                      <span>{hub.label}</span>
                    </span>
                    {hub.isHeadquarters && (
                      <span className="text-[11px] font-mono font-semibold text-[#C7A66A] bg-[#C7A66A]/10 px-2 py-0.5 rounded">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#66747A] pl-5">{hub.address}</p>
                  <p className="text-xs font-mono font-medium text-[#176B65] pl-5 mt-0.5">
                    Phone: {hub.phone}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E8F1ED] text-xs text-[#66747A]">
              <span className="font-semibold text-[#18252C]">Direct Contact: </span>
              <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-[#176B65] hover:underline font-mono">
                {COMPANY_INFO.contactEmail}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
