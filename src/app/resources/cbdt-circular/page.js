import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './cbdt-circular.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function CBDTCircularPage() {
  return (
    <>
      <Head>
        <title>CBDT Circular - TDS on 115BAC Income - EZII Payroll Management Solutions</title>
        <meta name="description" content="CBDT circular dated April 14th, 2020 regarding TDS on 115BAC income. Salaried tax payers declaration for tax regime choice." />
        <meta name="keywords" content="CBDT circular, TDS, 115BAC income, tax regime choice, salaried tax payers, EZII resources" />
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
                 src="/assets/resorcesDownloads/115BAC.png"
                 alt="CBDT Circular regarding TDS on 115BAC income"
                 width={800}
                 height={600}
                 className={styles.circularImage}
                 priority
               />
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.contentWrapper}>
              <p className={styles.description}>
                Salaried tax payers to make one time declaration to their employers of their tax regime choice. New or old tax regime.{' '}
                                 <a 
                   href="/assets/resorcesDownloads/_wp-content_uploads_2020_04_Circular-regarding-TDS-on-115BAC-income.pdf" 
                   download="_wp-content_uploads_2020_04_Circular-regarding-TDS-on-115BAC-income.pdf"
                   className={styles.downloadLink}
                 >
                   Download the CBDT circular dated April 14th, 2020
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
