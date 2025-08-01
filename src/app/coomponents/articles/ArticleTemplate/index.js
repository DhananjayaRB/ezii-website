'use client';

import React from "react";
import Link from "next/link";
import styles from './articleTemplate.module.scss';
import ArticleNavigation from '../ArticleNavigation';

export default function ArticleTemplate({ 
  articleId, 
  title, 
  publishDate, 
  readTime, 
  intro, 
  content 
}) {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            {title}
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: {publishDate}</span>
            <span className={styles.readTime}>{readTime} min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          <p className={styles.articleIntro}>
            {intro}
          </p>
          
          {content}

          <div className={styles.articleFooter}>
            <p>
              For more information about payroll compliance and tax deduction management, 
              contact our team of experts.
            </p>
          </div>
        </article>

        {/* Navigation Arrows */}
        <ArticleNavigation currentArticleId={articleId} />
      </div>
    </div>
  );
} 