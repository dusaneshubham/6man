import 'bootstrap/dist/css/bootstrap.css';
import styles from "./page.module.css";
import HomeHeader from './components/HomeHeader/HomeHeader';
import ServicesSection from './components/ServicesSection/ServicesSection';
import BlogsSection from './components/BlogsSection/BlogsSection';
import SuccessStorySection from './components/SuccessStorySection/SuccessStorySection';
import ClientReview from './components/ClientReview/ClientReview';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHeader />
      <SuccessStorySection />
      <ClientReview />
      <BlogsSection />
    </main>
  );
}
