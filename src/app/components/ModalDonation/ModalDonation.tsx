'use client';

import { useState } from 'react';
import BottomSide from './BottomSide/BottomSide';
import styles from './ModalDonation.module.scss';
import TabsPanel from './Tabs/TabsPanel';
import TopSide from './TopSide/TopSide';
import DonationContext from '@/contexts/DonationContext';
import useSelectedPrice from '@/hooks/useSelectedPrice';

export default function ModalDonation() {
  const monthlyPrices = [6, 12, 18, 30];
  const oncePrices = [25, 50, 75, 100];

  const [currentTabSelected, setCurrentTabSelected] =
    useState<CurrentTabType>('monthly');

  const {
    priceSelected,
    monthlyPriceSelected,
    setMonthlyPriceSelected,
    currentPrice,
    setCurrentPrice,
    oncePriceSelected,
    setOncePriceSelected,
  } = useSelectedPrice(currentTabSelected);

  const prices = currentTabSelected === 'monthly' ? monthlyPrices : oncePrices;

  const DonationContextValue = {
    currentTabSelected,
    setCurrentTabSelected,
    currentPrice,
    setCurrentPrice,
    priceSelected,
    monthlyPriceSelected,
    setMonthlyPriceSelected,
    oncePriceSelected,
    setOncePriceSelected,
    prices,
  };

  return (
    <DonationContext.Provider value={DonationContextValue}>
      <div className={styles.container}>
        <div className={styles.content}>
          <TabsPanel />
          <TopSide />
          <BottomSide />
        </div>
      </div>
    </DonationContext.Provider>
  );
}
