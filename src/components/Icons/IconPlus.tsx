interface IconPlusProps {
  size?: number;
  color?: string;
}

const IconPlus = ({
  size = 16,
  color = '#0f2b4d',
}: IconPlusProps) => (
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
    {/* Vertical line */}
    <path d="M8 3v10" />
    {/* Horizontal line */}
    <path d="M3 8h10" />
  </svg>
);

export default IconPlus;