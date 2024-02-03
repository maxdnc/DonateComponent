import PaymentImages from './PaymentImages';
import styles from './BottomSide.module.scss';
import DonationContext from '@/contexts/DonationContext';
import { useContext } from 'react';

export default function BottomSide() {
  const {
    currentTabSelected,
    setCurrentTabSelected,
    setCurrentPrice,
    monthlyPriceSelected,
    oncePriceSelected,
  } = useContext<DonationContextType>(DonationContext);

  const handleClick = () => {
    setCurrentTabSelected(
      currentTabSelected === 'monthly' ? 'once' : 'monthly'
    );
    setCurrentPrice(
      currentTabSelected === 'monthly'
        ? monthlyPriceSelected
        : oncePriceSelected
    );
  };

  return (
    <div className={styles.container}>
      <PaymentImages />
      {currentTabSelected === 'monthly' && (
        <p>All Direct Debits are protected by the Direct Debit Guarantee.</p>
      )}
      <button type="button" onClick={handleClick} className={styles.button}>
        {' '}
        I would like to{' '}
        {currentTabSelected === 'monthly'
          ? 'make a one-off donation'
          : 'give monthly'}
      </button>
    </div>
  );
}
