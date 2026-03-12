interface IconArrowRightProps {
  size?: number;
  color?: string;
}

const IconArrowRight = ({
  size = 24,
  color = '#0f2b4d',
}: IconArrowRightProps) => (
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
    {/* Horizontal line */}
    <path d="M5 12h14" />
    {/* Arrow head */}
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default IconArrowRight;