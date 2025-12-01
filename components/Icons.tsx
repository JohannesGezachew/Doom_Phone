import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
}

// --- System Icons ---

export const Shield: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export const Star: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const XCircle: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const X: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Brain: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4z" />
  </svg>
);

export const Skull: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2a7 7 0 0 0-7 7v3c0 1.5 1 3 2.5 3.5V18h9v-2.5c1.5-.5 2.5-2 2.5-3.5V9a7 7 0 0 0-7-7z" />
    <path d="M9 10h.01" />
    <path d="M15 10h.01" />
    <path d="M9 22v-4h6v4" />
  </svg>
);

export const Moon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const Sun: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Lock: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const MapPin: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Battery: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Check: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className={className} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Signal: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

export const Ban: React.FC<IconProps> = ({ className, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.93 4.93 14.14 14.14" />
  </svg>
);

// --- Realistic App Icons (Images) ---

export const AppPhone: React.FC<any> = ({ className, ...props }) => (
  <img 
    src="https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000" 
    alt="Phone"
    className={`${className} object-contain rounded-[14px]`}
    {...props}
  />
);

export const AppMessage: React.FC<any> = ({ className, ...props }) => (
  <img 
    src="https://img.icons8.com/?size=100&id=J6pBf3G6DZGM&format=png&color=000000" 
    alt="Messages"
    className={`${className} object-contain rounded-[14px]`}
    {...props}
  />
);

export const AppCalculator: React.FC<any> = ({ className, ...props }) => (
  <img 
    src="https://img.icons8.com/?size=100&id=qrOXrfUDKkOX&format=png&color=000000" 
    alt="Calculator"
    className={`${className} object-contain rounded-[14px]`}
    {...props}
  />
);

// Notion Icon - Using raw SVG path for perfect scaling and contrast on black background
export const AppNotion: React.FC<any> = ({ className, ...props }) => (
  <div className={`${className} bg-black rounded-[14px] flex items-center justify-center`} {...props}>
      <svg viewBox="0 0 24 24" fill="white" className="w-[85%] h-[85%]">
        <path d="M4.021 21.996c-.464.096-1.428.161-1.428-1.077V6.015c0-1.03.655-1.503 1.536-1.536h3.633c.697 0 1.255.43 1.58.977l8.28 12.502V6.155c0-1.116.634-1.631 1.631-1.631.902 0 1.76.086 1.76 1.052v15.222c0 1.137-.772 1.502-1.653 1.535h-3.696c-.72 0-1.127-.472-1.439-.902l-8.61-12.878v11.75c0 1.127-.644 1.58-1.595 1.693zM1.861 6.305c0-1.299.88-2.266 2.3-2.266h2.72c1.373 0 2.221.902 2.221 2.266v.838c0 1.341-.838 2.221-2.2 2.221H4.116c-1.374 0-2.255-.902-2.255-2.265V6.305z"/>
      </svg>
  </div>
);

export const AppSpotify: React.FC<any> = ({ className, ...props }) => (
  <img 
    src="https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000" 
    alt="Spotify"
    className={`${className} object-contain rounded-[14px]`}
    {...props}
  />
);

// Fixed Google Maps to use correct Maps icon asset
export const AppGoogleMaps: React.FC<any> = ({ className, ...props }) => (
  <div className={`${className} bg-white rounded-[14px] flex items-center justify-center p-2`} {...props}>
      <img 
        src="https://img.icons8.com/color/480/google-maps-new.png" 
        alt="Google Maps"
        className="w-full h-full object-contain"
      />
  </div>
);