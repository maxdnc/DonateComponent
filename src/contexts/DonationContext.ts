import { createContext } from 'react';

export default createContext<DonationContextType>({
  currentTabSelected: 'monthly',
  setCurrentTabSelected: (tab) => {},

  monthlyPriceSelected: 12,
  setMonthlyPriceSelected: (price) => {},

  oncePriceSelected: 50,
  setOncePriceSelected: (price) => {},

  currentPrice: 12,
  setCurrentPrice: (price) => {},

  prices: [],
});
