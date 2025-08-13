import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import Button from '@/app/coomponents/Button';
import styles from './resources.module.scss';
import Head from 'next/head';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>Blog & Resources - EZII Payroll Management Solutions</title>
        <meta name="description" content="Explore comprehensive payroll and HR resources, industry insights, compliance guides, and best practices from EZII. Access expert knowledge to optimize your payroll processes." />
        <meta name="keywords" content="payroll resources, HR resources, payroll compliance, tax guides, payroll best practices, HR insights, payroll software guides, EZII resources" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog & Resources - EZII Payroll Management Solutions" />
        <meta property="og:description" content="Explore comprehensive payroll and HR resources, industry insights, compliance guides, and best practices from EZII." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ezii-website.vercel.app/resources" />
        <meta property="og:image" content="https://ezii-website.vercel.app/assets/resources/image.png" />
        <meta property="og:site_name" content="EZII" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Resources - EZII Payroll Management Solutions" />
        <meta name="twitter:description" content="Explore comprehensive payroll and HR resources, industry insights, compliance guides, and best practices from EZII." />
        <meta name="twitter:image" content="https://ezii-website.vercel.app/assets/resources/image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ezii-website.vercel.app/resources" />
      </Head>

      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <div className={styles.content}>
          <HeaderWithImage
            imageSrc="/assets/resources/image.png"
            imageAlt="EZII Payroll Resources and Blog - Comprehensive Payroll Management Solutions"
            title="Blog & Resources"
            description="Access comprehensive payroll insights, compliance guides, and industry best practices to optimize your HR operations"
            applyPurpleHue
          />
        </div>

        {/* Cards Section */}
        <section className={styles.cardsSection} aria-labelledby="resources-cards-title">
          <div className={styles.cardsContainer}>
            <div className={styles.cardsGrid}>
              {/* Blogs Card */}
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src="/assets/resources/blogs.webp"
                    alt="Professional team collaboration and payroll insights - EZII Blog Resources"
                    width={400}
                    height={300}
                    className={styles.image}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Expert Blog Articles</h3>
                  <p className={styles.cardDescription}>
                    Stay updated with the latest industry insights, compliance updates, and best practices from payroll and HR experts. Our blog covers topics ranging from tax season preparation to employee benefit optimization strategies.
                  </p>
                  <div className={styles.cardButton}>
                    <Button
                      variant="arrow"
                      href="/articles"
                      icon="→"
                      iconPosition="right"
                      aria-label="Explore EZII Blog Articles"
                    >
                      View Blogs
                    </Button>
                  </div>
                </div>
              </article>

              {/* Resources Card */}
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src="/assets/resources/resources.webp"
                    alt="Team working on payroll projects and HR resources - EZII Resource Library"
                    width={400}
                    height={300}
                    className={styles.image}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Resource Library</h3>
                  <p className={styles.cardDescription}>
                    Access helpful guides, templates, checklists, and tools designed to streamline your payroll workflow. From onboarding checklists to year-end processing guides, we provide practical resources for every stage of your payroll journey.
                  </p>
                  <div className={styles.cardButton}>
                    <Button
                      variant="arrow"
                      href="/resources/library"
                      icon="→"
                      iconPosition="right"
                      aria-label="Access EZII Resource Library"
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