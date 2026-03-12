import React from 'react';
import CheckboxWithLabel from './components/CheckboxWithLabel';
import Button from './components/Button';

export interface BottomSheetStatusProps {
  /** Whether "Cleared" is selected */
  clearedSelected?: boolean;
  /** Whether "Pending" is selected */
  pendingSelected?: boolean;
  /** Callback when Cleared checkbox changes */
  onClearedChange?: (checked: boolean) => void;
  /** Callback when Pending checkbox changes */
  onPendingChange?: (checked: boolean) => void;
  /** Callback when Clear Selection is pressed */
  onClearSelection?: () => void;
  /** Callback when overlay is pressed (to close) */
  onOverlayPress?: () => void;
}

const BottomSheetStatus = ({
  clearedSelected = false,
  pendingSelected = false,
  onClearedChange,
  onPendingChange,
  onClearSelection,
  onOverlayPress,
}: BottomSheetStatusProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        onClick={onOverlayPress}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Bottom sheet */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'flex-start',
          width: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          boxShadow: '0px -2px 8px rgba(31, 45, 61, 0.07)',
        }}
      >
        {/* Drag Handle */}
        <div
          onClick={onOverlayPress}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 40,
            backgroundColor: 'white',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 43,
              height: 5,
              backgroundColor: '#b8c0ca',
              borderRadius: 5,
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            alignItems: 'flex-start',
            width: '100%',
            padding: '0 16px 48px 16px',
          }}
        >
          {/* Checkbox Options */}
          <CheckboxWithLabel
            label="Cleared"
            checked={clearedSelected}
            onChange={onClearedChange}
          />
          <CheckboxWithLabel
            label="Pending"
            checked={pendingSelected}
            onChange={onPendingChange}
          />
        </div>

        {/* Home Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: 34,
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 134,
              height: 5,
              backgroundColor: 'black',
              borderRadius: 100,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheetStatus;