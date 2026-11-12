import React, { useState } from 'react';
import { MapPin, Phone, Search, CheckCircle, ArrowRight, Building2, HelpCircle } from 'lucide-react';
import { REGIONAL_HUBS, SERVICE_AREAS_LIST } from '../data/commercialData';

interface ServiceAreasSectionProps {
  onQuoteWithLocation: (cityOrZip: string) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({ onQuoteWithLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lookupResult, setLookupResult] = useState<{
    found: boolean;
    region?: string;
    hub?: string;
    phone?: string;
    phoneRaw?: string;
    message: string;
  } | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      setLookupResult(null);
      return;
    }

    // Check matches in verified lists
    let matchedArea = null;
    for (const area of SERVICE_AREAS_LIST) {
      const cityMatch = area.cities.some(c => c.toLowerCase() === query || query.includes(c.toLowerCase()));
      const zipMatch = area.zipCodes.some(z => z.startsWith(query) || query.startsWith(z));
      if (cityMatch || zipMatch) {
        matchedArea = area;
        break;
      }
    }

    if (matchedArea) {
      setLookupResult({
        found: true,
        region: matchedArea.region,
        hub: matchedArea.hubCity,
        phone: matchedArea.phone,
        phoneRaw: matchedArea.phone.replace(/[^0-9]/g, ''),
        message: `Confirmed service coverage in ${matchedArea.region}. Serviced by our ${matchedArea.hubCity} regional team.`,
      });
    } else {
      setLookupResult({
        found: false,
        message: `We routinely review customized commercial routes across Oklahoma and Arkansas. Submit your facility location below to verify custom route scheduling.`,
      });
    }
  };

  return (
    <section id="service-areas" className="py-24 bg-white border-y border-[#E8F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Regional Presence & Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Service Areas Across Oklahoma & Arkansas.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            Office Express operates through physical office locations in Tulsa, Oklahoma City, and Bentonville, dispatching commercial cleaning supervisors and crews throughout each surrounding metropolitan corridor.
          </p>
        </div>

        {/* 3 Regional Hub Cards Distinguishing Physical Hub vs Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {REGIONAL_HUBS.map((hub) => {
            const areaData = SERVICE_AREAS_LIST.find(a => a.hubCity.includes(hub.city));
            return (
              <div
                key={hub.id}
                className="bg-[#F8F9F6] rounded-2xl p-8 border border-[#E8F1ED] flex flex-col justify-between transition-all hover:border-[#176B65]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#176B65]">
                      {hub.state === 'OK' ? 'Oklahoma Hub' : 'Arkansas Hub'}
                    </span>
                    {hub.isHeadquarters && (
                      <span className="text-[11px] font-mono font-semibold text-[#C7A66A] bg-[#C7A66A]/10 px-2 py-0.5 rounded">
                        Corporate HQ
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[#18252C] mb-2">
                    {hub.city}, {hub.state}
                  </h3>

                  {/* Physical Address */}
                  <div className="flex items-start gap-2.5 text-xs text-[#66747A] mb-4">
                    <Building2 className="w-4 h-4 text-[#176B65] shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#18252C] mb-6">
                    <Phone className="w-4 h-4 text-[#176B65] shrink-0" />
                    <a href={`tel:${hub.phoneRaw}`} className="hover:text-[#176B65] font-mono">
                      {hub.phone}
                    </a>
                  </div>

                  {/* Verified Service Coverage */}
                  <div className="pt-4 border-t border-[#E8F1ED]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#18252C] mb-2">
                      Confirmed Coverage Communities:
                    </h4>
                    <p className="text-xs text-[#66747A] leading-relaxed">
                      {hub.coverageZones.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8F1ED]">
                  <button
                    type="button"
                    onClick={() => onQuoteWithLocation(`${hub.city}, ${hub.state}`)}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#176B65] hover:text-white bg-white hover:bg-[#176B65] border border-[#176B65]/30 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote for {hub.city} Area</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Coverage Lookup Tool */}
        <div className="bg-[#18252C] text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-semibold text-[#E0CFA7] uppercase tracking-wider">
              Instant Coverage Verification
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
              Check Service Availability in Your Area
            </h3>
            <p className="text-sm text-gray-300">
              Enter your Oklahoma or Arkansas city or ZIP code to confirm dispatch coverage from our Tulsa, OKC, or Bentonville teams.
            </p>
          </div>

          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3 max-w-xl mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#66747A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Tulsa, 74136, Edmond, Bentonville, Rogers..."
                className="w-full pl-10 pr-4 py-3.5 bg-white/10 text-white placeholder-gray-400 rounded-xl border border-white/20 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#176B65] focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-xl transition-colors shrink-0"
            >
              Verify Coverage
            </button>
          </form>

          {/* Result Banner */}
          {lookupResult && (
            <div
              className={`p-5 rounded-xl border max-w-xl animate-in fade-in duration-200 ${
                lookupResult.found
                  ? 'bg-[#176B65]/20 border-[#176B65] text-white'
                  : 'bg-white/5 border-white/20 text-gray-200'
              }`}
            >
              <div className="flex items-start gap-3">
                {lookupResult.found ? (
                  <CheckCircle className="w-5 h-5 text-[#E0CFA7] shrink-0 mt-0.5" />
                ) : (
                  <HelpCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-semibold mb-1">{lookupResult.message}</p>
                  {lookupResult.found && lookupResult.phone && (
                    <p className="text-xs text-gray-300 font-mono mt-1">
                      Direct Hub Line:{' '}
                      <a href={`tel:${lookupResult.phoneRaw}`} className="text-[#E0CFA7] underline">
                        {lookupResult.phone}
                      </a>
                    </p>
                  )}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => onQuoteWithLocation(searchQuery)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#E0CFA7] hover:text-white underline inline-flex items-center gap-1"
                    >
                      <span>Proceed to Quote with {searchQuery}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
