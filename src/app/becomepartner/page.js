import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import styles from './becomepartner.module.scss';
import BecomeContactForm from '@/app/coomponents/ContactForm/become';

// Page-specific metadata for SEO
export const metadata = {
  title: 'Become an EZII Partner - Join Our Payroll Software Partnership Program',
  description: 'Join EZII\'s partner program and unlock new revenue opportunities. Partner with us to deliver cutting-edge payroll software solutions to businesses while earning attractive commissions.',
  keywords: 'EZII partner program, payroll software partnership, HR software partners, business partnership opportunities, technology partners, referral partners',
  openGraph: {
    title: 'Become an EZII Partner - Join Our Payroll Software Partnership Program',
    description: 'Partner with EZII to deliver cutting-edge payroll software solutions and unlock new revenue opportunities.',
    url: 'https://ezii-website.vercel.app/becomepartner',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/contact/pricing-1.webp',
        width: 1200,
        height: 630,
        alt: 'EZII Partnership Program - Join our payroll software partnership',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become an EZII Partner - Join Our Payroll Software Partnership Program',
    description: 'Partner with EZII to deliver cutting-edge payroll software solutions and unlock new revenue opportunities.',
  },
};

export default function BecomePartnerPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <HeaderWithImage
          imageSrc="/assets/contact/pricing-1.webp"
          imageAlt="EZII Partnership Program - Join our comprehensive payroll software partnership"
          title="Become a Partner"
          description="Partner with us to bring cutting-edge payroll software to your clients. As our partner, you'll unlock new revenue opportunities while delivering reliable, efficient, and user-friendly solutions to businesses. Let's grow together and simplify payroll management!"
          applyPurpleHue
        />

        {/* Form Section - Side by Side Layout */}
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