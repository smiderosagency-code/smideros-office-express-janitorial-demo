import { Eye, FileText, MessageSquare, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onRequestQuote: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      number: '01',
      title: 'Understand Your Facility',
      tagline: 'Comprehensive assessment of space, traffic, and priorities.',
      description:
        'Every workspace has its own rhythm. We begin by learning about your facility layout, high-traffic corridors, security considerations, and specific cleaning priorities to create an accurate operational picture.',
      icon: <Eye className="w-6 h-6 text-[#176B65]" />,
      actionPoints: [
        'Detailed space evaluation and floor-plan review',
        'Identification of high-wear areas and high-touch points',
        'Understanding facility hours, shift patterns, and access protocols',
      ],
    },
    {
      number: '02',
      title: 'Define the Cleaning Plan',
      tagline: 'Customized scope, frequency, and non-disruptive scheduling.',
      description:
        'Together, we establish a structured commercial cleaning agreement tailored to your operational requirements. We determine the exact service mix—general cleaning, floor care, carpet extraction, or sanitizing—and ideal frequency.',
      icon: <FileText className="w-6 h-6 text-[#176B65]" />,
      actionPoints: [
        'Clear daily, weekly, or monthly frequency determination',
        'Transparent scope of work detailing exact cleaning tasks',
        'Evening, early-morning, or tailored weekend scheduling',
      ],
    },
    {
      number: '03',
      title: 'Maintain Clear Communication',
      tagline: 'Ongoing management dialogue and responsiveness to requests.',
      description:
        'Long-term client relationships rely on accountability. Our management conducts periodic quality check-ins, welcomes client feedback, and remains readily available whenever special requests or schedule modifications arise.',
      icon: <MessageSquare className="w-6 h-6 text-[#176B65]" />,
      actionPoints: [
        'Accessible local management points-of-contact',
        'Periodic check-ins to review cleaning standards and satisfaction',
        'Rapid responsiveness to emergency touch-ups and event support',
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 bg-[#F8F9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Structured Client Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Cleaning That Works Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            Rather than enforcing generic, rigid packages, Office Express builds tailored cleaning programs that conform to your business schedule, security rules, and physical property needs.
          </p>
        </div>

        {/* 3 Numbered Editorial Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8F1ED] shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-[#176B65]/30 group"
            >
              <div>
                {/* Step Top Bar: Editorial Number & Icon */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E8F1ED]">
                  <span className="text-3xl font-extrabold font-mono text-[#18252C] group-hover:text-[#176B65] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F1ED] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#18252C] mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#176B65] uppercase tracking-wide mb-4">
                  {step.tagline}
                </p>

                <p className="text-sm text-[#66747A] leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E8F1ED]/70">
                  {step.actionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#18252C]">
                      <span className="text-[#176B65] font-bold">·</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip for Walkthrough & Quote */}
        <div className="bg-[#18252C] text-white rounded-2xl p-8 sm:p-10 border border-[#18252C] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold text-[#E0CFA7] uppercase tracking-wider mb-1.5">
              Ready to structure your cleaning plan?
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Start with an accurate, no-obligation commercial quote.
            </h3>
            <p className="text-sm text-gray-300">
              Provide your facility square footage and preferred frequency. We will evaluate your requirements and suggest an optimized janitorial schedule.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={onRequestQuote}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-xl transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B65]"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
