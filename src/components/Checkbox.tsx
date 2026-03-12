interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  focused?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  focused = false,
  onChange,
}: CheckboxProps) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  // Determine the visual state
  const isChecked = checked && !indeterminate;
  const isIndeterminate = indeterminate;
  const isUnchecked = !checked && !indeterminate;

  // Colors from Figma design tokens
  const colors = {
    primary: '#1d7883',
    contrast: '#ffffff',
    border: '#60758f',
    disabled: '#e2e6eb',
    disabledText: '#b8c0ca',
    focusRing: 'rgba(29, 120, 131, 0.2)',
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        background: 'transparent',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
      }}
    >
      {/* Focus ring */}
      {focused && !disabled && (
        <div
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: colors.focusRing,
          }}
        />
      )}

      {/* Checkbox box */}
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          border: `1.5px solid ${
            disabled
              ? colors.disabled
              : isChecked || isIndeterminate
              ? colors.primary
              : colors.border
          }`,
          backgroundColor:
            isChecked || isIndeterminate
              ? disabled
                ? colors.disabled
                : colors.primary
              : colors.contrast,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.15s ease',
        }}
      >
        {/* Checkmark icon */}
        {isChecked && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            style={{ position: 'relative', zIndex: 1 }}
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke={disabled ? colors.disabledText : colors.contrast}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {/* Indeterminate icon (minus) */}
        {isIndeterminate && (
          <div
            style={{
              width: '12px',
              height: '2px',
              backgroundColor: disabled ? colors.disabledText : colors.contrast,
              borderRadius: '1px',
            }}
          />
        )}
      </div>
    </button>
  );
};

export default Checkbox;