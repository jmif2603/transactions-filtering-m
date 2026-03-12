interface IconEditPencilProps {
  size?: number;
  color?: string;
}

const IconEditPencil = ({
  size = 16,
  color = '#0f2b4d',
}: IconEditPencilProps) => (
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
    {/* Pencil body */}
    <path d="M11.33 2.67a2 2 0 0 1 2.83 2.83L5.5 14.17 2 15l.83-3.5L11.33 2.67z" />
  </svg>
);

export default IconEditPencil;