import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, REGIONAL_HUBS } from '../data/commercialData';

interface ContactSectionProps {
  onRequestQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestQuote }) => {
  const [inquiryType, setInquiryType] = useState<'quote' | 'general'>('general');
  const [generalFormData, setGeneralFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Vendor / Operations Inquiry',
    message: '',
  });
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generalFormData.name.trim() || !generalFormData.email.trim() || !generalFormData.message.trim()) return;
    setGeneralSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-[#E8F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
            Verified Contact & Communications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
            Connect With Our Regional Teams.
          </h2>
          <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
            Reach our leadership and operations staff directly through verified office numbers, regional facility addresses, or direct commercial correspondence.
          </p>
        </div>

        {/* 3 Physical Hub Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REGIONAL_HUBS.map((hub) => (
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

                <h3 className="text-2xl font-bold text-[#18252C] mb-4">
                  {hub.city}, {hub.state}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-[#18252C] mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#176B65] shrink-0 mt-0.5" />
                    <span className="text-[#66747A]">{hub.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#176B65] shrink-0" />
                    <a
                      href={`tel:${hub.phoneRaw}`}
                      className="font-mono font-semibold text-[#18252C] hover:text-[#176B65] transition-colors"
                    >
                      {hub.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#176B65] shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-[#66747A] hover:text-[#176B65] font-mono truncate"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8F1ED]">
                <a
                  href={`tel:${hub.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#176B65] hover:text-[#104F4A]"
                >
                  <span>Call {hub.city} Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Contact Hub: Choice between Quote vs General Inquiry */}
        <div className="bg-[#F8F9F6] rounded-2xl border border-[#E8F1ED] p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#18252C] mb-3">
              How May We Direct Your Inquiry?
            </h3>
            <p className="text-sm text-[#66747A] leading-relaxed">
              For facility quotes, use our unified quotation form for complete scope review. For billing questions, supplier correspondence, or general inquiries, use the direct message form below.
            </p>
          </div>

          {/* Inquiry Switcher (Interactive Filter Buttons) */}
          <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#E8F1ED] max-w-md mb-8">
            <button
              type="button"
              onClick={() => setInquiryType('general')}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                inquiryType === 'general'
                  ? 'bg-[#18252C] text-white shadow-xs'
                  : 'text-[#66747A] hover:text-[#18252C]'
              }`}
            >
              General Inquiry
            </button>
            <button
              type="button"
              onClick={onRequestQuote}
              className={`flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
                inquiryType === 'quote'
                  ? 'bg-[#176B65] text-white shadow-xs'
                  : 'text-[#176B65] hover:bg-[#E8F1ED]'
              }`}
            >
              Facility Quote
            </button>
          </div>

          {/* General Inquiry Form */}
          {inquiryType === 'general' && (
            <div className="bg-white rounded-xl border border-[#E8F1ED] p-6 sm:p-8 max-w-2xl">
              {generalSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-[#176B65] mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-[#18252C] mb-2">
                    Inquiry Draft Completed
                  </h4>
                  <p className="text-xs text-[#66747A] mb-4">
                    Demonstration Mode: In this independent redesign prototype by S.Mideros Agency, inquiries are formatted locally without sending external emails.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setGeneralSubmitted(false);
                      setGeneralFormData({ name: '', email: '', phone: '', topic: 'Vendor / Operations Inquiry', message: '' });
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#176B65] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGeneralSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#18252C] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={generalFormData.name}
                        onChange={(e) => setGeneralFormData({ ...generalFormData, name: e.target.value })}
                        placeholder="John Miller"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4E3DC] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#18252C] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={generalFormData.email}
                        onChange={(e) => setGeneralFormData({ ...generalFormData, email: e.target.value })}
                        placeholder="jmiller@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4E3DC] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#18252C] mb-1">
                        Telephone <span className="text-[#66747A] font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={generalFormData.phone}
                        onChange={(e) => setGeneralFormData({ ...generalFormData, phone: e.target.value })}
                        placeholder="(405) 555-0144"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4E3DC] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#18252C] mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={generalFormData.topic}
                        onChange={(e) => setGeneralFormData({ ...generalFormData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4E3DC] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      >
                        <option value="Vendor / Operations Inquiry">Vendor / Operations Inquiry</option>
                        <option value="Account & Billing Question">Account & Billing Question</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18252C] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={generalFormData.message}
                      onChange={(e) => setGeneralFormData({ ...generalFormData, message: e.target.value })}
                      placeholder="Please share details regarding your inquiry..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4E3DC] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-[#66747A]">
                      Direct routing to administrative staff.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#18252C] hover:bg-[#10191E] rounded-xl transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send General Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
