'use client';

import React from "react";
import Link from "next/link";
import styles from './articleNavigation.module.scss';
import { totalArticles } from '../articlesData';

export default function ArticleNavigation({ currentArticleId }) {
  return (
    <div className={styles.navigationContainer}>
      {/* Left Arrow - Only show if not first article */}
      {currentArticleId > 1 && (
        <Link href={`/articles/${currentArticleId - 1}`} className={styles.navArrow}>
          <span className={styles.arrowLeft}>←</span>
          <span className={styles.arrowText}>Previous</span>
        </Link>
      )}
      
      {/* Right Arrow - Only show if not last article */}
      {currentArticleId < totalArticles && (
        <Link href={`/articles/${currentArticleId + 1}`} className={styles.navArrow}>
          <span className={styles.arrowText}>Next</span>
          <span className={styles.arrowRight}>→</span>
        </Link>
      )}
    </div>
  );
} 