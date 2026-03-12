const imgVector = 'http://localhost:3845/assets/ea9a70d45ae9572e6c227359de93bedf69961b10.svg';

interface IconReceiptProps {
  size?: number;
}

const IconReceipt = ({ size = 24 }: IconReceiptProps) => (
  <div
    style={{
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px 3px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '8.33%',
        left: '8.33%',
        right: '8.33%',
        bottom: '8.33%',
      }}
    >
      <img
        alt=""
        src={imgVector}
        style={{
          position: 'absolute',
          display: 'block',
          width: '100%',
          height: '100%',
          maxWidth: 'none',
        }}
      />
    </div>
  </div>
);

export default IconReceipt;
