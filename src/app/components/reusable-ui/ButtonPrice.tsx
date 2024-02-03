'use-client';
import styles from './ButtonPrice.module.scss';
import Image from 'next/image';

interface ButtonPriceProps {
  price: number;
  onClick: () => void;
  isActive: boolean;
}

export default function ButtonPrice({
  price,
  onClick,
  isActive,
}: ButtonPriceProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${isActive && styles.active}`}
      onClick={onClick}
    >
      <span>£{price}</span>
      {isActive && (
        <Image src="/images/check.svg" alt="Check" width={22} height={22} />
      )}
    </button>
  );
}
