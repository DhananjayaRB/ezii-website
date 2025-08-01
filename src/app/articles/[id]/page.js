import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import PreventFalseTaxDeductions from '@/app/coomponents/articles/PreventFalseTaxDeductions';
import DINKCouples from '@/app/coomponents/articles/DINKCouples';
import PFScheme from '@/app/coomponents/articles/PFScheme';
import YoungProfessional from '@/app/coomponents/articles/YoungProfessional';
import CBDTCircular from '@/app/coomponents/articles/CBDTCircular';
import styles from './article.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { getArticleById } from '@/app/coomponents/articles/articlesData';

export default function ArticlePage({ params }) {
  const { id } = params;
  
  // Map article IDs to components
  const articleComponents = {
    '1': PreventFalseTaxDeductions,
    '2': DINKCouples,
    '3': PFScheme,
    '4': YoungProfessional,
    '5': CBDTCircular,
    // Add more articles as they are created
    // '6': Article6,
    // etc.
  };

  const ArticleComponent = articleComponents[id];
  
  // Get article data for SEO
  const articleData = getArticleById(parseInt(id));
  
  // Default values if article not found
  const articleTitle = articleData?.title || `Article ${id}`;
  const articleDescription = articleData?.description || "Read our latest insights and articles about payroll management and HR best practices.";

  if (!ArticleComponent) {
    return (
      <>
        <Head>
          <title>Article Not Found | EZII Blogs</title>
          <meta name="description" content="The article you're looking for doesn't exist." />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Navbar />
        <div className={styles.errorContainer}>
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link href="/articles" className={styles.backLink}>
            ← Back to Articles
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Structured Data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleTitle,
    "description": articleDescription,
    "author": {
      "@type": "Organization",
      "name": "EZII"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EZII"
    },
    "datePublished": "2025-07-17",
    "dateModified": "2025-07-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `/articles/${id}`
    }
  };

  // Breadcrumb Structured Data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": "/articles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `/articles/${id}`
      }
    ]
  };

  return (
    <>
      <Head>
        <title>{articleTitle} | EZII Blogs</title>
        <meta name="description" content={articleDescription} />
        <meta name="keywords" content="payroll management, HR best practices, tax compliance, payroll software, EZII" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="EZII" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="EZII" />
        <meta property="article:published_time" content="2025-07-17T00:00:00Z" />
        <meta property="article:modified_time" content="2025-07-17T00:00:00Z" />
        <meta property="article:author" content="EZII" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`/articles/${id}`} />
        
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
            __html: JSON.stringify(breadcrumbData)
          }}
        />
      </Head>
      
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main}>
        <ArticleComponent />
      </main>
      <Footer />
    </>
  );
} 