import DonationContext from '@/contexts/DonationContext';
import { useContext } from 'react';
import InputPrimary from '../../reusable-ui/InputPrimary';
import ContainerButtonsPrice from './ContainerButtonsPrice';
import DonationFormHeader from './DonationFormHeader';
import styles from './TopSide.module.scss';
import Image from 'next/image';

export default function TopSide() {
  const {
    currentTabSelected,
    setMonthlyPriceSelected,
    setOncePriceSelected,
    currentPrice,
    setCurrentPrice,
    prices,
  } = useContext<DonationContextType>(DonationContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value < 0) {
      event.target.value = String(prices[1]);
    } else {
      setCurrentPrice(value);
      currentTabSelected === 'monthly'
        ? setMonthlyPriceSelected(value)
        : setOncePriceSelected(value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ currentPrice });
  };

  const isDisabled = currentPrice < 1;

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <DonationFormHeader currentTab={currentTabSelected} />
      <ContainerButtonsPrice />
      <InputPrimary
        onChange={handleChange}
        id="InputAmount"
        label="Other amount"
        placeholder="Other amount"
      />

      <button type="submit" className={styles.button} disabled={isDisabled}>
        Donate £{currentPrice} monthly
      </button>

      <p className={styles.description}>
        £{currentPrice} Could help answer an emergency call to our Animal
        Rescue.
      </p>
    </form>
  );
}
