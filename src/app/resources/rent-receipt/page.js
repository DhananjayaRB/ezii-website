import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './rent-receipt.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function RentReceiptPage() {
  return (
    <>
      <Head>
        <title>Rent Receipt Format FY 2019-20 - EZII Payroll Management Solutions</title>
        <meta name="description" content="Rent Receipt Format for FY 2019-20. Download the related form for rent receipt format." />
        <meta name="keywords" content="rent receipt format, FY 2019-20, rent receipt, EZII resources, forms and formats" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.mediaSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/assets/resorcesDownloads/rent receipt.png"
                alt="Rent Receipt Format FY 2019-20"
                width={800}
                height={600}
                className={styles.receiptImage}
                priority
              />
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.pageTitle}>Rent Receipt Format FY 2019-20</h1>
              <p className={styles.description}>
                Download the Related form here, Rent Receipt Format FY 2019-20{' '}
                <a 
                  href="/assets/resorcesDownloads/Rent-Reciept-Format-FY-2019-20.doc" 
                  download="Rent-Reciept-Format-FY-2019-20.doc"
                  className={styles.downloadLink}
                >
                  Download the Rent Receipt Format FY 2019-20
                </a>
              </p>
            </div>
          </div>

          <div className={styles.backToResources}>
            <a href="/resources/library" className={styles.backLink}>
              ← Back to Resources Library
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
