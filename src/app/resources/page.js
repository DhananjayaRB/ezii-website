import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import Button from '@/app/coomponents/Button';
import styles from './resources.module.scss';
import Head from 'next/head';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Blog & Resources - EZII</title>
        <meta name="description" content="Explore our blogs and resources for payroll and HR insights, tips, and industry updates." />
        <meta name="keywords" content="EZII blogs, payroll resources, HR resources, payroll tips, HR insights" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog & Resources - EZII" />
        <meta property="og:description" content="Explore our blogs and resources for payroll and HR insights, tips, and industry updates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ezii.com/resources" />
        <meta property="og:image" content="https://ezii.com/assets/resources/image.png" />
        <meta property="og:site_name" content="EZII" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Resources - EZII" />
        <meta name="twitter:description" content="Explore our blogs and resources for payroll and HR insights, tips, and industry updates." />
        <meta name="twitter:image" content="https://ezii.com/assets/resources/image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ezii.com/resources" />
      </Head>
      
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.illustration}>
            <img src="/assets/resources/image.png" alt="EZII Features" className={styles.illustrationImage} />
          </div>
          <h1 className={styles.title}>Blog & Resources</h1>
          <p className={styles.description}>
            Explore our latest insights, guides, and resources to help you make the most of EZII
          </p>
        </div>

        {/* Cards Section */}
        <section className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsGrid}>
              {/* Blogs Card */}
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <img 
                    src="/assets/resources/blogs.webp" 
                    alt="Professional team collaboration and insights" 
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>Blogs</h2>
                  <p className={styles.cardDescription}>
                    Stay updated with the latest industry insights, tips, and best practices
                  </p>
                  <div className={styles.cardButton}>
                    <Button 
                      variant="arrow" 
                      href="/articles"
                      icon="→"
                      iconPosition="right"
                    >
                      View Blogs
                    </Button>
                  </div>
                </div>
              </article>

              {/* Resources Card */}
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <img 
                    src="/assets/resources/resources.webp" 
                    alt="Team working on project and resources" 
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>Resources</h2>
                  <p className={styles.cardDescription}>
                    Access helpful guides, templates, and tools to streamline your workflow
                  </p>
                  <div className={styles.cardButton}>
                    <Button 
                      variant="arrow" 
                      href="/resources"
                      icon="→"
                      iconPosition="right"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 