import Navbar from '@/app/coomponents/Navbar';
import HeroSection from '@/app/coomponents/HeroSection';
import ProblemSolutionSection from '@/app/coomponents/ProblemSolutionSection';
import EziiOverviewSection from '@/app/coomponents/EziiOverviewSection';
import FeaturesSection from '@/app/coomponents/FeaturesSection';
import styles from './home.module.scss';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <HeroSection />
        {/* <ProblemSolutionSection />
        <EziiOverviewSection />
        <FeaturesSection /> */}
      </main>
    </>
  );
}
