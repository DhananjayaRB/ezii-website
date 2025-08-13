import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import styles from './form-10ia.module.scss';
import Head from 'next/head';
import Image from 'next/image';

export default function Form10IAPage() {
  return (
    <>
      <Head>
        <title>Form 10IA – under section 80DD & 80U - EZII Payroll Management Solutions</title>
        <meta name="description" content="Form 10IA under section 80DD & 80U. Download the related form for Form 10IA under section 80DD & 80U." />
        <meta name="keywords" content="Form 10IA, section 80DD, section 80U, tax forms, EZII resources, forms and formats" />
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
                src="/assets/resorcesDownloads/form10IA.png"
                alt="Form 10IA under section 80DD & 80U"
                width={800}
                height={600}
                className={styles.formImage}
                priority
              />
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.contentWrapper}>
              <h1 className={styles.pageTitle}>Form 10IA – under section 80DD & 80U</h1>
              <p className={styles.description}>
                Download the Related form here, Form 10IA – under section 80DD & 80U{' '}
                <a 
                  href="/assets/resorcesDownloads/Form-10IA-under-section-80DD-80U.pdf" 
                  download="Form-10IA-under-section-80DD-80U.pdf"
                  className={styles.downloadLink}
                >
                  Download the Form 10IA under section 80DD & 80U
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
