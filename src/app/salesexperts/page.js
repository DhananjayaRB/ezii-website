import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './saless.module.scss';
import ContactForm from '../coomponents/ContactForm';
export default function SalesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <img src="/assets/contact/pricing-1.webp" alt="EZII Features" className={styles.illustrationImage} />
          </div>
          <h1 className={styles.title}>Connect with Our
            Sales Experts Today
          </h1>
          <p className={styles.description}>
            Backed by 20+ years of experience, Ezii helps you get it right—payroll, leaves, or attendance—without hassle.
          </p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
} 