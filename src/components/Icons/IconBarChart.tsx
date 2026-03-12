interface IconBarChartProps {
  size?: number;
  color?: string;
}

const IconBarChart = ({
  size = 16,
  color = '#0f2b4d',
}: IconBarChartProps) => (
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
    {/* Left bar (shortest) */}
    <path d="M4 13V10" />
    {/* Middle bar (medium) */}
    <path d="M8 13V7" />
    {/* Right bar (tallest) */}
    <path d="M12 13V3" />
  </svg>
);

export default IconBarChart;