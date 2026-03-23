import bellSvg from '../assets/icon-bell.svg';
import helpCircleSvg from '../assets/icon-help-circle.svg';
import userSvg from '../assets/icon-user.svg';
import creditCardSvg from '../assets/icon-credit-card.svg';
import receiptSmallSvg from '../assets/icon-receipt.svg';
import investSvg from '../assets/icon-invest.svg';
import walletSvg from '../assets/icon-wallet.svg';
import homeSvg from '../assets/icon-home.svg';
import usersSvg from '../assets/icon-users.svg';
import benefitsSvg from '../assets/icon-benefits.svg';
import reportsSvg from '../assets/icon-reports.svg';
import settingsSvg from '../assets/icon-settings.svg';
import organizationsSvg from '../assets/icon-organizations.svg';
import bankingSvg from '../assets/icon-banking.svg';
import identitySvg from '../assets/icon-identity.svg';
import iconLogInSvg from '../assets/IconLogIn.svg';
import iconLogOutSvg from '../assets/IconLogOut.svg';
import iconCheckCircleSvg from '../assets/IconCheckCircle.svg';
import iconWaitingSvg from '../assets/IconWaiting.svg';

// ============ Shared prop types ============

interface IconProps {
  size?: number;
  color?: string;
}

interface IconAssetProps {
  size?: number;
}

// ============ Icons ============

export const IconArrowRight = ({ size = 24, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const IconPlus = ({ size = 16, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 3v10" />
    <path d="M3 8h10" />
  </svg>
);

export const IconDollarSign = ({ size = 16, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 1v14" />
    <path d="M11 4.5c0-1.5-1.5-2.5-3-2.5S5 3 5 4.5c0 3 6 1.5 6 4.5 0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5" />
  </svg>
);

export const IconBarChart = ({ size = 16, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 13V10" />
    <path d="M8 13V7" />
    <path d="M12 13V3" />
  </svg>
);

export const IconEditPencil = ({ size = 16, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11.33 2.67a2 2 0 0 1 2.83 2.83L5.5 14.17 2 15l.83-3.5L11.33 2.67z" />
  </svg>
);

export const IconSearch = ({ size = 24, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

export const IconReceipt = ({ size = 24, color = '#0F2B4D' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.25 16C15.5384 16 15.813 16.1248 16.0029 16.3418L17.3857 17.9229C17.7465 17.7719 18 17.4156 18 17V3C18 2.44772 17.5523 2 17 2H3C2.44772 2 2 2.44772 2 3V17C2 17.4152 2.25295 17.7717 2.61328 17.9229L3.99707 16.3418L4.07227 16.2646C4.25595 16.0953 4.49761 16 4.75 16C5.03836 16 5.31304 16.1248 5.50293 16.3418L6.5 17.4805L7.49707 16.3418L7.57227 16.2646C7.75595 16.0953 7.99761 16 8.25 16C8.53836 16 8.81304 16.1248 9.00293 16.3418L10 17.4805L10.9971 16.3418L11.0723 16.2646C11.2559 16.0953 11.4976 16 11.75 16C12.0384 16 12.313 16.1248 12.5029 16.3418L13.5 17.4805L14.4971 16.3418L14.5723 16.2646C14.7559 16.0953 14.9976 16 15.25 16ZM20 17C20 18.6569 18.6569 20 17 20C16.7116 20 16.437 19.8752 16.2471 19.6582L15.25 18.5186L14.2529 19.6582C14.063 19.8752 13.7884 20 13.5 20C13.2116 20 12.937 19.8752 12.7471 19.6582L11.75 18.5186L10.7529 19.6582C10.563 19.8752 10.2884 20 10 20C9.71164 20 9.43696 19.8752 9.24707 19.6582L8.25 18.5186L7.25293 19.6582C7.06304 19.8752 6.78836 20 6.5 20C6.21164 20 5.93696 19.8752 5.74707 19.6582L4.75 18.5186L3.75293 19.6582C3.56304 19.8752 3.28836 20 3 20C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17Z" fill={color} />
    <path d="M15 5C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H15Z" fill={color} />
    <path d="M15 10C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H5C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H15Z" fill={color} />
  </svg>
);

export const IconChevronRight = ({ size = 16, color = '#0f2b4d' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4l4 4-4 4" />
  </svg>
);

// ============ Asset-based icons (SVG files from ./src/assets) ============

export const IconBell = ({ size = 16 }: IconAssetProps) => (
  <img src={bellSvg} width={size} height={size} alt="bell" />
);

export const IconHelpCircle = ({ size = 24 }: IconAssetProps) => (
  <img src={helpCircleSvg} width={size} height={size} alt="help circle" />
);

export const IconUser = ({ size = 16 }: IconAssetProps) => (
  <img src={userSvg} width={size} height={size} alt="user" />
);

export const IconCreditCard = ({ size = 16 }: IconAssetProps) => (
  <img src={creditCardSvg} width={size} height={size} alt="credit card" />
);

export const IconReceiptSmall = ({ size = 16 }: IconAssetProps) => (
  <img src={receiptSmallSvg} width={size} height={size} alt="receipt" />
);

export const IconInvest = ({ size = 24 }: IconAssetProps) => (
  <img src={investSvg} width={size} height={size} alt="invest" />
);

export const IconWallet = ({ size = 24 }: IconAssetProps) => (
  <img src={walletSvg} width={size} height={size} alt="wallet" />
);

export const IconMembers = ({ size = 16 }: IconAssetProps) => (
  <img src={usersSvg} width={size} height={size} alt="members" />
);

export const IconBenefits = ({ size = 16 }: IconAssetProps) => (
  <img src={benefitsSvg} width={size} height={size} alt="benefits" />
);

export const IconReports = ({ size = 16 }: IconAssetProps) => (
  <img src={reportsSvg} width={size} height={size} alt="reports" />
);

export const IconSettings = ({ size = 16 }: IconAssetProps) => (
  <img src={settingsSvg} width={size} height={size} alt="settings" />
);

export const IconOrganizations = ({ size = 16 }: IconAssetProps) => (
  <img src={organizationsSvg} width={size} height={size} alt="organizations" />
);

export const IconBanking = ({ size = 16 }: IconAssetProps) => (
  <img src={bankingSvg} width={size} height={size} alt="banking" />
);

export const IconIdentity = ({ size = 16 }: IconAssetProps) => (
  <img src={identitySvg} width={size} height={size} alt="identity" />
);

export const IconBenefitBuilder = ({ size = 16 }: IconAssetProps) => (
  <img src={benefitsSvg} width={size} height={size} alt="benefit builder" />
);

export const IconHome = ({ size = 16 }: IconAssetProps) => (
  <img src={homeSvg} width={size} height={size} alt="home" />
);

export const IconCalendar = ({ size = 16, color = '#60758f' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke={color} strokeWidth="1.2" />
    <path d="M1.5 6h13" stroke={color} strokeWidth="1.2" />
    <path d="M5 1v3M11 1v3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <rect x="4" y="8.5" width="2" height="2" rx="0.5" fill={color} />
    <rect x="7" y="8.5" width="2" height="2" rx="0.5" fill={color} />
    <rect x="10" y="8.5" width="2" height="2" rx="0.5" fill={color} />
    <rect x="4" y="11.5" width="2" height="2" rx="0.5" fill={color} />
    <rect x="7" y="11.5" width="2" height="2" rx="0.5" fill={color} />
  </svg>
);

interface IconFilterProps extends IconProps {
  selected?: boolean;
}

export const IconLogIn = ({ size = 16 }: IconAssetProps) => (
  <img src={iconLogInSvg} width={size} height={size} alt="log in" />
);

export const IconLogOut = ({ size = 16 }: IconAssetProps) => (
  <img src={iconLogOutSvg} width={size} height={size} alt="log out" />
);

export const IconCheckCircle = ({ size = 16 }: IconAssetProps) => (
  <img src={iconCheckCircleSvg} width={size} height={size} alt="check circle" />
);

export const IconWaiting = ({ size = 24 }: IconAssetProps) => (
  <img src={iconWaitingSvg} width={size} height={size} alt="waiting" />
);

export const IconFilter = ({ size = 24, color = '#60758F', selected = false }: IconFilterProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.0001 2C22.3894 2 22.7434 2.22594 22.9073 2.5791C23.0711 2.93219 23.015 3.34825 22.7637 3.64551L15.0001 12.8252V21C15.0001 21.3466 14.8203 21.6684 14.5255 21.8506C14.2307 22.0327 13.8627 22.0495 13.5528 21.8945L9.5528 19.8945C9.21401 19.7251 9.00006 19.3788 9.00006 19V12.8252L1.23639 3.64551C0.985128 3.34825 0.929025 2.93219 1.09284 2.5791C1.2567 2.22594 1.61074 2 2.00006 2H22.0001ZM10.7637 11.8145C10.9163 11.9949 11.0001 12.2236 11.0001 12.46V18.3818L13.0001 19.3818V12.46C13.0001 12.2236 13.0838 11.9949 13.2364 11.8145L19.8448 4H4.15534L10.7637 11.8145Z" fill={color} />
    {selected && (
      <path d="M10.7637 11.8125C10.9162 11.993 11 12.2217 11 12.458V18.3799L13 19.3799V12.458C13 12.2217 13.0838 11.993 13.2363 11.8125L19.8447 3.99805H4.15527L10.7637 11.8125Z" fill="#1E7784" fillOpacity="0.3" />
    )}
  </svg>
);
