import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './pricing.module.scss';
import PricingSection from '@/app/coomponents/PricingSection';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';

// Page-specific metadata for SEO
export const metadata = {
  title: 'EZII Pricing - Flexible Payroll Solutions for Every Business',
  description: 'Choose the perfect EZII plan for your business. Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.',
  keywords: 'EZII pricing, payroll pricing, HR software pricing, affordable payroll, payroll plans, pricing plans',
  openGraph: {
    title: 'EZII Pricing - Flexible Payroll Solutions for Every Business',
    description: 'Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.',
    url: 'https://ezii-website.vercel.app/pricing',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1035,
        height: 695,
        alt: 'EZII Pricing - Flexible Payroll Solutions for Every Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZII Pricing - Flexible Payroll Solutions for Every Business',
    description: 'Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.',
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <HeaderWithImage
            imageSrc="/assets/contact/pricing-1.webp"
            imageAlt="Customize Your Plan"
            title="Customize Your Plan"
            description="Backed by 20+ years of experience, EZII helps you get it right—payroll, without hassle."
            applyPurpleHue
          />
        </div>
        <PricingSection />
      </main>
      <Footer />
    </>
  );
} 