import React from 'react';

type IconType =
  | 'HSA_FSA'
  | 'HRA'
  | 'DCFSA'
  | 'LPFSA'
  | 'RemoteWork'
  | 'Transit'
  | 'LSA'
  | 'Parking'
  | 'Rewards'
  | 'Funding';

interface BenefitIconProps {
  icon: IconType;
  size?: number;
  color?: string;
}

const BenefitIcon = ({
  icon,
  size = 32,
  color = '#0F2B4D',
}: BenefitIconProps) => {
  const icons: Record<IconType, React.ReactNode> = {
    // HSA/FSA - Phone with dollar sign
    HSA_FSA: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6a2 2 0 012-2h12a2 2 0 012 2v20a2 2 0 01-2 2H10a2 2 0 01-2-2V6z" />
        <path d="M16 12v8M13 14.5c0-1.38 1.34-2.5 3-2.5s3 1.12 3 2.5c0 1.38-1.34 2.5-3 2.5s-3 1.12-3 2.5c0 1.38 1.34 2.5 3 2.5" />
      </svg>
    ),

    // HRA - Hand with dollar
    HRA: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20c0-4 3-6 7-6h4c2 0 4-1 4-3s-2-3-4-3h-3" />
        <circle cx="17" cy="8" r="4" />
        <path d="M17 4v1M17 11v1" />
        <path d="M4 24c2-2 5-4 10-4s8 2 10 4v4H4v-4z" />
      </svg>
    ),

    // DCFSA - Person with heart (childcare)
    DCFSA: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 28v-4a6 6 0 016-6h0" />
        <path d="M23 14.5c-1.5-1.5-4-1.5-5 .5-.5-2 1-3.5 2.5-3.5s2.5 1 2.5 3z" />
        <path d="M23 14.5c1.5-1.5 4-1.5 5 .5.5-2-1-3.5-2.5-3.5s-2.5 1-2.5 3z" />
        <path d="M23 15l-4 4 4 4 4-4-4-4z" />
      </svg>
    ),

    // LPFSA - Heart
    LPFSA: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28s-9-6-9-13c0-4 3-7 7-7a7 7 0 012 .3A7 7 0 0118 8c4 0 7 3 7 7 0 7-9 13-9 13z" />
      </svg>
    ),

    // Remote Work - Monitor
    RemoteWork: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="16" rx="2" />
        <path d="M12 26h8M16 22v4" />
      </svg>
    ),

    // Transit - Bus
    Transit: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="20" height="20" rx="3" />
        <path d="M6 16h20M10 12h12" />
        <circle cx="10" cy="20" r="2" />
        <circle cx="22" cy="20" r="2" />
        <path d="M10 24v3M22 24v3" />
      </svg>
    ),

    // LSA - Calendar/Grid
    LSA: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="22" rx="2" />
        <path d="M4 12h24M10 6V3M22 6V3" />
        <rect x="8" y="16" width="4" height="4" />
        <rect x="14" y="16" width="4" height="4" />
        <rect x="20" y="16" width="4" height="4" />
        <rect x="8" y="22" width="4" height="4" />
        <rect x="14" y="22" width="4" height="4" />
      </svg>
    ),

    // Parking - P sign
    Parking: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="3" />
        <path d="M12 24V8h6a5 5 0 010 10h-6" />
      </svg>
    ),

    // Rewards - Gift
    Rewards: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="12" width="24" height="16" rx="2" />
        <rect x="6" y="8" width="20" height="4" rx="1" />
        <path d="M16 8v20" />
        <path d="M16 8c-2-3-6-4-6 0h6M16 8c2-3 6-4 6 0h-6" />
      </svg>
    ),

    // Funding - Dollar sign
    Funding: (
      <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v24" />
        <path d="M22 10c0-2.2-2.7-4-6-4s-6 1.8-6 4c0 4 12 2 12 8 0 2.2-2.7 4-6 4s-6-1.8-6-4" />
      </svg>
    ),
  };

  const iconEl = icons[icon];
  const sizedIcon = React.isValidElement(iconEl)
    ? React.cloneElement(iconEl as React.ReactElement<{ width?: number; height?: number }>, { width: size, height: size })
    : iconEl;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {sizedIcon}
    </div>
  );
};

export default BenefitIcon;