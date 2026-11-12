import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteSection } from './QuoteSection';
import { FacilityType, ServiceType } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
  initialFacility?: FacilityType;
  initialLocation?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialFacility,
  initialLocation,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-heading"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#18252C]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-[#E8F1ED]">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8F9F6] border-b border-[#E8F1ED]">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#176B65]">
              Commercial Quotation System
            </span>
            <h3 id="modal-quote-heading" className="text-lg font-bold text-[#18252C]">
              Request Your Tailored Cleaning Proposal
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#66747A] hover:text-[#18252C] rounded-lg hover:bg-[#E8F1ED] transition-colors focus-visible:outline-2 focus-visible:outline-[#176B65]"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="max-h-[80vh] overflow-y-auto p-2 sm:p-4">
          <QuoteSection
            isModal={true}
            onCloseModal={onClose}
            initialService={initialService}
            initialFacility={initialFacility}
            initialLocation={initialLocation}
          />
        </div>

      </div>
    </div>
  );
};
