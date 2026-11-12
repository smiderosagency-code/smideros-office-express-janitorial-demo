import React from 'react';
import { Quote } from 'lucide-react';
import { AUTHENTIC_TESTIMONIALS } from '../data/commercialData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Client Voices & Accountability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Enduring Commercial Relationships.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            Authentic feedback from commercial facility administrators and operations managers who rely on Office Express Janitorial Services for daily consistency and proactive communication.
          </p>
        </div>

        {/* 3 Authentic Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUTHENTIC_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 sm:p-9 border border-[#E8F1ED] shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#176B65]/30 relative"
            >
              <div>
                {/* Decorative architectural quote icon */}
                <div className="w-10 h-10 rounded-lg bg-[#E8F1ED] flex items-center justify-center text-[#176B65] mb-6">
                  <Quote className="w-5 h-5" />
                </div>

                <div className="text-xs font-mono font-semibold text-[#176B65] uppercase tracking-wider mb-3">
                  {t.highlight}
                </div>

                <blockquote className="text-sm sm:text-base text-[#18252C] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Attribution Footer */}
              <div className="pt-6 border-t border-[#E8F1ED]">
                <p className="text-xs font-bold text-[#18252C]">
                  {t.clientContext}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#66747A] mt-1">
                  <span>{t.relationshipDuration}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.focusArea}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#66747A] max-w-xl mx-auto">
            Statements reflect authentic commercial client feedback from public and verified records regarding consistency, responsiveness, and ongoing quality reviews.
          </p>
        </div>

      </div>
    </section>
  );
};
