interface IconFilterProps {
  size?: number;
  color?: string;
}

const IconFilter = ({
  size = 24,
  color = '#0f2b4d',
}: IconFilterProps) => (
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
    {/* Funnel shape */}
    <path d="M3 4h18l-7 8v6l-4 2V12L3 4z" />
  </svg>
);

export default IconFilter;