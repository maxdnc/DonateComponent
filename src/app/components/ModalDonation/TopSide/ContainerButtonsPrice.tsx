import { useContext } from 'react';
import ButtonPrice from '../../reusable-ui/ButtonPrice';
import styles from './ContainerButtonsPrice.module.scss';
import DonationContext from '@/contexts/DonationContext';
import useSelectedPrice from '@/hooks/useSelectedPrice';

export default function ContainerButtonsPrice() {
  const { currentTabSelected, prices, currentPrice, setCurrentPrice } =
    useContext<DonationContextType>(DonationContext);

  const {} = useSelectedPrice(currentTabSelected);

  return (
    <div className={styles.container}>
      {prices.map((price) => (
        <ButtonPrice
          key={price}
          price={price}
          onClick={() => setCurrentPrice(price)}
          isActive={currentPrice === price}
        />
      ))}
    </div>
  );
}
