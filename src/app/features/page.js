import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import FeaturesGrid from '@/app/coomponents/FeaturesGrid';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import styles from './features.module.scss';

// Page-specific metadata for SEO
export const metadata = {
  title: 'EZII Features - Comprehensive Payroll & HR Solutions',
  description: 'Explore EZII\'s comprehensive features including payroll management, leave management, attendance tracking, and automated compliance solutions.',
  keywords: 'EZII features, payroll features, HR management features, leave management, attendance tracking, compliance automation',
  openGraph: {
    title: 'EZII Features - Comprehensive Payroll & HR Solutions',
    description: 'Discover powerful features that make payroll and HR management simple, efficient, and compliant.',
    url: 'https://ezii-website.vercel.app/features',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1035,
        height: 695,
        alt: 'EZII Features - Comprehensive Payroll & HR Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZII Features - Comprehensive Payroll & HR Solutions',
    description: 'Discover powerful features that make payroll and HR management simple, efficient, and compliant.',
  },
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <HeaderWithImage
            imageSrc="/assets/contact/pricing-1.webp"
            imageAlt="EZII Features"
            title="EZII Features"
            description="Backed by 20+ years of experience, EZII helps you get it right—payroll, without hassle."
            applyPurpleHue
          />
          <FeaturesGrid />
        </div>

      </main>
      <Footer />
    </>
  );
} 