export type FacilityType = 'office' | 'warehouse' | 'retail' | 'other';

export type ServiceType = 
  | 'general_commercial' 
  | 'floor_scrubbing_waxing' 
  | 'carpet_cleaning' 
  | 'sanitizing' 
  | 'multiple_services';

export type CleaningFrequency = 'daily' | 'weekly' | 'monthly' | 'other_not_sure';

export interface CommercialService {
  id: ServiceType;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  facilityApplications: string[];
  features: string[];
}

export interface CommercialFacility {
  id: FacilityType;
  title: string;
  description: string;
  cleaningPriorities: string[];
  recommendedFrequencies: string;
  schedulingConsiderations: string;
  image: string;
}

export interface RegionalHub {
  id: string;
  city: string;
  state: 'OK' | 'AR';
  label: string;
  isHeadquarters?: boolean;
  address: string;
  phone: string;
  phoneRaw: string;
  coverageZones: string[];
}

export interface QuoteFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  cityOrZip: string;
  facilityType: FacilityType;
  approxSqFt: string;
  requestedService: ServiceType;
  desiredFrequency: CleaningFrequency;
  specialNotes: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  highlight: string;
  clientContext: string;
  relationshipDuration?: string;
  focusArea: string;
}
