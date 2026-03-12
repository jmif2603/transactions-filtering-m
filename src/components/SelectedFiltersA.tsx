const imgXLine1 = 'http://localhost:3845/assets/d42dfc7f3c90f1467441b2ba73a986d9568ea272.svg';
const imgXLine2 = 'http://localhost:3845/assets/047e28b8f02421022c21cdbce31cf65739c094d1.svg';

interface SelectedFiltersAProps {
  groupLabel?: string;
  selectedValues: string[];
  onClear?: () => void;
}

const SelectedFiltersA = ({
  groupLabel = 'Benefit',
  selectedValues,
  onClear,
}: SelectedFiltersAProps) => {
  const displayText = (() => {
    if (selectedValues.length === 0) return '';
    if (selectedValues.length === 1) return selectedValues[0];
    if (selectedValues.length === 2) return `${selectedValues[0]}, ${selectedValues[1]}`;
    const overflow = selectedValues.length - 2;
    return `${selectedValues[0]}, ${selectedValues[1]}, +${overflow}`;
  })();

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#f9f7f6',
        border: '1px solid #cfd6de',
        borderRadius: 6,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
        <span
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 15,
            fontWeight: 400,
            color: '#60758f',
            letterSpacing: -0.15,
            whiteSpace: 'nowrap',
          }}
        >
          {groupLabel}
        </span>
        <span
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 15,
            fontWeight: 400,
            color: '#0f2b4d',
            letterSpacing: -0.15,
            whiteSpace: 'nowrap',
          }}
        >
          &nbsp;{displayText}
        </span>
      </div>

      <button
        onClick={onClear}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          flexShrink: 0,
          padding: 0,
        }}
      >
        <div style={{ position: 'relative', width: 16, height: 16, overflow: 'clip' }}>
          <div style={{ position: 'absolute', inset: '25%' }}>
            <div style={{ position: 'absolute', inset: '-9.38%' }}>
              <img alt="" src={imgXLine1} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', inset: '25%' }}>
            <div style={{ position: 'absolute', inset: '-9.38%' }}>
              <img alt="" src={imgXLine2} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SelectedFiltersA;
