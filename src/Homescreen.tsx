import React, { useState, useRef } from 'react';
import StatusBarIphone from './components/StatusBarIphone';
import MobileBottomNav from './components/MobileBottomNav';
import WalletTransactionListItem from './components/WalletTransactionListItem';
import IconArrowRight from './components/Icons/IconArrowRight';
import IconPlus from './components/Icons/IconPlus';
import IconDollarSign from './components/Icons/IconDollarSign';
import IconBarChart from './components/Icons/IconBarChart';
import IconFilter from './components/Icons/IconFilter';
import IconSearch from './components/Icons/IconSearch';
import SelectedFiltersA from './components/SelectedFiltersA';
import BenefitIconDuo from './components/BenefitIconDuo';
import IconReceipt from './components/Icons/IconReceipt';
import DefaultFilterView from './FilterViewA';
import type { FilterViewProps } from './FilterViewA';

// ============ Sub-components ============

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const QuickActionButton = ({ icon, label, onClick }: QuickActionButtonProps) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '13px 23px',
      backgroundColor: 'white',
      border: '1px solid #cfd6de',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'Roboto, sans-serif',
      fontSize: 15,
      color: '#0f2b4d',
      whiteSpace: 'nowrap',
    }}
  >
    {icon}
    {label}
  </button>
);

interface AccountCardProps {
  icon: React.ReactNode;
  title: string;
  balance: string;
  subtitle: string;
  secondaryBalance?: string;
  onClick?: () => void;
}

const AccountCard = ({
  icon,
  title,
  balance,
  subtitle,
  secondaryBalance,
  onClick,
}: AccountCardProps) => (
  <div
    onClick={onClick}
    style={{
      backgroundColor: 'white',
      border: '1px solid #f7f3f2',
      borderRadius: 8,
      padding: 24,
      boxShadow: '0px 3px 4px rgba(99, 99, 102, 0.05)',
      cursor: onClick ? 'pointer' : 'default',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: balance || subtitle ? 16 : 0 }}>
      {icon}
      <span
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: 20,
          color: '#0f2b4d',
          letterSpacing: -0.4,
        }}
      >
        {title}
      </span>
      <span style={{ marginLeft: 'auto' }}>
        <IconArrowRight size={24} color="#0f2b4d" />
      </span>
    </div>
    {(balance || subtitle) && (
      <div>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 20,
            fontWeight: 700,
            color: '#0f2b4d',
            margin: 0,
            letterSpacing: -0.2,
          }}
        >
          {balance}
          {secondaryBalance && <span style={{ fontWeight: 400 }}> / {secondaryBalance}</span>}
        </p>
        {subtitle && (
          <p
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 10,
              color: '#60758f',
              margin: '4px 0 0 0',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    )}
  </div>
);

// ============ Main Screen ============

interface HomescreenProps {
  FilterView?: React.ComponentType<FilterViewProps>;
}

const Homescreen = ({ FilterView = DefaultFilterView }: HomescreenProps) => {
  const [activeTab, setActiveTab] = useState<
    'wallet' | 'cards' | 'invest' | 'account' | 'claims' | 'resources'
  >('wallet');
  const [showFilterView, setShowFilterView] = useState(false);
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  // Drag to scroll functionality
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartY(e.pageY - scrollRef.current.offsetTop);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY - scrollRef.current.offsetTop;
    const walk = (y - startY) * 1.5;
    scrollRef.current.scrollTop = scrollTop - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const clearedTransactions = [
    {
      merchantName: '1-800 Contacts',
      benefitAccount: 'Health Savings',
      transactionAmount: '293.98',
      date: 'Dec 09, 2023',
      type: 'MoneyOut' as const,
      benefit: 'HSA_FSA' as const,
    },
    {
      merchantName: 'CVS 09447',
      benefitAccount: 'HRA',
      transactionAmount: '43.30',
      date: 'Oct 22, 2023',
      type: 'MoneyOut' as const,
      benefit: 'HRA' as const,
    },
    {
      merchantName: 'Employee Payroll Contribution',
      benefitAccount: 'DCFSA',
      transactionAmount: '200.00',
      date: 'Sep 14, 2023',
      type: 'MoneyIn' as const,
      benefit: 'Funding' as const,
    },
    {
      merchantName: 'GoodRx',
      benefitAccount: 'LPFSA',
      transactionAmount: '50.00',
      date: 'Aug 03, 2023',
      type: 'MoneyOut' as const,
      benefit: 'LPFSA' as const,
    },
    {
      merchantName: 'Amazon.com',
      benefitAccount: 'Remote Work',
      transactionAmount: '42.31',
      date: 'Jun 27, 2023',
      type: 'MoneyOut' as const,
      benefit: 'RemoteWork' as const,
    },
    {
      merchantName: 'Metro BusPass 12/2022',
      benefitAccount: 'Transit',
      transactionAmount: '82.40',
      date: 'Apr 11, 2023',
      type: 'MoneyOut' as const,
      benefit: 'Transit' as const,
    },
    {
      merchantName: '12/2022 Gym Reward',
      benefitAccount: 'LSA',
      transactionAmount: '25.00',
      date: 'Mar 05, 2023',
      type: 'MoneyIn' as const,
      benefit: 'LSA' as const,
    },
    {
      merchantName: 'Downtown Pkg 112',
      benefitAccount: 'Parking',
      transactionAmount: '24.00',
      date: 'Feb 18, 2023',
      type: 'MoneyOut' as const,
      benefit: 'Parking' as const,
    },
    {
      merchantName: 'Steps Challenge 01/2023',
      benefitAccount: 'Rewards',
      transactionAmount: '20.00',
      date: 'Jan 30, 2023',
      type: 'MoneyIn' as const,
      benefit: 'Rewards' as const,
    },
  ];

  const pendingTransactions = [
    {
      merchantName: 'HSAStore.com',
      benefitAccount: 'Health Savings',
      transactionAmount: '123.45',
      date: 'Mar 18, 2024',
      type: 'Pending' as const,
      benefit: 'HSA_FSA' as const,
    },
    {
      merchantName: 'Dermatology Associates',
      benefitAccount: 'HRA',
      transactionAmount: '422.55',
      date: 'Mar 02, 2024',
      type: 'Pending' as const,
      benefit: 'HRA' as const,
    },
    {
      merchantName: 'Employee Payroll Contribution',
      benefitAccount: 'DCFSA',
      transactionAmount: '200.00',
      date: 'Feb 24, 2024',
      type: 'Pending' as const,
      benefit: 'DCFSA' as const,
    },
    {
      merchantName: 'Refund',
      benefitAccount: 'LPFSA',
      transactionAmount: '50.00',
      date: 'Feb 07, 2024',
      type: 'Pending' as const,
      benefit: 'LPFSA' as const,
    },
    {
      merchantName: 'OfficeSupplies.com',
      benefitAccount: 'Remote Work',
      transactionAmount: '150.00',
      date: 'Jan 29, 2024',
      type: 'Pending' as const,
      benefit: 'RemoteWork' as const,
    },
    {
      merchantName: 'Metro BusPass 01/2024',
      benefitAccount: 'Transit',
      transactionAmount: '81.70',
      date: 'Jan 11, 2024',
      type: 'Pending' as const,
      benefit: 'Transit' as const,
    },
    {
      merchantName: 'exerciseequipment.com',
      benefitAccount: 'LSA',
      transactionAmount: '75.24',
      date: 'Jan 03, 2024',
      type: 'Pending' as const,
      benefit: 'Funding' as const,
    },
    {
      merchantName: 'Deposit',
      benefitAccount: 'Parking',
      transactionAmount: '250.00',
      date: 'Dec 28, 2023',
      type: 'Pending' as const,
      benefit: 'Parking' as const,
    },
    {
      merchantName: 'Steps Challenge 12/2023',
      benefitAccount: 'Rewards',
      transactionAmount: '20.00',
      date: 'Dec 19, 2023',
      type: 'Pending' as const,
      benefit: 'Rewards' as const,
    },
  ];

  // Show FilterView when state is true
  if (showFilterView) {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: 393,
          height: 852,
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <FilterView
          onBack={() => setShowFilterView(false)}
          onApplyFilter={() => {
            setHasActiveFilters(true);
            setShowFilterView(false);
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 393,
        height: 852,
        margin: '0 auto',
        backgroundColor: '#f9f7f6',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Status Bar */}
      <StatusBarIphone variant="default" />

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: 100,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {/* Header & Quick Actions */}
        <div style={{ padding: '24px 17px 20px' }}>
          <h1
            style={{
              fontFamily: 'Stack Sans Text, sans-serif',
              fontSize: 26,
              fontWeight: 400,
              color: '#0f2b4d',
              margin: '0 0 16px 0',
              letterSpacing: -0.52,
            }}
          >
            Good Morning, Jeff
          </h1>

          <div className="hide-scrollbar" style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
            <QuickActionButton
              icon={<IconPlus size={16} color="#0f2b4d" />}
              label="Deposit"
            />
            <QuickActionButton
              icon={<IconDollarSign size={16} color="#0f2b4d" />}
              label="Reimburse"
            />
            <QuickActionButton
              icon={<IconBarChart size={16} color="#0f2b4d" />}
              label="Invest"
            />
          </div>
        </div>

        {/* Account Cards */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <AccountCard
            icon={<BenefitIconDuo icon="HSA_FSA" />}
            title="Health Savings Account"
            balance="$10,576.81"
            subtitle="Cash + Investments"
          />
          <AccountCard
            icon={<BenefitIconDuo icon="Remote Work" />}
            title="Remote Work"
            balance="$440.90"
            secondaryBalance="$500.00"
            subtitle="Available balance"
          />
          <AccountCard
            icon={
              <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconReceipt size={24} />
              </div>
            }
            title="My Claims"
            balance=""
            subtitle=""
          />
        </div>

        {/* Transactions */}
        <div style={{ backgroundColor: 'white', marginTop: 20, padding: '24px 18px' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 20,
                fontWeight: 400,
                color: '#0f2b4d',
                margin: 0,
                letterSpacing: -0.4,
              }}
            >
              Transactions
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconSearch size={24} color="#0f2b4d" />
              </button>
              <button
                onClick={() => setShowFilterView(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: 40,
                  height: 40,
                }}
              >
                <IconFilter size={24} color="#0f2b4d" />
                {hasActiveFilters && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '30%',
                      right: '30.39%',
                      bottom: '31.55%',
                      left: '30.39%',
                    }}
                  >
                    <img
                      src="http://localhost:3845/assets/af64d688f25af5510967eeaf0e4d290f9643880d.svg"
                      alt=""
                      style={{
                        position: 'absolute',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        maxWidth: 'none',
                      }}
                    />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {hasActiveFilters && (
            <div style={{ marginBottom: 16 }}>
              <SelectedFiltersA
                groupLabel="Benefit"
                selectedValues={['Health Savings']}
                onClear={() => setHasActiveFilters(false)}
              />
            </div>
          )}

          {/* Cleared */}
          <div style={{ marginBottom: 24 }}>
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                color: '#60758f',
                textTransform: 'uppercase',
                letterSpacing: 0.8,
                margin: '0 0 8px 0',
              }}
            >
              Cleared
            </p>
            {clearedTransactions.map((tx, i) => (
              <WalletTransactionListItem
                key={i}
                {...tx}
                hasBottomDivider={i < clearedTransactions.length - 1}
              />
            ))}
          </div>

          {/* Pending */}
          <div>
            <p
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 10,
                fontWeight: 500,
                color: '#60758f',
                textTransform: 'uppercase',
                letterSpacing: 0.8,
                margin: '0 0 8px 0',
              }}
            >
              Pending
            </p>
            {pendingTransactions.map((tx, i) => (
              <WalletTransactionListItem
                key={i}
                {...tx}
                hasBottomDivider={i < pendingTransactions.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}
      >
        <MobileBottomNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          variant="5-tabs"
        />
      </div>
    </div>
  );
};

export default Homescreen;