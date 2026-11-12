import { 
  CommercialService, 
  CommercialFacility, 
  RegionalHub, 
  Testimonial 
} from '../types';

export const COMPANY_INFO = {
  name: 'Office Express Janitorial Services, Inc.',
  shortName: 'Office Express Janitorial',
  tagline: 'Professional Spaces. Exceptional Standards.',
  experienceYears: '30+',
  establishedYear: '1995',
  contactEmail: 'info@officeexpressjanitorial.com',
  conceptDisclosure: 'Independent website redesign concept by S.Mideros Agency.',
  primaryRegions: 'Oklahoma & Northwest Arkansas',
};

export const REGIONAL_HUBS: RegionalHub[] = [
  {
    id: 'tulsa',
    city: 'Tulsa',
    state: 'OK',
    label: 'Tulsa, Oklahoma',
    isHeadquarters: true,
    address: '7181 S. Braden Avenue, Tulsa, OK 74136',
    phone: '(918) 392-4982',
    phoneRaw: '9183924982',
    coverageZones: ['Tulsa Metro', 'Broken Arrow', 'Jenks', 'Owasso', 'Bixby', 'Sand Springs', 'Sapulpa'],
  },
  {
    id: 'okc',
    city: 'Oklahoma City',
    state: 'OK',
    label: 'Oklahoma City, Oklahoma',
    address: '9641 N Council Rd, Suite 1, Oklahoma City, OK 73162',
    phone: '(405) 592-3599',
    phoneRaw: '4055923599',
    coverageZones: ['OKC Metro', 'Edmond', 'Norman', 'Moore', 'Yukon', 'Mustang', 'Midwest City'],
  },
  {
    id: 'bentonville',
    city: 'Bentonville',
    state: 'AR',
    label: 'Bentonville, Arkansas',
    address: '900 SE 5th St, Suite 22, Bentonville, AR 72712',
    phone: '(479) 335-1977',
    phoneRaw: '4793351977',
    coverageZones: ['Bentonville', 'Rogers', 'Springdale', 'Fayetteville', 'Centerton', 'Bella Vista'],
  },
];

export const COMMERCIAL_SERVICES: CommercialService[] = [
  {
    id: 'general_commercial',
    title: 'General Commercial Cleaning',
    tagline: 'Customized daily and weekly routine cleaning for high-performance workplaces.',
    shortDesc: 'Systematic cleaning solutions adapted to commercial environments, workflow schedules, and operational requirements.',
    fullDesc: 'Comprehensive janitorial services structured around your facility layout. Includes meticulous workstation dusting, trash and recycling disposal, restroom disinfection and restocking, conference room preparation, and spotless common area upkeep.',
    image: '/images/hero-commercial-office.webp',
    facilityApplications: ['Corporate Suites', 'Professional Offices', 'Multi-Tenant Commercial Centers', 'Administrative Hubs'],
    features: [
      'Workstation, desk, and executive office dusting',
      'Restroom sanitation, surface disinfection, and consumable restocking',
      'Trash removal, liner replacement, and recycling sorting',
      'High-touch surface and entryway glass cleaning',
      'Breakroom and kitchenette surface maintenance',
    ],
  },
  {
    id: 'floor_scrubbing_waxing',
    title: 'Floor Scrubbing and Waxing',
    tagline: 'Restorative hard-surface floor care designed to protect and revitalize high-traffic areas.',
    shortDesc: 'Professional commercial floor-care services based on the company’s published specialty, restoring durability and high-gloss presentation.',
    fullDesc: 'Commercial hard floors endure heavy foot traffic and daily wear. Our dedicated floor-care specialists provide machine scrubbing, stripping of aged finishes, precision recoating, and high-speed burnishing for VCT, linoleum, and sealed commercial surfaces.',
    image: '/images/service-floor-scrubbing.webp',
    facilityApplications: ['High-Traffic Corridors', 'Commercial Building Lobbies', 'Retail Sales Floors', 'Healthcare & Office Hallways'],
    features: [
      'Rotary machine deep scrubbing to remove embedded soil',
      'Complete strip and wax for dull or worn commercial surfaces',
      'Multi-coat high-durability wax application',
      'High-speed burnishing for reflective mirror gloss',
      'Preventive scheduled maintenance cycles',
    ],
  },
  {
    id: 'carpet_cleaning',
    title: 'Commercial Carpet Cleaning',
    tagline: 'Deep hot-water extraction that preserves flooring investments and indoor freshness.',
    shortDesc: 'Targeted commercial carpet extraction removing deep-set dirt, traffic-lane stains, and workplace allergens.',
    fullDesc: 'Regular vacuuming only addresses surface debris. Our commercial extraction methods break down stubborn grease, beverage spills, and ground-in particles in high-traffic hallways and conference rooms, prolonging carpet lifespan without disruptive drying delays.',
    image: '/images/service-carpet-cleaning.webp',
    facilityApplications: ['Boardrooms & Executive Suites', 'Call Centers', 'Office Corridors', 'Hospitality & Retail Areas'],
    features: [
      'Commercial hot-water extraction and soil rinsing',
      'Targeted stain pre-treatment for coffee and heavy walk-off paths',
      'Deodorizing treatments for improved indoor air quality',
      'Fast-drying protocols for minimal office downtime',
      'Custom quarterly or bi-annual maintenance plans',
    ],
  },
  {
    id: 'sanitizing',
    title: 'Targeted Commercial Sanitizing',
    tagline: 'Rigorous hygiene protocols focused on high-touch touchpoints and shared spaces.',
    shortDesc: 'Sanitizing services as described on the original website, creating healthier environments for employees and visitors.',
    fullDesc: 'Commercial facilities require proactive infection prevention and hygienic cleanliness. We apply hospital-grade sanitizing agents to shared touchpoints including door hardware, elevator panels, conference tables, handrails, and shared equipment.',
    image: '/images/service-commercial-sanitizing.webp',
    facilityApplications: ['Corporate Conference Centers', 'Shared Restrooms', 'Breakrooms & Cafeterias', 'High-Density Workstations'],
    features: [
      'Frequent disinfection of primary touchpoints and handles',
      'Deep restroom hygiene and surface anti-microbial treatment',
      'Compliant commercial-grade cleaning agents',
      'Targeted protocols during peak seasonal health concerns',
      'Flexible after-hours scheduling',
    ],
  },
];

export const COMMERCIAL_FACILITIES: CommercialFacility[] = [
  {
    id: 'office',
    title: 'Corporate & Professional Offices',
    description: 'Corporate headquarters, law practices, financial institutions, and multi-tenant office parks requiring pristine client-facing presentation and uninterrupted productivity.',
    cleaningPriorities: [
      'Pristine reception and executive boardroom presentation',
      'Dust-free electronics, monitors, and workstation surfaces',
      'Impeccable restroom cleanliness and hygiene replenishment',
      'Streak-free interior glass partitions and entryway doors',
    ],
    recommendedFrequencies: '3 to 5 times per week (typically evening / night shifts)',
    schedulingConsiderations: 'Services performed after standard business hours (between 6:00 PM and 6:00 AM) or tailored weekend schedules to ensure zero disruption to team operations.',
    image: '/images/hero-commercial-office.webp',
  },
  {
    id: 'warehouse',
    title: 'Warehouses & Logistics Centers',
    description: 'Industrial storage centers, distribution hubs, shipping terminals, and fulfillment operations where high dust, heavy machinery, and continuous movement demand specialized care.',
    cleaningPriorities: [
      'Sealed concrete floor scrubbing and debris sweep',
      'High-traffic breakroom and locker room sanitization',
      'Dispatch counter and supervisor office upkeep',
      'Removal of industrial dust accumulation on non-pallet surfaces',
    ],
    recommendedFrequencies: '1 to 5 times per week based on shift volume',
    schedulingConsiderations: 'Flexible cleaning times aligned with shift changes, non-operational windows, or early mornings to accommodate active forklift and freight traffic safely.',
    image: '/images/facility-warehouse-logistics.webp',
  },
  {
    id: 'retail',
    title: 'Retail Locations & Commercial Showrooms',
    description: 'Customer-centric retail storefronts, furniture showrooms, branch offices, and shopping plazas where first impressions directly influence shopper confidence and brand value.',
    cleaningPriorities: [
      'Gleaming, spotless sales floors and customer walkways',
      'Flawless storefront glass, entrance doors, and display cases',
      'Customer restroom sanitation and continuous restocking',
      'Cash wrap, POS counters, and fitting room cleanliness',
    ],
    recommendedFrequencies: 'Daily or multiple times weekly prior to retail opening',
    schedulingConsiderations: 'Pre-opening early morning or post-closing evening janitorial windows ensure pristine presentation before the first customer walks through the door.',
    image: '/images/service-floor-scrubbing.webp',
  },
];

export const AUTHENTIC_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Office Express has handled our facility cleaning for more than six years with remarkable consistency. When we need specialized floor maintenance or an emergency touch-up before an executive board visit, their team responds immediately without hesitation.',
    highlight: '6+ Years of Dependable Commercial Partnership',
    clientContext: 'Commercial Client & Facility Administrator',
    relationshipDuration: '6+ Years Client',
    focusArea: 'Consistency & Responsiveness',
  },
  {
    id: 't2',
    quote: 'What stands out most is their management approach. They conduct periodic quality reviews to inspect the work and confirm our expectations are being met. Any custom request or scheduling change is handled promptly and professionally.',
    highlight: 'Periodic Quality Reviews & Proactive Management',
    clientContext: 'Corporate Operations Manager',
    relationshipDuration: 'Long-term Contract',
    focusArea: 'Quality Assurance',
  },
  {
    id: 't3',
    quote: 'Switching our commercial janitorial service to Office Express gave us peace of mind. The floors look immaculate every morning, the common areas are thoroughly sanitized, and the crew respects our building security protocols.',
    highlight: 'Immaculate Morning Presentation & Building Security',
    clientContext: 'Regional Property & Office Manager',
    relationshipDuration: 'Multi-Tenant Commercial Facility',
    focusArea: 'Facility Standards',
  },
];

export const SERVICE_AREAS_LIST = [
  {
    region: 'Greater Tulsa & Green Country',
    state: 'Oklahoma',
    hubCity: 'Tulsa (HQ)',
    phone: '(918) 392-4982',
    cities: ['Tulsa', 'Broken Arrow', 'Jenks', 'Owasso', 'Bixby', 'Sand Springs', 'Sapulpa', 'Glenpool', 'Claremore', 'Catoosa'],
    zipCodes: ['74136', '74103', '74104', '74105', '74114', '74119', '74120', '74133', '74134', '74135', '74137', '74012', '74011', '74037', '74055', '74008'],
  },
  {
    region: 'Oklahoma City Metropolitan Area',
    state: 'Oklahoma',
    hubCity: 'Oklahoma City',
    phone: '(405) 592-3599',
    cities: ['Oklahoma City', 'Edmond', 'Norman', 'Moore', 'Yukon', 'Mustang', 'Midwest City', 'Del City', 'Bethany', 'Warr Acres'],
    zipCodes: ['73162', '73102', '73103', '73106', '73112', '73116', '73118', '73120', '73134', '73142', '73013', '73034', '73071', '73072', '73099', '73160'],
  },
  {
    region: 'Northwest Arkansas Corridor',
    state: 'Arkansas',
    hubCity: 'Bentonville',
    phone: '(479) 335-1977',
    cities: ['Bentonville', 'Rogers', 'Springdale', 'Fayetteville', 'Centerton', 'Bella Vista', 'Lowell', 'Silvan Springs'],
    zipCodes: ['72712', '72713', '72756', '72758', '72762', '72764', '72701', '72703', '72704', '72719', '72714', '72745'],
  },
];
