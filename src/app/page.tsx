import ModalDonation from './components/ModalDonation/ModalDonation';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.space}></div>
      <ModalDonation />
    </main>
  );
}
