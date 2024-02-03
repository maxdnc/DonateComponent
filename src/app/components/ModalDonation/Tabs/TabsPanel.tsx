'use client';
import { useContext } from 'react';
import Tab from './Tab';
import styles from './TabsPanel.module.scss';
import DonationContext from '@/contexts/DonationContext';

export default function TabsPanel() {
  const { currentTabSelected, setCurrentTabSelected } =
    useContext<DonationContextType>(DonationContext);

  const handleTabSelected = (tab: CurrentTabType) => {
    setCurrentTabSelected(tab);
  };

  return (
    <div className={styles.container}>
      <Tab
        onClick={() => handleTabSelected('monthly')}
        label="Donate monthly"
        isActive={currentTabSelected === 'monthly'}
      />
      <Tab
        onClick={() => handleTabSelected('once')}
        label="Donate once"
        isActive={currentTabSelected === 'once'}
      />
    </div>
  );
}
