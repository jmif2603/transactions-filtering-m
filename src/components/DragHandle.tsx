interface DragHandleProps {
  /** Optional width override (defaults to 100%) */
  width?: number | string;
}

const DragHandle = ({ width = '100%' }: DragHandleProps) => {
  // Colors from Figma design tokens
  const colors = {
    background: '#ffffff',
    handle: '#b8c0ca', // Typography/Disabled token
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width,
        backgroundColor: colors.background,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      {/* Drag indicator pill */}
      <div
        style={{
          width: 43,
          height: 5,
          backgroundColor: colors.handle,
          borderRadius: 5,
        }}
      />
    </div>
  );
};

export default DragHandle;

// Usage examples:
// <DragHandle />
// <DragHandle width={393} />