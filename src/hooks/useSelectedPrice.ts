import { useEffect, useState } from 'react';

const useSelectedPrice = (currentTabSelected: CurrentTabType) => {
  const monthlyPrices = [6, 12, 18, 30];
  const oncePrices = [25, 50, 75, 100];

  const [monthlyPriceSelected, setMonthlyPriceSelected] = useState<number>(
    monthlyPrices[1]
  );
  const [oncePriceSelected, setOncePriceSelected] = useState<number>(
    oncePrices[1]
  );

  let priceSelected =
    currentTabSelected === 'monthly' ? monthlyPriceSelected : oncePriceSelected;

  const [currentPrice, setCurrentPrice] = useState<number>(priceSelected);

  useEffect(() => {
    setCurrentPrice(
      currentTabSelected === 'monthly'
        ? monthlyPriceSelected
        : oncePriceSelected
    );
  }, [
    currentTabSelected,
    monthlyPriceSelected,
    oncePriceSelected,
    setCurrentPrice,
  ]);

  return {
    priceSelected,

    currentPrice,
    setCurrentPrice,

    monthlyPriceSelected,
    setMonthlyPriceSelected,

    oncePriceSelected,
    setOncePriceSelected,
  };
};

export default useSelectedPrice;
