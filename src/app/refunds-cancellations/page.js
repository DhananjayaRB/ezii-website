import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './refundsCancellations.module.scss';

// Page-specific metadata for SEO
export const metadata = {
  title: 'Refunds & Cancellations Policy - EZII Payroll Software',
  description: 'Learn about EZII\'s refund and cancellation policies for payroll software subscriptions. Understand our terms, conditions, and what to expect when managing your subscription.',
  keywords: 'EZII refunds, cancellation policy, payroll software refunds, subscription cancellation, EZII terms',
  openGraph: {
    title: 'Refunds & Cancellations Policy - EZII Payroll Software',
    description: 'Learn about EZII\'s refund and cancellation policies for payroll software subscriptions.',
    url: 'https://ezii-website.vercel.app/refunds-cancellations',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/banner-ezii.webp',
        width: 1200,
        height: 630,
        alt: 'EZII Refunds and Cancellations Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refunds & Cancellations Policy - EZII Payroll Software',
    description: 'Learn about EZII\'s refund and cancellation policies for payroll software subscriptions.',
  },
};

export default function RefundsCancellationsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Refunds & Cancellations Policy</h1>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Subscriber will pay to Resolve, without any deductions, the fees set forth in the applicable Invoice.
              Except as otherwise specified in the Agreement, all payment obligations are non-cancellable and all
              amounts paid are non-refundable whether or not the Resolve Platform is actively being used.
            </p>

            <p className={styles.paragraph}>
              Additional charges will apply for additional purchases or usage in excess of the purchased subscription(s).
              All pricing terms provided for the Subscriber are confidential and Subscriber agrees not to disclose
              them to any third party without Resolve's prior written authorization.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 