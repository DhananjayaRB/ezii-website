import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './pricing.module.scss';
import PricingSection from '@/app/coomponents/PricingSection';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <img src="/assets/contact/pricing-1.webp" alt="EZII Features" className={styles.illustrationImage} />
          </div>
          <h1 className={styles.title}>Customize Your Plan</h1>
          <p className={styles.description}>
          Backed by 20+ years of experience, EZII helps you get it right—payroll, without hassle.
          </p>
        </div>
        <PricingSection />
      </main> 
      <Footer />
    </>
  );
} 