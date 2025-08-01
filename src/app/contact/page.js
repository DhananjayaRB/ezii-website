import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './contact.module.scss';
import ContactForm from '../coomponents/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.illustration}>
            <img src="/assets/contact/pricing-1.webp" alt="Pricing illustration" className={styles.illustrationImage} />
          </div>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.tagline}>Leave the hassle of payroll to us – We help you get it right</p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
} 