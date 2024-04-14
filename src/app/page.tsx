import 'bootstrap/dist/css/bootstrap.css';
import styles from "./page.module.css";
import HomeHeader from './components/HomeHeader/HomeHeader';
import Scroller from './components/Scoller/Scroller';
import ServicesSection from './components/ServicesSection/ServicesSection';
import BlogsSection from './components/BlogsSection/BlogsSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <ServicesSection />
      <BlogsSection />
    </main>
  );
}
