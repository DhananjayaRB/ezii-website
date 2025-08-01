import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './refundsCancellations.module.scss';

export default function RefundsCancellationsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Refunds & Cancellations</h1>
          
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