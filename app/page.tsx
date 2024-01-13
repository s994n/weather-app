import Image from 'next/image';
import styles from './page.module.css';

import { SearchCurrentWeather } from '@components/organisms';

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchCurrentWeather />
    </main>
  );
}
