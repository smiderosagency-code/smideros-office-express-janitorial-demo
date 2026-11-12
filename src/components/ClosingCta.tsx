import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface ClosingCtaProps {
  onRequestQuote: () => void;
  onContactClick: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onRequestQuote, onContactClick }) => {
  return (
    <section className="relative py-24 bg-[#18252C] text-white overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#176B65_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#E0CFA7] mb-4 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            <span>Oklahoma & Arkansas Commercial Janitorial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 [text-wrap:balance]">
            Let's Raise the Standard of Your Workplace.
          </h2>

          <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us about your facility and discover a cleaning solution tailored to your business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#1F8B83] active:scale-[0.98] rounded-xl shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B65]"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-wide text-white hover:text-[#E0CFA7] bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all focus-visible:outline-2 focus-visible:outline-white"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
          </div>

          {/* Quick Credibility Footnote (No Pills) */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B65]" />
              <span>Over 30 Years Experience</span>
            </span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B65]" />
              <span>Tulsa, OKC & Bentonville</span>
            </span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#176B65]" />
              <span>Zero Disruption Scheduling</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
