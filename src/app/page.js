import Navbar from '@/app/coomponents/Navbar';
import HeroSection from '@/app/coomponents/HeroSection';
import styles from './home.module.scss';

// Page-specific metadata for SEO
export const metadata = {
  title: 'EZII Payroll - Simplified Payroll Management',
  description: 'EZII Payroll offers a comprehensive solution for payroll management, leave management, and attendance tracking, ensuring compliance and efficiency for businesses.',
  keywords: 'payroll management, leave management, attendance tracking, HR solutions, compliance, EZII',
  openGraph: {
    title: 'EZII Payroll - Simplified Payroll Management',
    description: 'Discover how EZII Payroll simplifies payroll processes, reduces errors, and enhances compliance for businesses of all sizes.',
    url: 'https://ezii-website.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1035,
        height: 695,
        alt: 'EZII Payroll - Simplified Payroll Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZII Payroll - Simplified Payroll Management',
    description: 'Discover how EZII Payroll simplifies payroll processes, reduces errors, and enhances compliance for businesses of all sizes.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <HeroSection />
      </main>
    </>
  );
}
