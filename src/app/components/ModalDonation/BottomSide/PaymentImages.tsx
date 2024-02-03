import Image from 'next/image';
import styles from './PaymentImages.module.scss';
import { useContext } from 'react';
import DonationContext from '@/contexts/DonationContext';

export default function PaymentImages() {
  const { currentTabSelected } =
    useContext<DonationContextType>(DonationContext);
  const imagesOnce = [
    { src: '/images/visa.png', alt: 'Visa', width: 48, height: 18 },
    { src: '/images/mastercard.png', alt: 'Mastercard', width: 40, height: 25 },
    { src: '/images/paypal.png', alt: 'PayPal', width: 48, height: 15 },
    {
      src: '/images/fundraising-regulator.png',
      alt: 'Fundraising Regulator',
      width: 70,
      height: 22,
    },
  ];
  const imageMonthly = [
    {
      src: '/images/direct-debit.png',
      alt: 'Direct Debit',
      width: 81,
      height: 27,
    },
    {
      src: '/images/fundraising-regulator.png',
      alt: 'Fundraising Regulator',
      width: 70,
      height: 22,
    },
  ];

  const imagesPayement =
    currentTabSelected === 'monthly' ? imageMonthly : imagesOnce;

  return (
    <div className={styles.container}>
      {imagesPayement.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}
