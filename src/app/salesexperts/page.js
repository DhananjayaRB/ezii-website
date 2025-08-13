import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import styles from './saless.module.scss';
import ContactForm from '../coomponents/ContactForm';

// Page-specific metadata for SEO
export const metadata = {
  title: 'Connect with EZII Sales Experts - Get Expert Payroll Software Guidance',
  description: 'Connect with EZII sales experts for personalized payroll software guidance. Get expert advice, custom solutions, and free consultations to optimize your payroll management.',
  keywords: 'EZII sales experts, payroll software consultation, HR software experts, payroll management advice, free consultation, custom payroll solutions',
  openGraph: {
    title: 'Connect with EZII Sales Experts - Get Expert Payroll Software Guidance',
    description: 'Get personalized payroll software guidance from EZII experts. Free consultation and custom solutions available.',
    url: 'https://ezii-website.vercel.app/salesexperts',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/contact/pricing-1.webp',
        width: 1200,
        height: 630,
        alt: 'EZII Sales Experts - Professional Payroll Software Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect with EZII Sales Experts - Get Expert Payroll Software Guidance',
    description: 'Get personalized payroll software guidance from EZII experts. Free consultation and custom solutions available.',
  },
};

export default function SalesPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <HeaderWithImage
          imageSrc="/assets/contact/pricing-1.webp"
          imageAlt="EZII Sales Experts - Professional Payroll Software Consultation and Guidance"
          title="Connect with Our Sales Experts Today"
          description="Backed by 20+ years of experience, Ezii helps you get it right—payroll, leaves, or attendance—without hassle."
          applyPurpleHue
        />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
} 