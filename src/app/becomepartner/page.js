import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './becomepartner.module.scss';
// import ContactSection from '@/app/coomponents/ContactSection';
import BecomeContactForm from '@/app/coomponents/ContactForm/become';

export default function BecomePartnerPage() {

  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <img src="/assets/contact/pricing-1.webp" alt="EZII Features" className={styles.illustrationImage} />
          </div>
          <h1 className={styles.title}>Become a Partner</h1>
          <p className={styles.description}>
          Partner with us to bring cutting-edge payroll software to your clients. As our partner, you'll unlock new revenue opportunities while delivering reliable, efficient, and user-friendly solutions to businesses. Let's grow together and simplify payroll management!          </p>
        </div>
        
        {/* New Section - Side by Side Layout */}
        <div className={styles.formSection}>
          {/* Left Section - Content */}
          <div className={styles.formLeftSection}>
            <h2 className={styles.formTitle}>Please fill in the form to get started!</h2>
            <p className={styles.formDescription}>
              Many of our partners enjoy significant earnings through commissions every month, all while providing top-notch payroll solutions to their clients!
            </p>
          </div>
          
          {/* Right Section - Form */}
          <div className={styles.formRightSection}>
            <BecomeContactForm showLocation={false} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 