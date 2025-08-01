'use client';

import React, { useState } from "react";
import BlogCard from "../BlogCard";
import styles from './blogsList.module.scss';
import { blogs } from '../articles/articlesData';

export default function BlogsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(12); // Show first 12 initially

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedBlogs = filteredBlogs.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, blogs.length));
  };

  return (
    <div className={styles.blogsContainer}>
      {/* Search Bar */}
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.resultsCount}>
          {filteredBlogs.length} articles found
        </div>
      </div>

      {/* Blogs Grid */}
      <div className={styles.blogsGrid}>
        {displayedBlogs.map(blog => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            url={blog.url}
          />
        ))}
      </div>

      {/* Load More Button */}
      {displayedBlogs.length < filteredBlogs.length && (
        <div className={styles.loadMoreSection}>
          <button onClick={loadMore} className={styles.loadMoreBtn}>
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
} 