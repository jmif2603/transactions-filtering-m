import MobileBottomNavTab from './MobileBottomNavTab';

type TabType = 'wallet' | 'cards' | 'invest' | 'account' | 'claims' | 'resources';

interface MobileBottomNavProps {
  activeTab?: TabType;
  onTabChange?: (tab: TabType) => void;
  variant?: '4-tabs' | '5-tabs';
  notifications?: Partial<Record<TabType, boolean>>;
}

const MobileBottomNav = ({
  activeTab = 'wallet',
  onTabChange,
  variant = '5-tabs',
  notifications = {},
}: MobileBottomNavProps) => {
  // Tab configurations for each variant
  const tabConfigs: Record<string, TabType[]> = {
    '4-tabs': ['wallet', 'cards', 'resources', 'account'],
    '5-tabs': ['wallet', 'invest', 'cards', 'claims', 'account'],
  };

  const tabs = tabConfigs[variant];

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderTop: '1px solid #f7f3f2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        maxWidth: 390,
      }}
    >
      {/* Tabs Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {tabs.map((tab) => (
          <MobileBottomNavTab
            key={tab}
            tab={tab}
            inFocus={activeTab === tab}
            redDot={notifications[tab] || false}
            onClick={() => onTabChange?.(tab)}
          />
        ))}
      </div>

      {/* Home Indicator (iPhone) */}
      <div
        style={{
          height: 34,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 8,
        }}
      >
        <div
          style={{
            width: 134,
            height: 5,
            backgroundColor: 'black',
            borderRadius: 100,
          }}
        />
      </div>
    </div>
  );
};

export default MobileBottomNav;