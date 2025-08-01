'use client';

import React from "react";
import Link from "next/link";
import styles from './blogCard.module.scss';

export default function BlogCard({ title, description, url, id }) {
  return (
    <article className={styles.blogCard}>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.cardArrow}>
          <Link href={`/articles/${id}`}>
            <span className={styles.arrow}>Read More →</span>
          </Link>
        </div>
      </div>
    </article>
  );
} 