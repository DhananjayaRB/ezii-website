import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './contact.module.scss';
import ContactForm from '../coomponents/ContactForm';

// Page-specific metadata for SEO
export const metadata = {
  title: 'Contact EZII - Get in Touch for Payroll Solutions',
  description: 'Contact EZII for expert payroll and HR solutions. Our team is ready to help you streamline your payroll processes and ensure compliance.',
  keywords: 'contact EZII, payroll support, HR consultation, EZII contact, payroll help, customer support',
  openGraph: {
    title: 'Contact EZII - Get in Touch for Payroll Solutions',
    description: 'Get expert help with your payroll and HR needs. Contact our team today.',
    url: 'https://ezii-website.vercel.app/contact',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1035,
        height: 695,
        alt: 'Contact EZII - Get in Touch for Payroll Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact EZII - Get in Touch for Payroll Solutions',
    description: 'Get expert help with your payroll and HR needs. Contact our team today.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
} 