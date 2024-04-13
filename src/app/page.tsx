import 'bootstrap/dist/css/bootstrap.css';
import styles from "./page.module.css";
import HomeHeader from './components/HomeHeader/HomeHeader';
import Scroller from './components/Scoller/Scroller';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <div className={styles.myClass}></div>
    </main>
  );
}
