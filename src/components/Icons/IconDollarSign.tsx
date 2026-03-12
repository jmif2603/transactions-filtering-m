interface IconDollarSignProps {
  size?: number;
  color?: string;
}

const IconDollarSign = ({
  size = 16,
  color = '#0f2b4d',
}: IconDollarSignProps) => (
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
    {/* Vertical line through */}
    <path d="M8 1v14" />
    {/* S curve */}
    <path d="M11 4.5c0-1.5-1.5-2.5-3-2.5S5 3 5 4.5c0 3 6 1.5 6 4.5 0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5" />
  </svg>
);

export default IconDollarSign;