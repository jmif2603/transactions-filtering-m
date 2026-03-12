// Toggle.tsx
interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

const Toggle = ({ enabled, onChange, disabled = false }: ToggleProps) => (
  <button
    onClick={() => !disabled && onChange(!enabled)}
    className={`shrink-0 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    style={{ 
      width: '48px', 
      height: '24px', 
      borderRadius: '15px',
      backgroundColor: enabled && !disabled ? '#1d7883' : '#cfd6de',
      position: 'relative',
      border: 'none',
      padding: 0,
    }}
  >
    <div 
      style={{
        position: 'absolute',
        top: '3px',
        left: enabled && !disabled ? '27px' : '3px',
        width: '18px',
        height: '18px',
        backgroundColor: 'white',
        borderRadius: '50%',
        transition: 'left 0.2s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}
    />
  </button>
);

export default Toggle;