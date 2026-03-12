import Button from './Button';

export interface ButtonBarProps {
  /** Number of buttons to display */
  buttonCount?: 1 | 2;
  /** Primary button label */
  primaryLabel?: string;
  /** Secondary button label (only used when buttonCount is 2) */
  secondaryLabel?: string;
  /** Callback when primary button is clicked */
  onPrimaryClick?: () => void;
  /** Callback when secondary button is clicked */
  onSecondaryClick?: () => void;
  /** Whether primary button is disabled */
  primaryDisabled?: boolean;
  /** Whether secondary button is disabled */
  secondaryDisabled?: boolean;
  /** Whether to show the iOS home indicator */
  showHomeIndicator?: boolean;
  /** Additional class name for the container */
  className?: string;
}

export default function ButtonBar({
  buttonCount = 1,
  primaryLabel = 'Button',
  secondaryLabel = 'Button',
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  secondaryDisabled = false,
  showHomeIndicator = true,
  className,
}: ButtonBarProps) {
  return (
    <div
      className={[
        'bg-white flex flex-col items-center w-full',
        'shadow-[0px_0px_8px_0px_rgba(31,45,61,0.07)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Button Container */}
      <div
        className={[
          'flex pt-4 pb-1.5 px-4 w-full',
          buttonCount === 2
            ? 'flex-row gap-4 items-center justify-center'
            : 'flex-col items-stretch',
        ].join(' ')}
      >
        {buttonCount === 1 ? (
          <Button
            variant="fill"
            color="primary"
            size="large"
            onClick={onPrimaryClick}
            disabled={primaryDisabled}
            className="w-full"
          >
            {primaryLabel}
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              color="primary"
              size="large"
              onClick={onSecondaryClick}
              disabled={secondaryDisabled}
              className="flex-1 min-w-0"
            >
              {secondaryLabel}
            </Button>
            <Button
              variant="fill"
              color="primary"
              size="large"
              onClick={onPrimaryClick}
              disabled={primaryDisabled}
              className="flex-1 min-w-0"
            >
              {primaryLabel}
            </Button>
          </>
        )}
      </div>

      {/* iOS Home Indicator */}
      {showHomeIndicator && (
        <div className="bg-white h-[34px] w-full flex items-end justify-center pb-2">
          <div className="bg-black h-[5px] w-[134px] rounded-full" />
        </div>
      )}
    </div>
  );
}

// Usage examples:
// Single button:
// <ButtonBar primaryLabel="Continue" onPrimaryClick={() => {}} />
//
// Two buttons:
// <ButtonBar
//   buttonCount={2}
//   primaryLabel="Confirm"
//   secondaryLabel="Cancel"
//   onPrimaryClick={() => {}}
//   onSecondaryClick={() => {}}
// />