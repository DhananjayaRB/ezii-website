import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import Button from '@/app/coomponents/Button';
import styles from './library.module.scss';
import Head from 'next/head';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import Image from 'next/image';

export default function ResourcesLibraryPage() {
  const resources = [
         {
       id: 1,
       title: "CBDT circular for salaried tax payers",
       description: "Salaried tax payers to make one time declaration to their employers for claiming tax relief under new tax regime",
       category: "Tax Documents",
       downloadUrl: "/resources/cbdt-circular"
     },
    {
      id: 2,
      title: "Rent Receipt Format FY 2019-20",
      description: "Download the Related form here, Rent Receipt Format FY 2019-20",
      category: "Forms",
      downloadUrl: "/resources/rent-receipt"
    },
         {
       id: 3,
       title: "Form 10I – under section 80DDB",
       description: "Download the Related form here, Form 10I – under section 80DDB",
       category: "Tax Forms",
       downloadUrl: "/resources/form-10i"
     },
         {
       id: 4,
       title: "Form 10IA – under section 80DD & 80U",
       description: "Download the Related form here, Form 10IA – under section 80DD & 80U",
       category: "Tax Forms",
       downloadUrl: "/resources/form-10ia"
     },
    {
      id: 5,
      title: "ncome-Tax-Calculator-FY-2019-20",
      description: "IDownload the Related form here, Income-Tax-Calculator-FY-2019-20",
      category: "Tools",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Form U Annual Returns Excel format",
      description: "Download the Related form here, Form U Annual Returns Excel format",
      category: "Annual Returns",
      downloadUrl: "#"
    },
    {
      id: 7,
      title: "Form X Abstract Under Minimum Wages Act",
      description: "Download the Related form here, Form X Abstract Under the Minimum Wages Act",
      category: "Compliance Forms",
      downloadUrl: "#"
    },
    {
      id: 8,
      title: "Form V Abstract Under The Payment Of Wages Act, 1936",
      description: "Download the Related form here, FORM V Abstract Under The Payment Of Wages Act, 1936",
      category: "Compliance Forms",
      downloadUrl: "#"
    },
    {
      id: 9,
      title: "Form J Abstract of Maternity Act",
      description: "Download the Related form here, Form J Abstract of Maternity Act",
      category: "Compliance Forms",
      downloadUrl: "#"
    },
    {
      id: 10,
      title: "Form U Abstract Under Payment Of Gratuity Act, 1972",
      description: "Download the Related form here, FORM U Abstract Under Payment Of Gratuity Act, 1972",
      category: "Compliance Forms",
      downloadUrl: "#"
    },
    {
      id: 11,
      title: "Form T Template",
      description: "Download the Related form here, Form T Template",
      category: "Templates",
      downloadUrl: "#"
    },
    {
      id: 12,
      title: "Form H – Leave with Wage Book – KA – S&E Act",
      description: "Download the Related form here, Form H – Leave with Wage Book – KA – S&E Act",
      category: "State Forms",
      downloadUrl: "#"
    },
    {
      id: 13,
      title: "Form F – Register of Leave with Wages – KA – S&E-1",
      description: "Download the Related form here, Form F – Register of Leave with Wages – KA – S&E-1",
      category: "State Forms",
      downloadUrl: "#"
    }
  ];

  return (
    <>
      <Head>
        <title>Resources & Downloads - EZII Payroll Management Solutions</title>
        <meta name="description" content="Download essential payroll forms, tax documents, compliance templates, and HR resources from EZII. Access comprehensive library of payroll management tools and documents." />
        <meta name="keywords" content="payroll forms, tax documents, compliance forms, HR resources, payroll templates, download forms, EZII resources" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Resources & Downloads - EZII Payroll Management Solutions" />
        <meta property="og:description" content="Download essential payroll forms, tax documents, compliance templates, and HR resources from EZII." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ezii-website.vercel.app/resources/library" />
        <meta property="og:image" content="https://ezii-website.vercel.app/assets/resources/image.png" />
        <meta property="og:site_name" content="EZII" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources & Downloads - EZII Payroll Management Solutions" />
        <meta name="twitter:description" content="Download essential payroll forms, tax documents, compliance templates, and HR resources from EZII." />
        <meta name="twitter:image" content="https://ezii-website.vercel.app/assets/resources/image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ezii-website.vercel.app/resources/library" />
      </Head>

      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <HeaderWithImage
            imageSrc="/assets/resources/image.png"
            imageAlt="EZII Resources Library - Comprehensive Payroll Forms and Documents"
            title="Resources & Downloads"
            description="Access essential payroll forms, tax documents, compliance templates, and HR resources to streamline your payroll operations"
            applyPurpleHue
          />
        </div>

        {/* Resources Grid Section */}
        <section className={styles.resourcesSection} aria-labelledby="resources-grid-title">
          <div className={styles.resourcesGrid}>
            {resources.map((resource) => (
              <article key={resource.id} className={styles.resourceCard}>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                <p className={styles.cardDescription}>
                  {resource.description}...
                </p>
                <a 
                  href={resource.downloadUrl}
                  className={styles.readMoreLink}
                  aria-label={`Read more about ${resource.title}`}
                >
                  Read more <span className={styles.arrow}>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
