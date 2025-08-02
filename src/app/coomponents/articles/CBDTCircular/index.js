'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './cbdtCircular.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import cbdtImage from './assets/cbdt-circular.png';

export default function CBDTCircular() {
  const currentArticleId = 5;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            CBDT circular for salaried tax payers
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: April 24, 2020</span>
            <span className={styles.readTime}>2 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={cbdtImage}
              alt="CBDT Circular for Salaried Tax Payers"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <p>
            Salaried tax payers to make one time declaration to their employers of their tax regime choice. New or old tax regime. <a href="/assets/cst.pdf" download="cst.pdf">Download the CBDT circular dated April 14th, 2020</a>
          </p>
        </article>

        {/* Navigation Arrows */}
        <ArticleNavigation currentArticleId={currentArticleId} />
      </div>
    </div>
  );
} 