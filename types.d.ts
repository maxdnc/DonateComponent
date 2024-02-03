type CurrentTabType = 'monthly' | 'once';

type DonationContextType = {
  currentTabSelected: CurrentTabType;
  setCurrentTabSelected: (tab: CurrentTabType) => void;

  monthlyPriceSelected: number;
  setMonthlyPriceSelected: (price: number) => void;

  oncePriceSelected: number;
  setOncePriceSelected: (price: number) => void;

  currentPrice: number;
  setCurrentPrice: (price: number) => void;

  prices: number[];
};
