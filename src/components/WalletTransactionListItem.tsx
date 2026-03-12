import BenefitTransactionIcon from './BenefitIconTransactionItem';

type BenefitType =
  | 'HSA_FSA'
  | 'HRA'
  | 'DCFSA'
  | 'LPFSA'
  | 'RemoteWork'
  | 'Transit'
  | 'LSA'
  | 'Parking'
  | 'Rewards'
  | 'Funding';

type TransactionType = 'MoneyIn' | 'MoneyOut' | 'Pending';

interface WalletTransactionListItemProps {
  merchantName: string;
  benefitAccount: string;
  transactionAmount: string;
  date: string;
  type?: TransactionType;
  benefit?: BenefitType;
  hasBottomDivider?: boolean;
}

const WalletTransactionListItem = ({
  merchantName,
  benefitAccount,
  transactionAmount,
  date,
  type = 'MoneyOut',
  benefit = 'HSA_FSA',
  hasBottomDivider = true,
}: WalletTransactionListItemProps) => {
  // Colors from Figma design tokens
  const colors = {
    textDark: '#0f2b4d',
    textMuted: '#60758f',
    successMain: '#27a74a',
    borderLight: '#f7f3f2',
  };

  // Amount color based on transaction type
  const getAmountColor = () => {
    switch (type) {
      case 'MoneyIn':
        return colors.successMain;
      case 'Pending':
        return colors.textMuted;
      default:
        return colors.textDark;
    }
  };

  // Amount prefix based on transaction type
  const getAmountPrefix = () => {
    return type === 'MoneyOut' ? '- $' : '$';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '16px 0',
        width: '100%',
        borderBottom: hasBottomDivider ? `1px solid ${colors.borderLight}` : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          width: '100%',
        }}
      >
        {/* Left section: Icon + Text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flex: 1,
            minWidth: 0,
          }}
        >
          <BenefitTransactionIcon benefit={benefit} type={type} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              flex: 1,
              minWidth: 0,
            }}
          >
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 15,
                fontWeight: 500,
                lineHeight: '22.5px',
                letterSpacing: -0.15,
                color: colors.textDark,
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {merchantName}
            </p>
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 13,
                fontWeight: 400,
                lineHeight: '19.5px',
                color: colors.textMuted,
                margin: 0,
              }}
            >
              {benefitAccount}
            </p>
          </div>
        </div>

        {/* Right section: Amount + Date */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 1,
            whiteSpace: 'nowrap',
          }}
        >
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 15,
              fontWeight: 500,
              lineHeight: '22.5px',
              letterSpacing: -0.15,
              color: getAmountColor(),
              margin: 0,
            }}
          >
            {getAmountPrefix()}{transactionAmount}
          </p>
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: '19.5px',
              color: colors.textMuted,
              margin: 0,
            }}
          >
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletTransactionListItem;