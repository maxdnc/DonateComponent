import styles from './DonationFormHeader.module.scss';
interface DonationFormHeaderProps {
  currentTab: 'monthly' | 'once';
}

export default function DonationFormHeader({
  currentTab,
}: DonationFormHeaderProps) {
  return (
    <p className={styles.header}>
      I would like to make a {currentTab === 'monthly' ? 'monthly' : 'one-off'}{' '}
      donation of
    </p>
  );
}
