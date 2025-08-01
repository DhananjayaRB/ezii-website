import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import BlogsList from '@/app/coomponents/BlogsList';
import styles from './articles.module.scss';
import Head from 'next/head';

export default function ArticlesPage() {
  // Structured Data for Article List
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "EZII Blogs and Articles",
    "description": "Explore our latest blogs, articles, and insights about payroll management, HR best practices, and industry trends.",
    "url": "/articles",
    "numberOfItems": 47,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Article",
          "headline": "Prevent False Tax Deductions with Payroll Compliance",
          "url": "/articles/1"
        }
      }
      // Additional articles would be added here
    ]
  };

  // Organization Structured Data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EZII",
    "description": "EZII provides comprehensive payroll management and HR solutions for businesses."
  };

  return (
    <>
      <Head>
        <title>Blogs & Articles | EZII - Payroll Management & HR Solutions</title>
        <meta name="description" content="Explore our latest blogs, articles, and insights about payroll management, HR best practices, tax compliance, and industry trends. Stay updated with EZII's expert knowledge." />
        <meta name="keywords" content="payroll blogs, HR articles, payroll management, HR best practices, tax compliance, payroll software, employee management, EZII" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blogs & Articles | EZII - Payroll Management & HR Solutions" />
        <meta property="og:description" content="Explore our latest blogs, articles, and insights about payroll management, HR best practices, tax compliance, and industry trends." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EZII" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs & Articles | EZII - Payroll Management & HR Solutions" />
        <meta name="twitter:description" content="Explore our latest blogs, articles, and insights about payroll management, HR best practices, tax compliance, and industry trends." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="/articles" />
        
        {/* Additional Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData)
          }}
        />
      </Head>
      
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Blogs & Articles</h1>
        </div>
        {/* BlogsList Component */}
        <section className={styles.articlesSection}>
          <BlogsList />
        </section>
      </main>
      <Footer />
    </>
  );
} 