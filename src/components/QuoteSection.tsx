import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Calendar, 
  MapPin, 
  RotateCcw, 
  Copy, 
  Info,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { FacilityType, ServiceType, CleaningFrequency, QuoteFormData } from '../types';

interface QuoteSectionProps {
  initialService?: ServiceType;
  initialFacility?: FacilityType;
  initialLocation?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialService,
  initialFacility,
  initialLocation,
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    cityOrZip: initialLocation || '',
    facilityType: initialFacility || 'office',
    approxSqFt: '',
    requestedService: initialService || 'general_commercial',
    desiredFrequency: 'weekly',
    specialNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, requestedService: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialFacility) {
      setFormData(prev => ({ ...prev, facilityType: initialFacility }));
    }
  }, [initialFacility]);

  useEffect(() => {
    if (initialLocation) {
      setFormData(prev => ({ ...prev, cityOrZip: initialLocation }));
    }
  }, [initialLocation]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.cityOrZip.trim()) {
      errs.cityOrZip = 'City or ZIP code is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift client processing for realistic UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      cityOrZip: '',
      facilityType: 'office',
      approxSqFt: '',
      requestedService: 'general_commercial',
      desiredFrequency: 'weekly',
      specialNotes: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const copyProposalToClipboard = () => {
    const text = `COMMERCIAL CLEANING INQUIRY DRAFT:
Client: ${formData.fullName} (${formData.businessName})
Contact: ${formData.email} | ${formData.phone || 'N/A'}
Facility Location: ${formData.cityOrZip}
Facility Type: ${formData.facilityType} (${formData.approxSqFt || 'Size not specified'} sq ft)
Requested Service: ${formData.requestedService}
Desired Frequency: ${formData.desiredFrequency}
Special Requirements: ${formData.specialNotes || 'None specified'}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="quote" className={`relative ${isModal ? 'p-0' : 'py-24 bg-[#F8F9F6]'}`}>
      <div className={isModal ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {!isModal && (
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-[#176B65] mb-2.5">
              Simplified B2B Quotation Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18252C] leading-tight mb-5 [text-wrap:balance]">
              Request a Commercial Cleaning Quote.
            </h2>
            <p className="text-base sm:text-lg text-[#66747A] leading-relaxed">
              Tell us about your facility and operational schedule. We consolidate your specifications into a single proposal without conflicting forms or surprise gaps.
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-[#E8F1ED] shadow-xl overflow-hidden">
          
          {isSubmitted ? (
            /* Submission Confirmation State */
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F1ED] flex items-center justify-center text-[#176B65] mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="text-xs font-mono font-semibold text-[#176B65] uppercase tracking-wider mb-2">
                  Quote Specifications Prepared
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#18252C] mb-4">
                  Commercial Request Formatted Successfully
                </h3>

                <p className="text-sm sm:text-base text-[#66747A] leading-relaxed mb-8">
                  Thank you, <span className="font-semibold text-[#18252C]">{formData.fullName}</span>. Your commercial facility requirements for <span className="font-semibold text-[#18252C]">{formData.businessName}</span> have been compiled into a structured cleaning overview.
                </p>

                {/* Concept Demonstration Notice */}
                <div className="bg-[#E8F1ED]/70 border border-[#D4E3DC] rounded-xl p-4 text-left mb-8">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#176B65] shrink-0 mt-0.5" />
                    <div className="text-xs text-[#18252C] leading-relaxed">
                      <p className="font-bold text-[#176B65] mb-0.5">
                        Agency Demonstration Mode
                      </p>
                      <p className="text-[#66747A]">
                        This concept demonstrates the unified B2B quotation experience designed by S.Mideros Agency for Office Express Janitorial Services, Inc. Because this is an independent design prototype, no external email server was contacted. You can inspect your generated proposal parameters below.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Formatted Proposal Summary Card */}
                <div className="bg-[#F8F9F6] border border-[#E8F1ED] rounded-xl p-6 text-left mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#66747A] mb-3">
                    Consolidated Proposal Parameters:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#66747A]">Business:</span>{' '}
                      <span className="font-semibold text-[#18252C]">{formData.businessName}</span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Contact Email:</span>{' '}
                      <span className="font-semibold text-[#18252C]">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Location:</span>{' '}
                      <span className="font-semibold text-[#18252C]">{formData.cityOrZip}</span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Phone:</span>{' '}
                      <span className="font-semibold text-[#18252C]">{formData.phone || 'Not provided'}</span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Facility Type:</span>{' '}
                      <span className="font-semibold text-[#18252C] capitalize">{formData.facilityType}</span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Approx. Area:</span>{' '}
                      <span className="font-semibold text-[#18252C]">
                        {formData.approxSqFt ? `${formData.approxSqFt} sq ft` : 'Not specified'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Service Requested:</span>{' '}
                      <span className="font-semibold text-[#18252C] capitalize">
                        {formData.requestedService.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#66747A]">Desired Cadence:</span>{' '}
                      <span className="font-semibold text-[#18252C] capitalize">{formData.desiredFrequency}</span>
                    </div>
                  </div>

                  {formData.specialNotes && (
                    <div className="mt-4 pt-3 border-t border-[#E8F1ED] text-xs">
                      <span className="text-[#66747A]">Special Requirements:</span>{' '}
                      <span className="text-[#18252C] italic">{formData.specialNotes}</span>
                    </div>
                  )}
                </div>

                {/* What Happens Next in Real Commercial Operations */}
                <div className="text-left bg-white border border-[#E8F1ED] rounded-xl p-6 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18252C] mb-3">
                    What Happens Next in Standard Commercial Protocol:
                  </h4>
                  <div className="space-y-3 text-xs text-[#66747A]">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E8F1ED] text-[#176B65] font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                      <span><strong className="text-[#18252C]">Operational Review:</strong> Facility specs and frequency requirements are analyzed by regional leadership in Tulsa, OKC, or Bentonville.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E8F1ED] text-[#176B65] font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                      <span><strong className="text-[#18252C]">On-Site Walkthrough:</strong> An in-person consultation is scheduled at your commercial building to verify high-traffic zones and security protocols.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#E8F1ED] text-[#176B65] font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                      <span><strong className="text-[#18252C]">Itemized Proposal:</strong> A transparent, customized janitorial service agreement is delivered with clear scope and scheduling terms.</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={copyProposalToClipboard}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#18252C] bg-[#E8F1ED] hover:bg-[#D4E3DC] rounded-xl transition-colors"
                  >
                    <Copy className="w-4 h-4 text-[#176B65]" />
                    <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#66747A] hover:text-[#18252C] border border-[#E8F1ED] hover:bg-[#F8F9F6] rounded-xl transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Inquiry</span>
                  </button>

                  {isModal && onCloseModal && (
                    <button
                      type="button"
                      onClick={onCloseModal}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] rounded-xl transition-colors"
                    >
                      Close Window
                    </button>
                  )}
                </div>

              </div>
            </div>
          ) : (
            /* Active Commercial Form */
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Context Strip */}
              <div className="lg:col-span-4 bg-[#18252C] text-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#E0CFA7] mb-2">
                    Commercial Inquiries
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tailored To Your Facility Footprint
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Our quotation workflow unifies contact, facility, and operational preferences into an actionable specification.
                  </p>

                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#176B65] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Commercial Privacy</p>
                        <p className="text-xs text-gray-400">Information is utilized strictly for your facility proposal.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#176B65] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Non-Disruptive Hours</p>
                        <p className="text-xs text-gray-400">Day, evening, or weekend service windows.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-[#176B65] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Direct Regional Hubs</p>
                        <p className="text-xs text-gray-400">Tulsa (HQ), Oklahoma City & Bentonville.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-xs text-gray-400">
                    Prefer direct telephone communication?
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    Tulsa: <span className="font-mono text-[#E0CFA7]">(918) 392-4982</span>
                  </p>
                </div>
              </div>

              {/* Right Form Fields */}
              <form onSubmit={handleSubmit} className="lg:col-span-8 p-8 sm:p-10">
                
                {/* Form Group 1: Contact Information */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#18252C] mb-4 flex items-center justify-between">
                    <span>1. Contact Information</span>
                    <span className="text-xs font-normal text-[#66747A] lowercase">(* required fields)</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65] ${
                          errors.fullName ? 'border-red-500' : 'border-[#D4E3DC]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Business Name *
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Pioneer Energy Logistics"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65] ${
                          errors.businessName ? 'border-red-500' : 'border-[#D4E3DC]'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.businessName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65] ${
                          errors.email ? 'border-red-500' : 'border-[#D4E3DC]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Number (Optional) */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Phone Number <span className="text-[#66747A] font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(918) 555-0199"
                        className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Group 2: Facility Information */}
                <div className="mb-8 pt-6 border-t border-[#E8F1ED]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#18252C] mb-4">
                    2. Facility Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {/* City or ZIP code */}
                    <div>
                      <label htmlFor="cityOrZip" className="block text-xs font-semibold text-[#18252C] mb-1">
                        City or ZIP Code *
                      </label>
                      <input
                        id="cityOrZip"
                        type="text"
                        required
                        value={formData.cityOrZip}
                        onChange={(e) => setFormData({ ...formData, cityOrZip: e.target.value })}
                        placeholder="e.g. Tulsa, 74136, Bentonville"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65] ${
                          errors.cityOrZip ? 'border-red-500' : 'border-[#D4E3DC]'
                        }`}
                      />
                      {errors.cityOrZip && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.cityOrZip}
                        </p>
                      )}
                    </div>

                    {/* Facility Type */}
                    <div>
                      <label htmlFor="facilityType" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Facility Type *
                      </label>
                      <select
                        id="facilityType"
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value as FacilityType })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      >
                        <option value="office">Corporate / Professional Office</option>
                        <option value="warehouse">Warehouse / Industrial</option>
                        <option value="retail">Retail Location / Showroom</option>
                        <option value="other">Other Commercial Facility</option>
                      </select>
                    </div>

                    {/* Approximate Facility Size (Optional) */}
                    <div>
                      <label htmlFor="approxSqFt" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Approx. Size <span className="text-[#66747A] font-normal">(sq ft, optional)</span>
                      </label>
                      <input
                        id="approxSqFt"
                        type="text"
                        value={formData.approxSqFt}
                        onChange={(e) => setFormData({ ...formData, approxSqFt: e.target.value })}
                        placeholder="e.g. 15,000"
                        className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      />
                    </div>
                  </div>

                  {/* Cleaning Service Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="requestedService" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Requested Cleaning Service *
                      </label>
                      <select
                        id="requestedService"
                        value={formData.requestedService}
                        onChange={(e) => setFormData({ ...formData, requestedService: e.target.value as ServiceType })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      >
                        <option value="general_commercial">General Commercial Cleaning</option>
                        <option value="floor_scrubbing_waxing">Floor Scrubbing / Waxing</option>
                        <option value="carpet_cleaning">Commercial Carpet Cleaning</option>
                        <option value="sanitizing">Targeted Commercial Sanitizing</option>
                        <option value="multiple_services">Multiple Services Combined / Full Facility</option>
                      </select>
                    </div>

                    {/* Desired Frequency */}
                    <div>
                      <label htmlFor="desiredFrequency" className="block text-xs font-semibold text-[#18252C] mb-1">
                        Desired Cleaning Frequency *
                      </label>
                      <select
                        id="desiredFrequency"
                        value={formData.desiredFrequency}
                        onChange={(e) => setFormData({ ...formData, desiredFrequency: e.target.value as CleaningFrequency })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                      >
                        <option value="daily">Daily (5 to 7 days per week)</option>
                        <option value="weekly">Weekly (1 to 3 times per week)</option>
                        <option value="monthly">Monthly / Periodic Maintenance</option>
                        <option value="other_not_sure">Other / Need Recommendation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Group 3: Additional Information */}
                <div className="mb-8 pt-6 border-t border-[#E8F1ED]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#18252C] mb-2">
                    3. Additional Information
                  </h4>
                  <label htmlFor="specialNotes" className="block text-xs text-[#66747A] mb-2">
                    Cleaning priorities, scheduling preferences, or special requirements (optional)
                  </label>
                  <textarea
                    id="specialNotes"
                    rows={3}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="e.g. Preferred after-hours access after 6:00 PM, attention to executive conference suite, VCT floor burnishing needed quarterly..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white rounded-lg border border-[#D4E3DC] text-[#18252C] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#176B65]"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#66747A]">
                    No obligation. A clear proposal is structured for your space.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#176B65] hover:bg-[#104F4A] active:scale-[0.98] rounded-xl shadow-md transition-all disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B65]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Formatting Quote...' : 'Submit Commercial Quote Request'}</span>
                  </button>
                </div>

              </form>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
