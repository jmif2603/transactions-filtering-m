interface RadioButtonProps {
  selected?: boolean;
  disabled?: boolean;
  focused?: boolean;
  onPress?: () => void;
}

const RadioButton = ({
  selected = false,
  disabled = false,
  focused = false,
  onPress,
}: RadioButtonProps) => {
  // Colors from Figma design tokens
  const colors = {
    primary: '#1d7883',
    border: '#60758f',
    disabled: '#e2e6eb',
    disabledInner: '#b8c0ca',
    focusRing: 'rgba(29, 120, 131, 0.2)',
    white: '#ffffff',
  };

  const handleClick = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        padding: 0,
      }}
    >
      {/* Focus ring */}
      {focused && !disabled && (
        <div
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: colors.focusRing,
          }}
        />
      )}

      {/* Outer circle */}
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          border: `1.5px solid ${
            disabled
              ? colors.disabled
              : selected
              ? colors.primary
              : colors.border
          }`,
          backgroundColor: colors.white,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Inner circle (selected state) */}
        {selected && (
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: disabled ? colors.disabledInner : colors.primary,
            }}
          />
        )}
      </div>
    </button>
  );
};

export default RadioButton;