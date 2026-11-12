import React from 'react';
import { Calendar, ShieldCheck, RefreshCw, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/commercialData';

export const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-[#E8F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Proven Commercial Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Experience That Shows in Every Detail.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            With over 30 years of commercial janitorial experience, {COMPANY_INFO.name} has built its reputation on reliable operations, thorough workmanship, and customized cleaning programs designed specifically for business spaces across Oklahoma and Northwest Arkansas.
          </p>
        </div>

        {/* 3 Strategic Pillars of Operational Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: 30+ Years Commercial Stability */}
          <div className="p-8 rounded-2xl bg-[#F8F9F6] border border-[#E8F1ED] transition-all hover:border-[#176B65]/30">
            <div className="w-12 h-12 rounded-xl bg-[#E8F1ED] flex items-center justify-center text-[#176B65] mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7A66A] mb-2">
              Over Three Decades
            </div>
            <h3 className="text-xl font-bold text-[#18252C] mb-3">
              Established Commercial Continuity
            </h3>
            <p className="text-sm text-[#66747A] leading-relaxed">
              Serving local and regional enterprises since 1995. We understand the logistical nuances of commercial properties, from security access protocols to shift scheduling, maintaining dependable long-term relationships with facility administrators.
            </p>
          </div>

          {/* Pillar 2: Tailored Operational Frequencies */}
          <div className="p-8 rounded-2xl bg-[#F8F9F6] border border-[#E8F1ED] transition-all hover:border-[#176B65]/30">
            <div className="w-12 h-12 rounded-xl bg-[#E8F1ED] flex items-center justify-center text-[#176B65] mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7A66A] mb-2">
              Adaptable Scheduling
            </div>
            <h3 className="text-xl font-bold text-[#18252C] mb-3">
              Plans Aligned to Your Business Cadence
            </h3>
            <p className="text-sm text-[#66747A] leading-relaxed">
              No two commercial operations share the same footprint. We structure janitorial frequencies—daily night crews, semi-weekly maintenance, or periodic deep floor restoration—to match your operating hours without disrupting daily commerce.
            </p>
          </div>

          {/* Pillar 3: Specialized Commercial Scope */}
          <div className="p-8 rounded-2xl bg-[#F8F9F6] border border-[#E8F1ED] transition-all hover:border-[#176B65]/30">
            <div className="w-12 h-12 rounded-xl bg-[#E8F1ED] flex items-center justify-center text-[#176B65] mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C7A66A] mb-2">
              Specialized Care
            </div>
            <h3 className="text-xl font-bold text-[#18252C] mb-3">
              From Routine Upkeep to Deep Restoration
            </h3>
            <p className="text-sm text-[#66747A] leading-relaxed">
              Beyond routine dusting and waste management, our crews are equipped for commercial hard floor scrubbing and waxing, hot-water carpet extraction, and targeted sanitizing to protect the long-term capital value of your physical assets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
